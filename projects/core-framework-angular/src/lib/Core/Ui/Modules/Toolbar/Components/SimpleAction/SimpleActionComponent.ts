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

    constructor(public modelServiceLocatorist: ModelList) {

    }

    /**
     * Provide root element css classes
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
        return !this.action.canRun(this.modelServiceLocatorist.list());
    }

    run(): void {
        this.action
            .run(this.modelServiceLocatorist.list())
            .then(() => {
                try {
                    this.modelServiceLocatorist.em().emit({name: this.action.name(), result: true});
                } catch (e) {
                    this.modelServiceLocatorist.em().unsubscribe();
                }
            })
            .catch((e) => {
                try {
                    this.modelServiceLocatorist.em().emit({name: this.action.name(), result: false});
                } catch (e) {
                    this.modelServiceLocatorist.em().unsubscribe();
                }
            });
    }
}
