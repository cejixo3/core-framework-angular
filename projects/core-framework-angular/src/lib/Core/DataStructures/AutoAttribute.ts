import {Attribute} from './Attribute';
import {IBaseModel} from '../Interfaces/DataStructures/Models/IBaseModel';

export class AutoAttribute extends Attribute {

    constructor(private labels: { [s: string]: any },
                private attributes: { [s: string]: any },
                private name,
                private model: IBaseModel) {
        super();
    }

    setValue(value: any): this {
        this.attributes[this.name] = value;
        this.model.onAttributesChanged().emit(this.name);
        return this;
    }

    value(): any {
        return this.attributes[this.name];
    }

    label(): string {
        return this.labels[this.name];
    }

    errors(): Array<string> {
        return this.model.errors(this.name);
    }

    is(val: any): boolean {
        return this.attributes[this.name] === val;
    }

    public description(): string {
        return this.model.schema()[this.name].$d ? this.model.schema()[this.name].$d : '';
    }
}