import {Component, Input} from '@angular/core';
import {IAttribute} from '../../../../../../Interfaces/DataStructures/IAttribute';
import {TableComponent} from '../../Table/TableComponent';

@Component({
    selector: 'ui-grid-column-text',
    templateUrl: './TextComponent.html',
    styleUrls: ['./TextComponent.scss']
})
export class TextComponent {

    public attr: IAttribute;

    @Input() set attribute(attr: IAttribute) {
        this.attr = attr;
    }
}
