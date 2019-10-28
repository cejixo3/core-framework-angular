export interface IValueAdapter {

    /**
     * From value to format
     * @param val
     * @return {string}
     */
    toFmt(val: any): any;

    /**
     * From format to value
     * @param {string} fmt
     * @return {any}
     */
    fromFmt(fmt: any): any;

    valid(val: any): boolean;
}