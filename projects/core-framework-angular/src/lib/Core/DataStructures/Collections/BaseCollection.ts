import {IBaseCollection} from "../../Interfaces/DataStructures/Collections/IBaseCollection";
import {IBaseModel} from "../../Interfaces/DataStructures/Models/IBaseModel";

export abstract class BaseCollection implements IBaseCollection {

    private _data: Array<IBaseModel> = [];

    /**
     * @inheritDoc
     */
    count(): number {
        return this._data.length;
    }


    /**
     * @inheritDoc
     */
    data(): Array<IBaseModel> {
        return this._data;
    }

    /**
     * @inheritDoc
     */
    abstract model(): IBaseModel;

    /**
     * @inheritDoc
     */
    add(model: IBaseModel): this {
        this._data.push(model);
        return this;
    }

    /**
     * @inheritDoc
     */
    clear(): this {
        this._data.splice(0, this.count());
        return this;
    }
}