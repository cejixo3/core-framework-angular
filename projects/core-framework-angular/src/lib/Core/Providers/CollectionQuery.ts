import {Injectable} from '@angular/core';
import {ICollectionQuery, SORT} from '../Interfaces/DataStructures/Queries/ICollectionQuery';
import {BaseQuery} from '../DataStructures/Queries/BaseQuery';

@Injectable()
export class CollectionQuery extends BaseQuery implements ICollectionQuery {

    private _sort: { [attributeName: string]: string } = {};

    private _query = {};

    setTerm(term: string, fts: string[] = []): this {
        try {
            this._query = JSON.parse(term);
            return this;
        } catch (e) {

        }

        if (fts.length === 0) {
            fts.push('name');
        }
        this._query = term ? fts.reduce((p, c) => {
            let t = {};
            t[c] = {'$regex': term, $options: 'i'};
            p.$or.push(t);
            return p;
        }, {$or: []}) : {};
        return this;
    }

    toJSON(): any {
        return {
            forGrid: true,
            jsonQuery: JSON.stringify(this._query),
            limit: this.limit(),
            skip: this.offset()
        };
    }

    public filter(): any {
        return this._query;
    }

    public sort(): { [p: string]: string } {
        return this._sort;
    }

    /**
     *
     * @param {string} attributeName
     * @param {string} direction
     * @returns {this}
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