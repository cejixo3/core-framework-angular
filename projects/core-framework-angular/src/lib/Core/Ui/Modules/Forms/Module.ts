import {NgModule} from '@angular/core';
import {FileComponent} from './Components/File/FileComponent';
import {MMYYComponent} from './Components/MMYY/MMYYComponent';
import {RangeComponent} from './Components/Range/RangeComponent';
import {TextComponent} from './Components/Text/TextComponent';
import {CommonModule} from '@angular/common';
import {FormsModule as FM} from '@angular/forms';
import {PasswordComponent} from './Components/Password/PasswordComponent';
import {NgSelectModule} from '@ng-select/ng-select';
import {SelectSearchCollectionComponent} from './Components/SelectSearchCollection/SelectSearchCollectionComponent';
import {CheckBoxComponent} from './Components/CheckBox/CheckBoxComponent';
import {NumberComponent} from './Components/Number/NumberComponent';
import {SelectStringsComponent} from './Components/SelectStrings/SelectStringsComponent';
import {SelectEnumComponent} from './Components/SelectEnum/SelectEnumComponent';
import {SelectIdModelListComponent} from './Components/SelectIdModelList/SelectIdModelListComponent';
import {SelectIdsCollectionComponent} from './Components/SelectIdsCollection/SelectIdsCollectionComponent';
import {ErrorsOutPutComponent} from './Components/ErrorsOutPut/ErrorsOutPutComponent';
import {TextListComponent} from './Components/TextList/TextListComponent';
import {RichTextComponent} from './Components/RichText/RichTextComponent';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {ImageUrlComponent} from './Components/ImageUrl/ImageUrlComponent';
import {ManageHeaderComponent} from './Components/ManageHeader/ManageHeaderComponent';
import {WaitersModule} from '../Waiters/Module';
import {DateTimeComponent} from './Components/DateTime/DateTimeComponent';
import {AngularDateTimePickerModule} from 'angular2-datetimepicker';

@NgModule({
    imports: [
        NgSelectModule,
        CommonModule,
        FM,
        CKEditorModule,
        WaitersModule,
        AngularDateTimePickerModule
    ],
    declarations: [
        TextComponent,
        PasswordComponent,
        SelectSearchCollectionComponent,
        CheckBoxComponent,
        NumberComponent,
        SelectStringsComponent,
        SelectEnumComponent,
        SelectIdModelListComponent,
        SelectIdsCollectionComponent,
        ErrorsOutPutComponent,
        FileComponent,
        RangeComponent,
        TextListComponent,
        MMYYComponent,
        RichTextComponent,
        ImageUrlComponent,
        ManageHeaderComponent,
        DateTimeComponent
    ],
    exports: [
        TextComponent,
        PasswordComponent,
        SelectSearchCollectionComponent,
        CheckBoxComponent,
        NumberComponent,
        SelectStringsComponent,
        SelectEnumComponent,
        SelectIdModelListComponent,
        SelectIdsCollectionComponent,
        ErrorsOutPutComponent,
        FileComponent,
        RangeComponent,
        TextListComponent,
        MMYYComponent,
        RichTextComponent,
        ImageUrlComponent,
        ManageHeaderComponent,
        DateTimeComponent
    ]
})
export class FormsModule {
}
