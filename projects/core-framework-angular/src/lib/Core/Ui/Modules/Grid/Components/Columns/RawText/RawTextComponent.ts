import {Component, Input} from '@angular/core';
import {IAttribute} from '../../../../../../Interfaces/DataStructures/IAttribute';
import {TableComponent} from '../../Table/TableComponent';

@Component({
    selector: 'ui-grid-column-raw-text',
    templateUrl: './RawTextComponent.html',
    styleUrls: ['./RawTextComponent.scss']
})
export class RawTextComponent {

    public attr: IAttribute;

    @Input() set attribute(attr: IAttribute) {
        this.attr = attr;
    }
}
