import {IBaseModel} from '../Models/IBaseModel';

export interface IBaseCollection {

    /**
     * This method should provide a new instance of model
     * @return {IBaseModel}
     */
    model(): IBaseModel;

    /**
     * Remove all from data
     * @return {this}
     */
    clear(): this;

    /**
     * Add model to data list
     * @param {IBaseModel} model
     * @return {this}
     */
    add(model: IBaseModel): this;

    /**
     * Provide list of data that exist in current collection
     * @return {Array<IBaseModel>}
     */
    data(): Array<IBaseModel>;

    /**
     * How many records collection contain
     * @return {number}
     */
    count(): number;
}