import {IModelBulkActon} from '../Interfaces/IModelBulkActon';
import {IModel} from '../Interfaces/DataStructures/Models/IModel';
import {IAttribute} from "../Interfaces/DataStructures/IAttribute";

export abstract class AModelBulkActon implements IModelBulkActon {

    protected _iconClasses: string[] = [];
    protected _btnClasses: string[] = [];

    /**
     * @inheritDoc
     */
    abstract name(): string;

    /**
     * @inheritDoc
     */
    abstract canRun<T extends IModel>(models: T[]): boolean ;

    /**
     * @inheritDoc
     */
    abstract label(): string ;

    /**
     * @inheritDoc
     */
    abstract run<T extends IModel>(models: T[]): Promise<any> ;

    /**
     * @inheritDoc
     */
    btnClasses(): string[] {
        return this._btnClasses;
    }

    /**
     * @inheritDoc
     */
    iconClasses(): string[] {
        return this._iconClasses;
    }

    /**
     * @inheritDoc
     */
    hasAttribute(): boolean {
        return false;
    }

    /**
     * @inheritDoc
     */
    getAttribute(): IAttribute {
        throw new Error('You must override this method to enable functionality!');
    }
}