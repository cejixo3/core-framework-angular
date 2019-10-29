import {Component, Input, OnInit} from '@angular/core';
import {AManageComponent} from "../../../Abstract/Components/Manage/AManageComponent";

@Component({
    selector: 'ui-manage-header',
    templateUrl: './ManageHeaderComponent.html',
    styleUrls: ['./ManageHeaderComponent.scss']
})
export class ManageHeaderComponent {
    @Input() component: AManageComponent;

    /**
     * Provide save button label
     */
    public btnLabel(): string {
        return this
            .component
            .model()
            .attribute(this.component.pkFieldName())
            .value() ? 'Обновить' : 'Создать';
    }

    /**
     * Provide title
     */
    public title(): string {
        return this.component.model().attribute(this.component.titleFieldName()).value();
    }

    /**
     * Unix timestamp when record was updated
     */
    public getRecordUpdatedAt(): number {
        return this.component.model().attribute('updated_at').value()
    }

    /**
     * Is record was updated or not
     */
    public isUpdated(): boolean {
        return this.getRecordUpdatedAt() > 0;
    }
}
