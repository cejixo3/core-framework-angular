import {NgModule} from '@angular/core';
import {EnumPipe} from './Pipes/EnumPipe';
import {CommonModule} from '@angular/common';
import {GlobalSearch} from './Services/GlobalSearch';
import {BreadCrumbs} from './Services/BreadCrumbs';
import {RouterModule} from '@angular/router';
import {QuickSearchPipe} from './Pipes/QuickSearchPipe';
import {UploadFileService} from './Services/UploadFileService';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        EnumPipe,
        QuickSearchPipe
    ],
    exports: [
        EnumPipe,
        QuickSearchPipe
    ],
    providers: [
        GlobalSearch,
        BreadCrumbs,
        UploadFileService
    ]
})
export class CoreModule {
}