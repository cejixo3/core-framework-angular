import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IAttribute} from '../../../../../Interfaces/DataStructures/IAttribute';

@Component({
    selector: 'ui-form-datetime',
    templateUrl: './DateTimeComponent.html',
    styleUrls: ['./DateTimeComponent.scss']
})
export class DateTimeComponent implements OnInit, OnDestroy {


    @Input() attribute: IAttribute;
    @Output() onChange = new EventEmitter<IAttribute>();
    @Input() disabled: boolean = false;

    public settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MM-yyyy',
        defaultOpen: false
    };

    set value(val: any) {
        this.attribute.setValue((new Date(val)));
        this.onChange.emit(this.attribute);
    }


    get value(): any {
        if (!(this.attribute.value() instanceof Date)) {
            throw new Error('ui-form-datetime supports only date attributes! Got: ' + typeof this.attribute.value());
        }
        return this.attribute.value();
    }

    hasErrors(): boolean {
        return this.attribute.errors().length > 0;
    }

    errors(): Array<string> {
        return this.attribute.errors();
    }

    onDateSelect(ev: Date) {
        this.attribute.setValue(ev);
    }

    public hasVal(): boolean {
        return this.attribute && this.attribute.value();
    }

    ngOnInit() {

    }

    ngOnDestroy(): void {

    }
}
