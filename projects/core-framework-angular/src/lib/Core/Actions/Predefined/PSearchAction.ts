import {ICollection} from '../../Interfaces/DataStructures/Collections/ICollection';
import {AModelBulkActon} from '../AModelBulkActon';
import {IModel} from '../../Interfaces/DataStructures/Models/IModel';
import {ActionNames} from '../../Interfaces/IModelBulkActon';
import {CollectionQuery} from "../../Providers/CollectionQuery";
import {IAttribute} from "../../Interfaces/DataStructures/IAttribute";
import {SimpleAttribute} from "../../DataStructures/SimpleAttribute";
import {ICollectionQuery} from "../../Interfaces/DataStructures/Queries/ICollectionQuery";

export class PSearchAction extends AModelBulkActon {

    protected _iconClasses: string[] = ['fas', 'fa-search'];
    protected _btnClasses: string[] = ['btn', 'btn-outline-info', 'btn-sm'];
    protected _attribute: IAttribute;

    constructor(private _collection: ICollection,
                private _label: string = 'Поиск') {
        super();
        this._attribute = new SimpleAttribute('', this._label)
    }

    /**
     * @inheritDoc
     */
    name(): string {
        return <string>ActionNames.PSearchAction;
    }


    /**
     * @inheritDoc
     */
    canRun<T extends IModel>(models: T[]): boolean {
        return true;
    }

    /**
     * @inheritDoc
     */
    label(): string {
        return this._label;
    }

    /**
     * @inheritDoc
     */
    run<T extends IModel>(models: T[]): Promise<any> {
        return new Promise<boolean>((resolve, reject) => {
            let q = <CollectionQuery>this._collection.dataProvider().lastQuery();
            q.setTerm(this._attribute.value(), this._collection.fullTextSearchKeys());
            this._collection
                .dataProvider()
                .find(q)
                .then(() => {
                    resolve();
                })
                .catch((e) => {
                    if (e) {
                        console.log('p-search-action error: ' + e.message)
                    } else {
                        console.log('p-search-action error')
                    }
                });
        });
    }

    /**
     * @inheritDoc
     */
    hasAttribute(): boolean {
        return true;
    }

    /**
     * @inheritDoc
     */
    getAttribute(): IAttribute {
        return this._attribute;
    }
}