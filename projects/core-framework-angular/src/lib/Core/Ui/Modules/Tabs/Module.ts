import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TabComponent} from './Components/Tab/TabComponent';
import {TabSetComponent} from './Components/TabSet/TabSetComponent';



@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TabComponent,
        TabSetComponent,
    ],
    exports: [
        TabComponent,
        TabSetComponent,
    ],
    providers: [
    ],
    entryComponents: [
    ],
})
export class TabsModule {
}