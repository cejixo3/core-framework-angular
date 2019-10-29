import {OnDestroy, OnInit} from '@angular/core';
import {ICollection} from '../../../../../Interfaces/DataStructures/Collections/ICollection';
import {ICollectionQuery} from '../../../../../Interfaces/DataStructures/Queries/ICollectionQuery';
import {GlobalSearch} from '../../../../../Services/GlobalSearch';
import {ServiceLocator} from '../../../../../ServiceLocator';
import {IModelBulkActon} from '../../../../../Interfaces/IModelBulkActon';
import {ABreadCrumbComponent} from '../BreadCrumb/ABreadCrumbComponent';

export abstract class AListComponent extends ABreadCrumbComponent implements OnInit, OnDestroy {

    protected _collection: ICollection;
    protected _actions: IModelBulkActon[] = [];
    protected gs: GlobalSearch;

    public constructor() {
        super();
        this.gs = ServiceLocator.injector.get(GlobalSearch);
        this._collection = this.makeCollection();
        this.loadCollection();
        this._actions = this.makeDefaultActions().concat(this.makeActions());
    }

    private makeDefaultActions(): IModelBulkActon[] {
        return [];
    }

    /**
     * Base actions.
     * If you want to add some actions you must redefine this method
     */
    protected makeActions(): IModelBulkActon[] {
        return [];
    }

    /**
     * Creates a new instance of collection for working with it
     */
    protected abstract makeCollection(): ICollection;


    /**
     * Hook on init this component
     */
    public ngOnInit(): void {
        this.gs.toggleEvent.emit(true);
    }

    /**
     * Hook on destroy this component
     */
    public ngOnDestroy(): void {
        this.gs.toggleEvent.emit(false);
    }

    /**
     * Provides collection reference
     */
    public collection(): ICollection {
        return this._collection;
    }

    /**
     * Load collection
     */
    private loadCollection() {
        // first load
        this._collection
            .dataProvider()
            .find()
            .then(() => {
                // console.log('new data fetched');
            })
            .catch((e) => {
                console.log(`error during on search`, e);
            });
    }

    /**
     *
     */
    protected collectionQuery(): ICollectionQuery {
        throw new Error('You must Override collection Query before use it');
    }

    /**
     * Provide actions list
     */
    public actions(): IModelBulkActon[] {
        if (this._actions.length === 0) {
            throw new Error(`There are no actions defined in current component. You must override 'makeActions' method!`);
        }
        return this._actions;
    }
}
