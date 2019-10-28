import {Component, Input, OnInit} from '@angular/core';
import {IAttribute} from '../../../../../Interfaces/DataStructures/IAttribute';

@Component({
    selector: 'ui-form-select-enum',
    templateUrl: './SelectEnumComponent.html',
    styleUrls: ['./SelectEnumComponent.scss']
})
export class SelectEnumComponent implements OnInit {

    @Input() attribute: IAttribute;
    @Input() enumerable: { [key: string]: number };

    items: Array<{ value: number, key: string }> = [];

    set value(val: number) {
        this.attribute.setValue(val);
    }

    get value() {
        return this.attribute.value();
    }

    hasErrors(): boolean {
        return this.attribute.errors().length > 0;
    }

    errors(): Array<string> {
        return this.attribute.errors();
    }

    ngOnInit() {
        Object
            .keys(this.enumerable)
            .forEach((key: string) => {
                if (typeof this.enumerable[key] === 'number') {
                    this.items.push({key: key, value: this.enumerable[key]});
                }
            });
    }
}
