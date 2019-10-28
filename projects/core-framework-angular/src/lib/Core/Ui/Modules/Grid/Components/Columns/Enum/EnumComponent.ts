import {Component, Input} from '@angular/core';
import {IAttribute} from '../../../../../../Interfaces/DataStructures/IAttribute';

@Component({
    selector: 'ui-grid-column-enum',
    templateUrl: './EnumComponent.html',
    styleUrls: ['./EnumComponent.scss']
})
export class EnumComponent {

    public attr: IAttribute;

    @Input() enumerable;

    @Input() set attribute(attr: IAttribute) {
        this.attr = attr;
    }

}
