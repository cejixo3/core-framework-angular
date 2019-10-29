import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '../Forms/Module';
import {GoogleSearchResultsComponent} from './Components/GoogleSearchResults/GoogleSearchResultsComponent';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        GoogleSearchResultsComponent,
    ],
    exports: [
        GoogleSearchResultsComponent,
    ],
    providers: [],
    entryComponents: [],
})
export class ViewModule {
}
