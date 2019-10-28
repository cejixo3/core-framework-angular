import {Component, Input} from '@angular/core';
import {UUIDv4} from '../../../../../Helpers/UUIDv4';
import {IAttribute} from '../../../../../Interfaces/DataStructures/IAttribute';

@Component({
    selector: 'ui-form-checkbox',
    templateUrl: './CheckBoxComponent.html',
    styleUrls: ['./CheckBoxComponent.scss']
})
export class CheckBoxComponent {
    @Input() attribute: IAttribute;
    @Input() disabled: boolean = false;
    public elId = UUIDv4();

    set value(val: boolean) {
        this.attribute.setValue(val);
    }

    get value(): boolean {
        if (typeof this.attribute.value() !== 'boolean') {
            throw new Error('ui-form-checkbox supports only boolean attributes!');
        }
        return this.attribute.value();
    }

    hasErrors(): boolean {
        return this.attribute.errors().length > 0;
    }

    errors(): Array<string> {
        return this.attribute.errors();
    }

    ngOnInit() {
    }
}
