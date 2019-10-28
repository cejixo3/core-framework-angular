import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule as FM} from "@angular/forms";
import {ManageModelComponent} from "./Components/ManageModel/ManageModelComponent";


@NgModule({
    imports: [CommonModule, FM],
    declarations: [
        ManageModelComponent,
    ],
    exports: [
        ManageModelComponent
    ]
})
export class LinksModule {
}