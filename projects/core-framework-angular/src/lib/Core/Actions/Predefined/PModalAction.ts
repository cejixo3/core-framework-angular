import {Component} from '@angular/core/src/metadata/directives';
import {IModel} from '../../Interfaces/DataStructures/Models/IModel';
import {SL} from '../../SL';
import {ActionNames, IModelBulkActon} from '../../Interfaces/IModelBulkActon';
import {AModelBulkActon} from '../AModelBulkActon';

export class PModalAction extends AModelBulkActon implements IModelBulkActon {

    protected _iconClasses: string[] = ['fas'];
    protected _btnClasses: string[] = ['btn', 'btn-outline-success', 'btn-sm'];

    constructor(private _component: Component | any,
                private _context: any,
                private _label: string = 'Open',
                private _icon: string = '') {
        super();
        if (this._icon) {
            this._iconClasses.push(this._icon);
        }
    }

    /**
     * @inheritDoc
     */
    name(): string {
        return <string>ActionNames.PModalAction;
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
            if (!this.canRun(models)) {
                reject(new Error(`Could not to execute action "${this.label()}" because canRun fails`));
                return;
            }
            SL
                .modal().basic(this._component, this._context)
                .then(() => {
                    resolve();
                })
                .catch(() => {
                    reject(new Error(`Error during "${this.label()}" run`));
                });
        });
    }
}
