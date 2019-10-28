export const SORT = {
    ASC: 'asc',
    DESC: 'desc'
};


export interface ICollectionQuery {
    /**
     *
     * @returns {any}
     */
    toJSON(): any;

    /***
     *
     * @returns {number}
     */
    limit(): number;

    /**
     *
     * @returns {number}
     */
    offset(): number;

    /**
     *
     * @param {number} limit
     * @returns {this}
     */
    setLimit(limit: number): this;

    /**
     *
     * @param {number} offset
     * @returns {this}
     */
    setOffset(offset: number): this;

    /**
     * Provide mongo filter
     * @returns {any}
     */
    filter(): any;

    /**
     * Provide sort settings
     * Example:
     * `
     *      {'created_at':'asc','created_by':'desc'}
     * `
     * @returns {{[p: string]: string}}
     */
    sort(): { [attributeName: string]: string }

    /**
     * Define sort rules to query
     * Example:
     * `
     *      collectionQuery.setSort('created_at','asc');
     * `
     * @param {string} attributeName
     * @param {string} direction
     * @returns {this}
     */
    setSort(attributeName: string, direction: string): this;
}