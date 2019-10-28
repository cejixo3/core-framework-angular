import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IModelBulkActon} from '../../../../../Interfaces/IModelBulkActon';
import {ModelList} from '../../../../../Providers/ModelList';

@Component({
    selector: 'ui-toolbar-actions',
    templateUrl: './ToolbarComponent.html',
    styleUrls: ['./ToolbarComponent.scss']
})
export class ToolbarComponent {
    @Input() actions: IModelBulkActon[];

    constructor(public models: ModelList) {
    }
}