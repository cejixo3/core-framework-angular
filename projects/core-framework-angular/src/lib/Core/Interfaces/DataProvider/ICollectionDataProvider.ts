import {ICollectionQuery} from '../DataStructures/Queries/ICollectionQuery';
import {EventEmitter} from '@angular/core';

export interface ICollectionDataProvider {
    /**
     * Provide all records count
     * @return {number}
     */
    allCount(): number;

    /**
     * Count items on a page
     * @return {number}
     */
    onPageCount(): number;

    /**
     * Raise events
     * @return {EventEmitter<string>}
     */
    eventEmitter(): EventEmitter<string>;

    /**
     * Provide records according query
     * @param {ICollectionQuery} query
     * @return {Promise<this>}
     */
    find(query?: ICollectionQuery): Promise<this>;

    /**
     * Provide records according query
     * Does not clear collection
     * @param {ICollectionQuery} query
     * @return {Promise<this>}
     */
    findChunk(query?: ICollectionQuery): Promise<this>;

    /**
     * Provide only unique records according query
     * @param {string} fieldName
     * @param {ICollectionQuery} query
     * @returns {Promise<this>}
     */
    findUnique(fieldName: string, query?: ICollectionQuery): Promise<this>;

    /**
     * Remove items by query
     * @param {ICollectionQuery} query
     * @returns {Promise<this>}
     */
    remove(query: ICollectionQuery): Promise<this>;

    /**
     * Provide last query
     * @returns {ICollectionQuery | null}
     */
    lastQuery(): ICollectionQuery;

    /**
     * This flag indicates transport activity
     * @return {boolean}
     */
    isWaitingForTransport(): boolean;
}
