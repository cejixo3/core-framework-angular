import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {IAttribute} from '../../../../../Interfaces/DataStructures/IAttribute';
import * as DecoupledEditor from '@cejixo3dr/ckeditor5-build-decoupled-document';


export interface IImageSelect {
    Select(src: string, alt: string, id: string)
}

class Doner implements IImageSelect {

    constructor(private data: IData,
                private _onDone: (src: string, alt: string, id: string, data: IData) => void) {
    }


    Stop(): void {
        this._onDone = undefined;
    }

    Select(src: string, alt: string, id: string): void {
        if (this._onDone) {
            this._onDone(src, alt, id, this.data);
        }
    }
}

const NS = '@cejixo3/ckeditor5-image',
    ActionSelectImage = 'select-image',
    ActionSelectedImage = 'selected-image',
    ActionCancelImageSelection = 'cancel-image-selection';

interface IData {
    id: string,
    ns: string,
    action: string,
    img: { src: string, alt: string, uploadId: string }
}

interface IBusMessage {
    data: IData
}

@Component({
    selector: 'ui-form-rich-text',
    templateUrl: './RichTextComponent.html',
    styleUrls: ['./RichTextComponent.scss']
})
export class RichTextComponent implements OnDestroy {

    @Input() attribute: IAttribute;
    @Input() multiline: boolean = false;
    @Input() rows: number = 5;
    @Output() onImageClick = new EventEmitter<IImageSelect>();
    public Editor = DecoupledEditor;

    public config = {
        emoji: [
            {name: 'smile', text: '😀'},
            {name: 'wink', text: '😉'},
            {name: 'cool', text: '😎'},
            {name: 'surprise', text: '😮'},
            {name: 'confusion', text: '😕'},
            {name: 'crying', text: '😢'},
            {name: 'rolling on the floor laughing', text: '🤣'},
            {name: 'smiling face with halo', text: '😇'},
            {name: 'smiling face', text: '☺'},
            {name: 'star-struck', text: '🤩'},
            {name: 'zany face', text: '🤪'},
            {name: 'face savoring food', text: '😋'},
            {name: 'thinking face', text: '🤔'},
            {name: 'zipper-mouth face', text: '🤐'},
            {name: 'grimacing face', text: '😬'},
            {name: 'ServiceLocatoreeping face', text: '😴'},
            {name: 'smiling face with sunglasses', text: '😎'},
            {name: 'see-no-evil monkey', text: '🙈'},
            {name: 'pile of poo', text: '💩'},
            {name: 'red heart', text: '❤'},
            {name: 'OK hand', text: '👌'},
            {name: 'backhand index pointing up', text: '👆'},
            {name: 'index pointing up', text: '☝'},
            {name: 'raising hands', text: '🙌'},
            {name: 'folded hands', text: '🙏'},
            {name: 'locomotive', text: '🚂'},
            {name: 'train', text: '🚆'},
            {name: 'metro', text: '🚇'},
            {name: 'taxi', text: '🚕'},
            {name: 'motor scooter', text: '🛵'},
            {name: 'bicycle', text: '🚲'},
            {name: 'airplane', text: '✈'},
            {name: 'airplane departure', text: '🛫'},
            {name: 'airplane arrival', text: '🛬'},
            {name: 'hourglass not done', text: '⏳'},
            {name: 'sun with face', text: '🌞'},
            {name: 'thermometer', text: '🌡'},
            {name: 'cloud', text: '☁'},
            {name: 'sun behind cloud', text: '⛅'},
            {name: 'cloud with lightning and rain', text: '⛈'},
            {name: 'sun behind small cloud', text: '🌤'},
            {name: 'sun behind rain cloud', text: '🌦'},
            {name: 'sun behind large cloud', text: '🌥'},
            {name: 'cloud with rain', text: '🌧'},
            {name: 'cloud with snow', text: '🌨'},
            {name: 'cloud with lightning', text: '🌩'},
            {name: 'umbrella with rain drops', text: '☔'},
            {name: 'umbrella on ground', text: '⛱'},
            {name: 'wrapped gift', text: '🎁'},
            {name: 'backpack', text: '🎒'},
            {name: 'heavy dollar sign', text: '💲'},

        ]
    };

    set value(val: string) {
        this.attribute.setValue(val);
    }

    get value(): string {
        if (typeof this.attribute.value() !== 'string') {
            throw new Error('ui-form-rich-text supports only string attributes! Got: ' + typeof this.attribute.value());
        }
        return this.attribute.value();
    }

    public onWindowMessage(m: IBusMessage) {

        if (m.data && m.data.ns === NS) {
            if (m.data.action === ActionSelectImage) {
                this.onImageClick.emit(new Doner(m.data, (src: string, alt: string, id: string, data: IData) => {
                    window.postMessage({
                        id: data.id,
                        ns: data.ns,
                        action: ActionSelectedImage,
                        img: {src: src, alt: alt, uploadId: id}
                    }, '/')
                }))
            }
        }
    }

    hasErrors(): boolean {
        return this.attribute.errors().length > 0;
    }

    errors(): Array<string> {
        return this.attribute.errors();
    }

    ngOnInit() {
        if (window.addEventListener) {
            window.addEventListener("message", this.onWindowMessage.bind(this), false);
        } else {
            (<any>window).attachEvent("onmessage", this.onWindowMessage.bind(this));
        }
    }

    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
    }

    ngOnDestroy(): void {
        if (window.removeEventListener) {
            window.removeEventListener("message", this.onWindowMessage.bind(this), false);
        } else {
            (<any>window).detach("onmessage", this.onWindowMessage.bind(this));
        }
    }
}
