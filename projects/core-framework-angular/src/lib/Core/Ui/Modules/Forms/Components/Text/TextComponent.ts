import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IAttribute} from '../../../../../Interfaces/DataStructures/IAttribute';
import {IUploadResult} from '../../../../../Services/UploadFileService';

@Component({
    selector: 'ui-form-text',
    templateUrl: './TextComponent.html',
    styleUrls: ['./TextComponent.scss']
})
export class TextComponent {
    @Input() attribute: IAttribute;
    @Input() multiline = false;
    @Input() rows = 5;
    @Output() onChange = new EventEmitter<IAttribute>();
    @Input() isDisabled: boolean = false;

    set value(val: string) {
        this.attribute.setValue(val);
        this.onChange.emit(this.attribute);
    }

    get value(): string {
        if (typeof this.attribute.value() !== 'string') {
            throw new Error('ui-form-text supports only string attributes! Got: ' + typeof this.attribute.value());
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
