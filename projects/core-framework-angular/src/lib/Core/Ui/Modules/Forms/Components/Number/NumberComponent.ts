import {Component, Input, OnInit} from '@angular/core';
import {IAttribute} from '../../../../../Interfaces/DataStructures/IAttribute';
import {IValueAdapter} from '../../../../../Interfaces/IValueAdapter';
import {NopValueAdapter} from '../../../../../Adapters/NopValueAdapter';

@Component({
    selector: 'ui-form-number',
    templateUrl: './NumberComponent.html',
    styleUrls: ['./NumberComponent.scss']
})
export class NumberComponent implements OnInit {
    @Input() attribute: IAttribute;
    @Input() adapter: IValueAdapter;

    private prev = 0;

    constructor() {
        this.adapter = new NopValueAdapter();
    }

    set value(val: any) {
        val = this.adapter.fromFmt(val);
        val = Number(val);
        if (isNaN(val)) {
            val = this.prev;
        }
        this.attribute.setValue(val);
    }

    get value(): any {
        if (typeof this.attribute.value() === 'string') {
            const tryVal = parseInt(this.attribute.value(), 10);
            if (!isNaN(tryVal)) {
                this.attribute.setValue(tryVal);
            }
        }
        if (typeof this.attribute.value() !== 'number') {
            throw new Error('ui-form-number supports only number attributes!');
        }
        return this.adapter.toFmt(this.attribute.value());
    }

    hasErrors(): boolean {
        return this.attribute.errors().length > 0;
    }

    errors(): Array<string> {
        return this.attribute.errors();
    }

    ngOnInit() {
        this.prev = this.attribute.value();
    }
}
