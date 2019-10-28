import {IModel} from './DataStructures/Models/IModel';
import {IAttribute} from "./DataStructures/IAttribute";

export enum ActionNames {
    PLinkAction = 'p-link-action',
    PSearchAction = 'p-search-action',
    PModalAction = 'p-modal-action',
    PModelBulkRemoveAction = 'p-model-bulk-remove-action',
    PCollectionBulkRemoveAction = 'p-collection-bulk-remove-action',
}

/**
 * Simple bulk action interface
 */
export interface IModelBulkActon {
    /**
     * Provide action name
     * @return string
     */
    name(): string;

    /**
     * Provide action label
     * @return {string}
     */
    label(): string;

    /**
     * Provide list of button classes
     * @return {string[]}
     */
    btnClasses(): string[];

    /**
     * Provide list of icon classes
     * @return {string[]}
     */
    iconClasses(): string[];

    /**
     * Is action able to run
     * @param {IModel[]} models
     * @return {boolean}
     */
    canRun<T extends IModel>(models: T[]): boolean;

    /**
     * Execute action over all models
     * @param {IModel[]} models
     * @return {Promise<boolean>}
     */
    run<T extends IModel>(models: T[]): Promise<any>;

    /**
     * Check attribute for existing
     * If attribute exist, input field appears
     * @return {boolean}
     */
    hasAttribute(): boolean;

    /**
     *
     * Get attribute
     * @return {IAttribute | null}
     */
    getAttribute(): IAttribute;
}