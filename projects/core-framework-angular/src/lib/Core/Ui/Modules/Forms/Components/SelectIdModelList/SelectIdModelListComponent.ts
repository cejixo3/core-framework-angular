import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBaseModel} from '../../../../../Interfaces/DataStructures/Models/IBaseModel';
import {IAttribute} from '../../../../../Interfaces/DataStructures/IAttribute';

@Component({
    selector: 'ui-form-select-id-model-list',
    templateUrl: './SelectIdModelListComponent.html',
    styleUrls: ['./SelectIdModelListComponent.scss']
})
export class SelectIdModelListComponent implements OnInit {
    @Input() models: Array<IBaseModel>;
    @Input() attribute: IAttribute;
    @Input() label: string = 'name';
    @Input() id: string = 'id';
    @Output() change: EventEmitter<IBaseModel> = new EventEmitter<IBaseModel>();
    list: Array<{ key: string, value: string | number }> = [];


    constructor() {

    }

    hasErrors(): boolean {
        return this.attribute.errors().length > 0;
    }

    errors(): Array<string> {
        return this.attribute.errors();
    }

    set value(val: string) {
        this.attribute.setValue(val);
    }

    get value() {
        return this.attribute.value();
    }

    onChange($event: { key: string, value: string | number }) {
        for (let i = 0; i < this.models.length; i++) {
            if (this.models[i].attribute(this.id).value() === $event.key &&
                this.models[i].attribute(this.label).value() === $event.value
            ) {
                this.change.emit(this.models[i]);
                break;
            }
        }
    }

    ngOnInit() {
        this.models
            .forEach((model: IBaseModel) => {
                this.list.push({
                    key: <string>model.attribute(this.id).value(),
                    value: <string | number>model.attribute(this.label).value()
                });
            });
    }
}
