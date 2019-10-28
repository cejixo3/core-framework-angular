import {AfterContentInit, AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalManager} from "../../Services/ModalMager";

@Component({
    selector: 'ui-modal-confirm',
    templateUrl: './ConfirmModalComponent.html',
    styleUrls: []
})
export class ConfirmModalComponent extends ModalManager {

    title: string = "Confirm";

    text: string = "Do you really want to do this action?";

    getText(): string {
        return this.text;
    }

    getModalTitle(): string {
        return this.title
    }

    save(): void {
        this.submit();
    }

    discard(): void {
        this.cancel();
    }

}