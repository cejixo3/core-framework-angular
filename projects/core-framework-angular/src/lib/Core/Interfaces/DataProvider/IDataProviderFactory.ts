import {IBaseCollection} from '../DataStructures/Collections/IBaseCollection';
import {IEndpoint} from '../DataStructures/IEndpoint';
import {IBaseModel} from '../DataStructures/Models/IBaseModel';
import {ICollectionDataProvider} from './ICollectionDataProvider';
import {IModelDataProvider} from './IModelDataProvider';

/**
 *
 */
export interface IDataProviderFactory {
    /**
     * makes a new instance of data provider for collections
     * @param {IEndpoint} e
     * @param {IBaseCollection} c
     * @returns {ICollectionDataProvider}
     */
    collection(e: IEndpoint, c: IBaseCollection|any): ICollectionDataProvider

    /**
     * makes a new instance of model data provider
     * @param {IEndpoint} e
     * @param {IBaseModel} m
     * @returns {IModelDataProvider}
     */
    model(e: IEndpoint, m: IBaseModel|any): IModelDataProvider
}