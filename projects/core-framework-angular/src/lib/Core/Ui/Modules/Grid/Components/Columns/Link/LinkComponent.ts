import {Component, Input} from '@angular/core';
import {IAttribute} from '../../../../../../Interfaces/DataStructures/IAttribute';

@Component({
    selector: 'ui-grid-column-link',
    templateUrl: './LinkComponent.html',
    styleUrls: ['./LinkComponent.scss']
})
export class LinkComponent {

    public attr: IAttribute;

    @Input() link: string;

    @Input() externalLink: string = '';

    @Input() set attribute(attr: IAttribute) {
        this.attr = attr;
    }
}
