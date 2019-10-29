import {NgModule} from '@angular/core';
import {FormsModule} from './Modules/Forms/Module';
import {GridModule} from './Modules/Grid/Module';
import {LinksModule} from './Modules/Links/Module';
import {ModalsModule} from './Modules/Modals/Module';
import {TabsModule} from './Modules/Tabs/Module';
import {AbstractModule} from './Modules/Abstract/Module';
import {ToolbarModule} from './Modules/Toolbar/Module';
import {WaitersModule} from './Modules/Waiters/Module';
import {ViewModule} from './Modules/View/Module';

@NgModule({
    imports: [
        FormsModule,
        GridModule,
        LinksModule,
        ModalsModule,
        TabsModule,
        AbstractModule,
        ToolbarModule,
        WaitersModule,
        ViewModule,
    ],
    declarations: [],
    exports: [
        FormsModule,
        GridModule,
        LinksModule,
        ModalsModule,
        TabsModule,
        AbstractModule,
        ToolbarModule,
        WaitersModule,
        ViewModule
    ]
})
export class UiModule {
}
