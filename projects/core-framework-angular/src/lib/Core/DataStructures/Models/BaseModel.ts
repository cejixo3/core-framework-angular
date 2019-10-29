import {
    AttributesType, DescriptionsType,
    ErrorsType,
    IBaseModel,
    LabelsType,
    SchemaType
} from '../../Interfaces/DataStructures/Models/IBaseModel';
import {IAttribute} from '../../Interfaces/DataStructures/IAttribute';
import {AutoAttribute} from '../AutoAttribute';
import {validate} from 'validate.js';
import {EventEmitter} from '@angular/core';

export abstract class ABaseModel implements IBaseModel {

    /**
     * Internal dictionary for keeping attributes
     */
    protected attributes = {};

    private $services = {
        $onAttributesChanged: new EventEmitter<string>(),
        $nullValuesMap: {
            'string': '',
            'number': 0,
            'boolean': false,
            'bool': false,
            'array': [],
            'date_int_ms': new Date(),
        },
        $errors: {}
    };

    public langKey(): string {
        return 'lng';
    }

    public lang(lang: string): IBaseModel {
        return this.attribute(`${this.langKey()}.${lang}`).value();
    }

    public constructor() {
        this.initEmptyAttributes();
    }

    /**
     * @inheritDoc
     */
    abstract schema(): SchemaType;

    /**
     * Detect null values for each type
     */
    private nullValueByType(type: any): any {
        if (this.isTypeLocalized(type)) {
            const res = {};
            type.slice(2, type.length).forEach((lng) => {
                res[lng] = (new type[1]());
            });
            return res;
        }

        if (Array.isArray(type)) {
            return this.$services.$nullValuesMap['array'];
        }

        if (typeof type === 'function') {
            const c: any | IBaseModel = type;
            return new c();
        }

        if (this.$services.$nullValuesMap.hasOwnProperty(type)) {
            return this.$services.$nullValuesMap[type];
        }
        return undefined;
    }

    /**
     * Initi attributes after model construct
     */
    private initEmptyAttributes(): IBaseModel {
        Object
            .keys(this.schema())
            .forEach(n => this.setAttributeBySchema(n, this.nullValueByType(this.schema()[n].$t)));
        return this;
    }

    /**
     * Checks is T localized model
     */
    private isTypeLocalized(t: any): boolean {
        return Array.isArray(t) && t.length >= 3 && t[0] === 'localized';
    }

    private extactLangsFromType(t: any): string[] {
        if (this.isTypeLocalized(t)) {
            return t.slice(2, t.length);
        }
        return [];
    }

    /**
     * Defining each attribute by declared schema
     */
    private setAttributeBySchema(name: string, value: any): this {
        if (this.schema().hasOwnProperty(name)) {

            const cast = (name: string, value: any, type?: string | any): any => {
                /**@override IBaseModel this */
                const t = type ? type : this.schema()[name].$t;
                if (typeof t === 'function') { // we think that it is another model
                    const a = (new t());
                    if (value != null) {
                        a.setAttributes(value);
                    }
                    return a;
                }

                switch (t) {
                    case 'string':
                        return String(value);
                    case 'date_int_ms':
                        return new Date(value);
                    case 'number':
                        return Number(value);
                    case 'bool':
                    case 'boolean':
                        if (value === '0') {
                            value = false;
                        }
                        if (value === '1') {
                            value = true;
                        }
                        return Boolean(value);
                }
            };
            if (this.isTypeLocalized(this.schema()[name].$t)) {
                const t = <Array<any>>this.schema()[name].$t;
                this.extactLangsFromType(t).forEach((lng) => {
                    const a = (new t[1]());
                    a.setAttributes(value[lng]);
                    this.attributes[`${name}.${lng}`] = a;
                });
                return;
            }
            if (Array.isArray(this.schema()[name].$t)) {
                this.attributes[name] = [];
                if (this.schema()[name].$t.length !== 1) {
                    throw new Error(`Allowed only one type for array definitions for attribute "${name}"`);
                }
                if (!Array.isArray(value)) {
                    throw new Error(`Value must be array according to scheme definition for attribute "${name}"`);
                }
                value.forEach((val) => {
                    this.attributes[name].push(cast(name, val, this.schema()[name].$t[0]));
                });

            } else {
                this.attributes[name] = cast(name, value);
            }

            this.fillAttributesCopies();
        }
        return this;
    }

