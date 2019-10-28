import {Component, Input} from '@angular/core';
import {IBaseModel} from '../../../../../Interfaces/DataStructures/Models/IBaseModel';

@Component({
    selector: 'ui-form-errors',
    templateUrl: './ErrorsOutPutComponent.html',
    styleUrls: ['./ErrorsOutPutComponent.scss']
})
export class ErrorsOutPutComponent {
    @Input() model: IBaseModel;

    attributeNames(): string[] {
        return Object.keys(this.model.schema());
    }
}
