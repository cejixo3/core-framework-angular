import {IAttribute} from '../Interfaces/DataStructures/IAttribute';

export  class ReadOnlyAttribute implements IAttribute {

    private errs = [];

    constructor(protected lbl: string, protected val: any) {

    }

    label(): string {
        return this.lbl;
    }

    setValue(value: any): this {
        return this;
    };

    value(): any {
        return this.val;
    };

    errors(): Array<string> {
        return this.errs;
    };

    is(val: any): boolean {
        return this.value() === val;
    };

    public description(): string {
        return "";
    }

}