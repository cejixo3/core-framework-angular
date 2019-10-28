import {IAttribute} from "../Interfaces/DataStructures/IAttribute";

export class SimpleAttribute implements IAttribute {

    constructor(private _val: any,
                private _label: string,
                private _description: string = '') {

    }

    value(): any {
        return this._val;
    }

    setValue(value: any): this {
        this._val = value;
        return this;
    }

    label(): string {
        return this._label;
    }

    description(): string {
        return this._description;
    }

    errors(): Array<string> {
        return [];
    }

    is(val: any): boolean {
        return this._val === val;
    }

}