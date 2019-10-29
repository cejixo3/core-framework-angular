import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IAttribute} from '../../../../../Interfaces/DataStructures/IAttribute';

interface IImg {
    id: string; // image id
    title: string; // image title
    url: string; // image url/or part of path
}

export interface IDone {
    Done(img: IImg): void;

}


class Doner implements IDone {

    constructor(private _onDone: (img: IImg) => void) {
    }


    Stop(): void {
        this._onDone = undefined;
    }

    Done(img: IImg): void {
        if (this._onDone) {
            this._onDone(img);
        }
    }
}

@Component({
    selector: 'ui-form-image-url',
    templateUrl: './ImageUrlComponent.html',
    styleUrls: ['./ImageUrlComponent.scss']
})
export class ImageUrlComponent {
    @Input() attribute: IAttribute;
    @Output() onSelect = new EventEmitter<IDone>();
    private doner: Doner;

    set value(val: string) {
        this.attribute.setValue(val);
    }

    get value(): string {
        if (typeof this.attribute.value() !== 'string') {
            throw new Error('ui-form-image-url supports only string attributes! Got: ' + typeof this.attribute.value());
        }
        return this.attribute.value();
    }

    select() {
        if (this.doner) {
            this.doner.Stop();
        }
        this.doner = new Doner((img: IImg) => {
            this.value = img.url;
        });
        this.onSelect.emit(this.doner);
    }

    buildImageUrl(path: string): string {
        return '/uploads/' + path;
    }

    hasErrors(): boolean {
        return this.attribute.errors().length > 0;
    }

    errors(): Array<string> {
        return this.attribute.errors();
    }
}
