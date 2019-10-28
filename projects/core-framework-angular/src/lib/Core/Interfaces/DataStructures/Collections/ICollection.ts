import {IBaseCollection} from './IBaseCollection';
import {ICollectionDataProvider} from '../../DataProvider/ICollectionDataProvider';

export interface ICollection extends IBaseCollection {
    /**
     * Provide data provider
     * @return {ICollectionDataProvider}
     */
    dataProvider(): ICollectionDataProvider;

    /**
     * Provide list for full text search
     * @returns {string[]}
     */
    fullTextSearchKeys(): string[];

    /**
     * List of keys that can be sorted
     * @returns {string[]}
     */
    sortKeys(): string[];

    /**
     * Default sort of collection
     * @return {{[p: string]: number}}
     */
    defaultSort(): { [fieldName: string]: string };
}
