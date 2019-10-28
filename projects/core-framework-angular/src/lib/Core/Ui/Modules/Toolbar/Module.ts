import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleActionComponent} from './Components/SimpleAction/SimpleActionComponent';
import {ToolbarComponent} from './Components/Toolbar/ToolbarComponent';
import {FormsModule} from '../Forms/Module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        SimpleActionComponent,
        ToolbarComponent,
    ],
    exports: [
        SimpleActionComponent,
        ToolbarComponent
    ],
    providers: [],
    entryComponents: [],
})
export class ToolbarModule {
}