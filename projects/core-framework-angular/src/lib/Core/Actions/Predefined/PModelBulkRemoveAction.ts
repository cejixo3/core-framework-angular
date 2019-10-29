import {AModelBulkActon} from '../AModelBulkActon';
import {IModel} from '../../Interfaces/DataStructures/Models/IModel';
import {IBaseModel} from '../../Interfaces/DataStructures/Models/IBaseModel';
import {ServiceLocator} from '../../ServiceLocator';
import {ActionNames} from '../../Interfaces/IModelBulkActon';

export interface ICondition {
    eq?: any;
    neq?: any;
}

export interface IConditions {
    [attributeName: string]: ICondition;
}

export class PModelBulkRemoveAction extends AModelBulkActon {

    protected _iconClasses: string[] = ['fas', 'fa-trash'];
    protected _btnClasses: string[] = ['btn', 'btn-outline-danger', 'btn-sm'];

    constructor(private _conditions: IConditions = {},
                private _label: string = 'Remove') {
        super();
    }

    /**
     * @inheritDoc
     */
    name(): string {
        return <string>ActionNames.PModelBulkRemoveAction;
    }

    private isConditionsPassedForModel(m: IBaseModel): boolean {
        let result = true;
        Object.keys(this._conditions).forEach((attributeName: string) => {
            if (result === false) {
                return;
            }
            if (this._conditions[attributeName].eq !== undefined) {
                result = m.attribute(attributeName).is(this._conditions[attributeName].eq);
            }
            if (result === false) {
                return;
            }
            if (this._conditions[attributeName].neq !== undefined) {
                result = !m.attribute(attributeName).is(this._conditions[attributeName].eq);
            }
        });
        return result;
    }

    /**
     * @inheritDoc
     */
    canRun<T extends IModel>(models: T[]): boolean {
        return models.length > 0 && models.reduce((p: boolean, m: T) => {
            return p === true && !this.isConditionsPassedForModel(m) ? false : p;
        }, true);
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
                    `Do you really want to remove these models (${models.length})?`
                )
                .then(() => {
                    const promises = [];
                    models.forEach((m: T) => {
                        promises.push(m.dataProvider().remove());
                    });
                    return Promise.all(promises);
                })
                .then(() => {
                    resolve();
                })
                .catch((e) => {
                    reject(new Error(`Error during "${this.label()}" run`));
                });
        });
    }
}
