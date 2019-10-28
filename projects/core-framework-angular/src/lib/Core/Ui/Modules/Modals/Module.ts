import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BasicModalService} from "./Services/BasicModalService";
import {BasicModalComponent} from "./Components/BasicModal/BasicModalComponent";
import {ConfirmModalComponent} from "./Components/ConfirmModal/ConfirmModalComponent";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BasicModalComponent,
        ConfirmModalComponent
    ],
    exports: [
        BasicModalComponent,
        ConfirmModalComponent
    ],
    providers: [
        BasicModalService
    ],
    entryComponents: [
        BasicModalComponent,
        ConfirmModalComponent
    ],
})
export class ModalsModule {
}