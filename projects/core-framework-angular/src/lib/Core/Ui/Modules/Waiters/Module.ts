import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommonComponent} from './Components/Common/CommonComponent';

@NgModule({
    imports: [CommonModule],
    declarations: [
        CommonComponent,
    ],
    exports: [
        CommonComponent,
    ]
})
export class WaitersModule {
}