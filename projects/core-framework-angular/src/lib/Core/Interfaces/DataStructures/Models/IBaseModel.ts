import {IAttribute} from '../IAttribute';
import {EventEmitter} from '@angular/core';

export interface ISchemaItem {
    $t: string | Array<any> | Function;
    $v?: any; // validation rules
    $a?: string; // attribute alias name.@todo need to implement
    $c?: string; // copy of attribute
    $d?: string; // description
    $l?: string; // custom label @todo need to implement
}

export interface SchemaType {
    [attributeName: string]: ISchemaItem;
}

export interface LabelsType {
    [s: string]: string;
}

export interface DescriptionsType {
    [s: string]: string;
}

export interface AttributesType {
    [s: string]: any;
}

export interface ErrorsType {
    [s: string]: string[];
}

export interface IBaseModel {
    /**
     * Provide primary key of model
     * By this key we can find model in collection
     * @return {string | number}
     */
    /**
     * Provide lang key
     * @return {string}
     */
    langKey(): string;

    /**
     * Provide language related model
     * @param {string} lang
     * @return {IBaseModel}
     */
    lang(lang: string): IBaseModel;

    /**
     * Provide model schema
     * @return SchemaType
     */
    schema(): SchemaType;

    /**
     * Provide attribute labels
     * @return LabelsType
     */
    labels(): LabelsType;

    /**
     * Provide attribute descriptions
     * @return DescriptionsType
     */
    descriptions(): DescriptionsType;

    /**
     * Provide attribute by name
     * @param {string} name
     * @return {IAttribute}
     */
    attribute(name: string): IAttribute;

    /**
     * Define attribute value
     * @param {string} name
     * @param {*} value
     * @return {IBaseModel}
     */
    setAttribute(name: string, value: any): this;

    /**
     * Set attributes recursive
     * @param {AttributesType} attributes
     * @return {this}
     */
    setAttributes(attributes: AttributesType): this;

    /**
     * Validate model by rules and provide result
     * Promise should be rejected if validation fails and resolved if success
     * @return {Promise<any>}
     */
    validate(): Promise<any>;

    /**
     * Clear existing errors
     * @return {this}
     */
    clearErrors(): this;

    /**
     * Provide a copy of Raw attributes
     * @return {{[p: string]: any}}
     */
    copyRawAttributes(names?: Array<string>): { [name: string]: any };

    /**
     * Provide list of errors by attribute
     * @param {string} name
     * @return {Array<string>}
     */
    errors(name: string): Array<string>;

    /**
     * Add Error to model
     * @param {string} name
     * @param {string} message
     * @returns {this}
     */
    setError(name: string, message: string): this;

    /**
     * Set errors recursive
     * @param {ErrorsType} errors
     * @return {this}
     */
    setErrors(errors: ErrorsType): this;

    /**
     * Checks is model valid now or not
     * @return {boolean}
     */
    isValid(): boolean;

    /**
     * Provide model clone without references on old object
     * @return {this}
     */
    clone(): this;

    /**
     * Provide event emitter
     * @return {EventEmitter<string>}
     */
    onAttributesChanged(): EventEmitter<string>;
}