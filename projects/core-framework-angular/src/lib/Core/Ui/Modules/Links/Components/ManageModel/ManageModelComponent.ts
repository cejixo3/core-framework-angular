import {Component, Input} from '@angular/core';
import {IModel} from "../../../../../Interfaces/DataStructures/Models/IModel";

@Component({
    selector: 'ui-link-manage-model',
    templateUrl: './ManageModelComponent.html',
})
export class ManageModelComponent {
    @Input() model: IModel;
    @Input() resource: string;


    resourcePath(): string {
        let result = this.resource;
        if (typeof result !== "string" || result.length === 0) {
            throw new Error('Resource is required in this component');
        }

        if (result.length[0] === '/') {
            result = result.substr(1, result.length);
        }

        if (result[result.length - 1] === '/') {
            result = result.substr(result.length - 2, result.length - 1);
        }

        let path = `/${result}/manage`;

        if (typeof this.model.pk() === 'string') {
            let pk: string = this.model.pk().toString();
            return `${path}/${pk}/${this.model.attribute(pk).value()}}}`;
        }

        if (Array.isArray(this.model.pk())) {
            let pks: Array<string> | any = this.model.pk();
            pks.forEach((pk) => {
                path += `/${pk}/${this.model.attribute(pk).value()}`;
            });
            return path;
        }

        throw new Error('Could not to calculate path');
    }
}
