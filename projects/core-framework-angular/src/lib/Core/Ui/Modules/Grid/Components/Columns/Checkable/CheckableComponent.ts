import {Component, EventEmitter, Input, Optional, Output} from '@angular/core';
import {IModel} from '../../../../../../Interfaces/DataStructures/Models/IModel';
import {ModelList} from '../../../../../../Providers/ModelList';

@Component({
    selector: 'ui-grid-column-checkable',
    templateUrl: './CheckableComponent.html',
    styleUrls: ['./CheckableComponent.scss']
})
export class CheckableComponent {

    @Input() model: IModel;

    @Output() changed: EventEmitter<{ model: IModel, checked: boolean }> = new EventEmitter<{ model: IModel, checked: boolean }>();

    constructor(@Optional() public models: ModelList) {
    }

    private _state = false;

    set value(val: boolean) {
        this._state = val;
    }

    get value() {
        return this.models.list().indexOf(this.model) !== -1 || this._state;
    }

    onChange() {
        this.changed.emit({model: this.model, checked: this._state});
    }

}
