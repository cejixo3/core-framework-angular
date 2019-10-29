import {BaseCollection} from './BaseCollection';
import {ICollection} from '../../Interfaces/DataStructures/Collections/ICollection';
import {ICollectionDataProvider} from '../../Interfaces/DataProvider/ICollectionDataProvider';
import {SORT} from '../../Interfaces/DataStructures/Queries/ICollectionQuery';

export abstract class ACollection extends BaseCollection implements ICollection {
    /**
     * @inheritDoc
     */
    dataProvider(): ICollectionDataProvider {
        if (typeof this['$dp'] === 'object') {
            return this['$dp'];
        }
        throw new Error('You should use any of data provider decorators');
    }

    /**
     *
     */
    public fullTextSearchKeys(): string[] {
        return [];
    }

    /**
     * @inheritDoc
     */
    public defaultSort(): { [fieldName: string]: string } {
        return {'created_at': SORT.DESC};
    }

    /**
     * Provide list of keys that able to be sorted
     */
    public sortKeys(): string[] {
        return [];
    }
}