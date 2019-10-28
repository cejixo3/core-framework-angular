export interface IAttribute {
    /**
     * Provide attribute value
     * @return {any}
     */
    value(): any;

    /**
     * Define value to current attribute
     * @param value
     * @return {this}
     */
    setValue(value: any): this;

    /**
     * Provide attribute label
     * @return {string}
     */
    label(): string;

    /**
     * Provide description for current attribute
     * @returns {string}
     */
    description(): string;

    /**
     * Provide errors or empty array
     * @return {Array<string>}
     */
    errors(): Array<string>;

    /**
     * Provide true if value equal to val param
     * @param val
     * @return {boolean}
     */
    is(val: any): boolean;
}