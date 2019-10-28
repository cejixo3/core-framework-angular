import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '../Forms/Module';
import {GoogleSearchResultsComponent} from './Components/GoogleSearchResults/GoogleSearchResultsComponent';
import {InfiniteScrollComponent} from '@Core/Ui/Modules/View/Components/infinite-scroll/infinite-scroll.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        GoogleSearchResultsComponent,
        InfiniteScrollComponent,
    ],
    exports: [
        GoogleSearchResultsComponent,
        InfiniteScrollComponent
    ],
    providers: [],
    entryComponents: [],
})
export class ViewModule {
}
