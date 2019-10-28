import {Component, Input} from '@angular/core';
import {IAttribute} from '../../../../../../Interfaces/DataStructures/IAttribute';

@Component({
    selector: 'ui-grid-column-json',
    templateUrl: './JsonComponent.html',
    styleUrls: ['./JsonComponent.scss']
})
export class JsonComponent {

    public val: any = {};

    @Input() set attribute(attr: IAttribute) {

        if (typeof attr.value() === 'string') {
            try {
                this.val = JSON.parse(attr.value());
            } catch (e) {
                console.log('ui-grid-column-json could not to encode', e);
            }
        } else {
            this.val = attr.value();
        }
    }
}
