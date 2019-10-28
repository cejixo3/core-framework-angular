import {Component, Input} from '@angular/core';
import {IAttribute} from '../../../../../Interfaces/DataStructures/IAttribute';

@Component({
    selector: 'ui-form-select-strings',
    templateUrl: './SelectStringsComponent.html',
    styleUrls: ['./SelectStringsComponent.scss']
})
export class SelectStringsComponent {

    @Input() attribute: IAttribute;

    data = [];

    addTag(name) {
        return name;
    }

    set value(val: Array<string>) {
        this.attribute.value().splice(0, this.attribute.value().length);
        val.forEach((name: string) => {
            this.attribute.value().push(name);
        });
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
        // setInterval(() => {
        //     console.log(this.attribute.value());
        // }, 1000);
    }
}
