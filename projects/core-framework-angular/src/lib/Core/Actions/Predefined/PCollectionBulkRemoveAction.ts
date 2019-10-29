import {ICollection} from '../../Interfaces/DataStructures/Collections/ICollection';
import {AModelBulkActon} from '../AModelBulkActon';
import {IModel} from '../../Interfaces/DataStructures/Models/IModel';
import {ServiceLocator} from '../../ServiceLocator';
import {ActionNames} from '../../Interfaces/IModelBulkActon';

export class PCollectionBulkRemoveAction extends AModelBulkActon {

    protected _iconClasses: string[] = ['fas', 'fa-trash'];
    protected _btnClasses: string[] = ['btn', 'btn-outline-danger', 'btn-sm'];

    constructor(private _collection: ICollection,
                private _label: string = 'Remove All Filtered') {
        super();
    }

    /**
     * @inheritDoc
     */
    name(): string {
        return <string> ActionNames.PCollectionBulkRemoveAction;
    }


    /**
     * @inheritDoc
     */
    canRun<T extends IModel>(models: T[]): boolean {
        return this._collection.dataProvider().lastQuery() !== null && Object.keys(this._collection.dataProvider().lastQuery().filter()).length > 0;
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
            if (!this.canRun(models)) {
                reject(new Error(`Could not to execute action "${this.label()}" because canRun fails`));
                return;
            }
            ServiceLocator.modal()
                .confirm(
                    this.label(),
                    `Do you really want to remove all list by this filter: ${JSON.stringify(this._collection.dataProvider().lastQuery().filter())}?`
                )
                .then(() => {
                    return this._collection
                        .dataProvider()
                        .remove(this._collection.dataProvider().lastQuery())
                })
                .then(() => {
                    resolve();
                })
                .catch((e) => {
                    reject(new Error(`Error during "${this.label()}" run`));
                });
        });
    }

    private hello() {

    }
}
