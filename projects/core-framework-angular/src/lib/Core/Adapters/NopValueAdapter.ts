import {IValueAdapter} from '../Interfaces/IValueAdapter';

export class NopValueAdapter implements IValueAdapter {
    fromFmt(fmt: any): any {
        return fmt;
    }

    toFmt(val: any): any {
        return val;
    }

    valid(val: any): boolean {
        return true;
    }
}