import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IModelBulkActon} from '../../../../../Interfaces/IModelBulkActon';
import {ModelList} from '../../../../../Providers/ModelList';

@Component({
    selector: 'ui-toolbar-simple-action',
    templateUrl: './SimpleActionComponent.html',
    styleUrls: ['./SimpleActionComponent.scss']
})
export class SimpleActionComponent {
    @Input() action: IModelBulkActon;

    constructor(public modelsList: ModelList) {

    }

    /**
     * Provide root element css classes
     * @return {string[]}
     */
    getRootCssClasses(): string[] {
        let css = ['action'];
        if (this.action.hasAttribute()) {
            css.push('action-with-input');
        }
        if (this.action.btnClasses().indexOf('btn-sm') !== -1) {
            css.push('action-sm');
        }
        return css;
    }

    onKeydown($event: KeyboardEvent) {
        if ($event.keyCode === 13) {
            this.run();
        }
    }

    isDisabled(): boolean {
        return !this.action.canRun(this.modelsList.list());
    }

    run(): void {
        this.action
            .run(this.modelsList.list())
            .then(() => {
                try {
                    this.modelsList.em().emit({name: this.action.name(), result: true});
                } catch (e) {
                    this.modelsList.em().unsubscribe();
                }
            })
            .catch((e) => {
                try {
                    this.modelsList.em().emit({name: this.action.name(), result: false});
                } catch (e) {
                    this.modelsList.em().unsubscribe();
                }
            });
    }
}
