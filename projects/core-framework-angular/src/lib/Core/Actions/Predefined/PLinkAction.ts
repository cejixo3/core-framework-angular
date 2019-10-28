import {IModel} from '../../Interfaces/DataStructures/Models/IModel';
import {SL} from '../../SL';
import {ActionNames, IModelBulkActon} from '../../Interfaces/IModelBulkActon';
import {Router} from '@angular/router';
import {AModelBulkActon} from '../AModelBulkActon';

export class PLinkAction extends AModelBulkActon implements IModelBulkActon {

    protected _iconClasses: string[] = ['fas', 'fa-link'];
    protected _btnClasses: string[] = ['btn', 'btn-outline-primary', 'btn-sm'];

    constructor(private _link: string,
                private _label: string = 'Open') {
        super();
    }

    /**
     * @inheritDoc
     */
    name(): string {
        return <string>ActionNames.PLinkAction;
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
            const router: Router = SL
                .injector
                .get(Router);

            router.navigate([this._link])
                .then(() => {
                    resolve();
                })
                .catch(() => {
                    reject(new Error(`Error during "${this.label()}" run`));
                });
        });
    }
}
