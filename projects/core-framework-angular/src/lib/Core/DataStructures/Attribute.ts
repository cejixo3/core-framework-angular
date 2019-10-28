import {IAttribute} from '../Interfaces/DataStructures/IAttribute';

export abstract class Attribute implements IAttribute {

    abstract label(): string;

    abstract setValue(value: any): this;

    abstract value(): any;

    abstract errors(): Array<string>;

    abstract is(val: any): boolean;

    abstract description(): string;

}