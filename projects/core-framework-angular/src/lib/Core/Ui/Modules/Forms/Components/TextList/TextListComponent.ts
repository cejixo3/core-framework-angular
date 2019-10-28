import {Component, Input} from '@angular/core';
import {IAttribute} from '../../../../../Interfaces/DataStructures/IAttribute';

@Component({
    selector: 'ui-form-text-list',
    templateUrl: './TextListComponent.html',
    styleUrls: ['./TextListComponent.scss']
})
export class TextListComponent {
    @Input() attribute: IAttribute;

    public newString = '';


    /**
     * Check is new line needed
     * @returns {boolean}
     */
    public addNewString() {
        if (this.newString !== '') {
            this.attribute.value().push(this.newString);
            this.newString = '';
        }
    }

    /**
     *
     * @param {string} record
     */
    public remove(record) {
        let index = this.attribute.value().indexOf(record);
        if (index !== -1) {
            this.attribute.value().splice(index, 1);
        }
    }

    set value(val: string) {
        this.attribute.setValue(val);
    }

    get value(): string {
        if (!Array.isArray(this.attribute.value())) {
            throw new Error('ui-form-text-list supports only []string attributes! Got: ' + typeof this.attribute.value());
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
