import {Component, Input} from '@angular/core';
import {IAttribute} from '../../../../../../Interfaces/DataStructures/IAttribute';

@Component({
    selector: 'ui-grid-column-bool',
    templateUrl: './BoolComponent.html',
    styleUrls: ['./BoolComponent.scss']
})
export class BoolComponent {

    public attr: IAttribute;


    @Input() set attribute(attr: IAttribute) {
        this.attr = attr;
    }
}
