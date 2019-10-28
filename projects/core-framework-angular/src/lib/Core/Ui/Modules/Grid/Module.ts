import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule as FM} from '@angular/forms';
import {TableComponent} from './Components/Table/TableComponent';
import {PaginateComponent} from './Components/Paginator/PaginatorComponent';
import {TextComponent} from './Components/Columns/Text/TextComponent';
import {CellDirective} from './Components/Columns/Cell/CellDirective';
import {CheckableComponent} from './Components/Columns/Checkable/CheckableComponent';
import {BoolComponent} from './Components/Columns/Bool/BoolComponent';
import {EnumComponent} from './Components/Columns/Enum/EnumComponent';
import {CoreModule} from '../../../Module';
import {LinkComponent} from './Components/Columns/Link/LinkComponent';
import {RouterModule} from '@angular/router';
import {RawTextComponent} from './Components/Columns/RawText/RawTextComponent';
import {TimeComponent} from './Components/Columns/Time/TimeComponent';
import {JsonComponent} from './Components/Columns/Json/JsonComponent';
import {WaitersModule} from '../Waiters/Module';
import {ColorComponent} from '../Forms/Components/Color/ColorComponent';


@NgModule({
    imports: [CommonModule, FM, CoreModule, RouterModule, WaitersModule],
    declarations: [
        TableComponent,
        PaginateComponent,
        TextComponent,
        CellDirective,
        CheckableComponent,
        BoolComponent,
        EnumComponent,
        LinkComponent,
        RawTextComponent,
        TimeComponent,
        JsonComponent,
        ColorComponent
    ],
    exports: [
        TableComponent,
        PaginateComponent,
        TextComponent,
        CellDirective,
        CheckableComponent,
        BoolComponent,
        EnumComponent,
        LinkComponent,
        RawTextComponent,
        TimeComponent,
        JsonComponent,
        ColorComponent
    ],
    entryComponents: [
        TextComponent,
        CheckableComponent,
        BoolComponent,
        EnumComponent,
        LinkComponent,
        RawTextComponent,
        TimeComponent,
        JsonComponent,
        ColorComponent
    ]
})
export class GridModule {
}