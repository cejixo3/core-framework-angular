import {Component, Input, OnInit} from '@angular/core';
import {IAttribute} from '../../../../../Interfaces/DataStructures/IAttribute';

@Component({
    selector: 'ui-form-color',
    templateUrl: './ColorComponent.html',
    styleUrls: ['./ColorComponent.scss']
})
export class ColorComponent implements OnInit {
    @Input() attribute: IAttribute;

    public predefinedColors = [
        '#f44336',
        '#e91e63',
        '#9c27b0',
        '#673ab7',
        '#3f51b5',
        '#3f51b5',
        '#2196f3',
        '#03a9f4',
        '#00bcd4',
        '#009688',
        '#4caf50',
        '#8bc34a',
        '#ffeb3b',
        '#ffc107',
        '#ff9800',
        '#ff5722',
        '#795548',
        '#9e9e9e',
        '#607d8b'
    ];

    set value(val: string) {
        this.attribute.setValue(val);
    }

    get value(): string {
        if (typeof this.attribute.value() !== 'string') {
            throw new Error('ui-form-color supports only string attributes!');
        }
        return this.attribute.value();
    }

    hasErrors(): boolean {
        return this.attribute.errors().length > 0;
    }

    errors(): Array<string> {
        return this.attribute.errors();
    }

    public selectColor(color: string) {
        this.value = color;
    }

    ngOnInit() {
    }
}