    private fillAttributesCopies(): this {
        Object
            .keys(this.schema())
            .forEach((attrName) => {
                if (this.schema()[attrName].$c &&
                    this.attributes.hasOwnProperty(this.schema()[attrName].$c)) {
                    this.attributes[attrName] = this.attributes[this.schema()[attrName].$c];
                }
            });
        return this;
    }

    /**
     * @inheritDoc
     */
    labels(): LabelsType {
        return Object
            .keys(this.schema())
            .reduce((p: { [s: string]: string }, c) => {
                if (this.schema()[c].$l) {
                    p[c] = this.schema()[c].$l;
                    return p;
                }
                p[c] = c
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, function (str) {
                        return str.toUpperCase();
                    });
                p[c] = c.split('_').map((word: string) => {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                }).join(' ');
                return p;
            }, {});
    }

    /**
     * @inheritDoc
     */
    descriptions(): DescriptionsType {
        return {};
    }

    /**
     * @inheritDoc
     */
    attribute(name: string): IAttribute {
        return new AutoAttribute(this.labels(), this.attributes, name, this);
    }

    /**
     * @inheritDoc
     */
    setAttribute(name: string, value: any): this {
        return this.setAttributeBySchema(name, value);
    }

    /**
     * @inheritDoc
     */
    setAttributes(attributes: AttributesType): this {
        Object
            .keys(attributes)
            .forEach((name) => {
                this.setAttributeBySchema(name, attributes[name]);
            });
        return this;
    }

    /**
     * @inheritDoc
     */
    validate(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.clearErrors();
            this.$services.$errors = validate(this.attributes, Object
                .keys(this.schema())
                .reduce((p, c) => {
                    if (this.schema()[c].$v) {
                        p[c] = this.schema()[c].$v;
                    }
                    return p;
                }, {}));
            if (this.$services.$errors === undefined) {
                this.$services.$errors = {};
                resolve();
            } else {
                reject();
            }
        });
    }

    /**
     * Represent this model as JSON object annotation
     */
    toJSON() {
        return Object.keys(this.schema()).reduce((p, c, i, a) => {
            if (this.schema()[c].$t === 'date_int_ms') {
                p[c] = this.attributes[c].getTime();
            } else if (this.isTypeLocalized(this.schema()[c].$t)) {
                p[c] = {};
                this.extactLangsFromType(this.schema()[c].$t).forEach((lang) => {
                    p[c][lang] = this.attributes[`${c}.${lang}`];
                });
            } else {
                p[c] = this.attributes[c];
            }
            return p;
        }, {});
    }

    /**
     * @inheritDoc
     */
    errors(name: string): Array<string> {
        return Array.isArray(this.$services.$errors[name]) ? this.$services.$errors[name] : [];
    }

    /**
     * @inheritDoc
     */
    isValid(): boolean {
        return Object.keys(this.$services.$errors).length > 0;
    }

    /**
     * @inheritDoc
     */
    clearErrors(): this {
        Object
            .keys(this.$services.$errors)
            .forEach((v) => {
                delete this.$services.$errors[v];
            });
        return this;
    }

    /**
     * @todo add ability to detect models
     */
    copyRawAttributes(names?: Array<string>): { [name: string]: any } {
        try {
            const ser = JSON.stringify(Object.keys(this.schema()).reduce((p, c) => {
                if (Array.isArray(names)) {
                    if (names.indexOf(c) !== -1) {
                        p[c] = this.attribute(c).value();
                    }
                } else {
                    p[c] = this.attribute(c).value();
                }
                return p;
            }, {}));
            return JSON.parse(ser);
        } catch (e) {
            console.log(`model clone: could not to serialize / un serialize attributes!, message ${e.message}`, e);
        }
    }

    /**
     * @inheritDoc
     */
    clone(): this {
        const c: any = this.constructor,
            cloned = new c;
        cloned.setAttributes(this.copyRawAttributes());
        return cloned;
    }

    /**
     * @inheritDoc
     */
    onAttributesChanged(): EventEmitter<string> {
        return this.$services.$onAttributesChanged;
    }

    /**
     * @inheritDoc
     */
    public setError(name: string, message: string): this {
        if (this.schema().hasOwnProperty(name)) {
            if (!Array.isArray(this.$services.$errors[name])) {
                this.$services.$errors[name] = [];
            }
            this.$services.$errors[name].push(message);
        }
        return this;
    }


    /**
     * @inheritDoc
     */
    public setErrors(errors: ErrorsType): this {
        Object.keys(errors).forEach((name: string) => {
            if (Array.isArray(errors[name])) {
                errors[name].forEach((message: string) => {
                    this.setError(name, message);
                });
            }
        });

        return this;
    }
}