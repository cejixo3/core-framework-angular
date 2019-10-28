import {Component, Input} from '@angular/core';
import {IAttribute} from "../../../../../Interfaces/DataStructures/IAttribute";

@Component({
    selector: 'ui-form-password',
    templateUrl: './PasswordComponent.html',
    styleUrls: ['./PasswordComponent.scss']
})
export class PasswordComponent {
    @Input() attribute: IAttribute;


    set value(val: string) {
        this.attribute.setValue(val);
    }

    get value(): string {
        if (typeof this.attribute.value() !== 'string') {
            throw new Error('ui-form-password supports only string attributes!');
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
