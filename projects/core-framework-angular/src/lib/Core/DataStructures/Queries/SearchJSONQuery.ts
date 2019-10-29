import {ICollectionQuery, SORT} from '../../Interfaces/DataStructures/Queries/ICollectionQuery';
import {BaseQuery} from './BaseQuery';

export class SearchJSONQuery extends BaseQuery implements ICollectionQuery {

    private _sort: { [attributeName: string]: string } = {};

    constructor(private query: any) {
        super();

    }

    toJSON(): any {
        return {
            forGrid: false,
            jsonQuery: JSON.stringify(this.query),
            limit: this.limit(),
            skip: this.offset()
        };
    }

    public filter(): any {
        return this.query;
    }

    /**
     * @inheritDoc
     */
    public sort(): { [p: string]: string } {
        return this._sort;
    }

    /**
     * @inheritDoc
     */
    public setSort(attributeName: string, direction: string): this {
        if ([SORT.ASC, SORT.DESC].indexOf(direction) === -1) {
            return this;
        }
        Object.keys(this._sort).forEach((n: string) => {
            delete this._sort[n];
        });
        this._sort[attributeName] = direction;
        return this;
    }


}