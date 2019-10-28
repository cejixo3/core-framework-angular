import {Component, Input} from '@angular/core';
import {TabSetComponent} from "../TabSet/TabSetComponent";

@Component({
    selector: 'ui-tab',
    templateUrl: './TabComponent.html',
    styleUrls: ['./TabComponent.scss'],
})
export class TabComponent {
    @Input() title;

    public active: boolean = false;

    constructor(tabs: TabSetComponent) {
        tabs.addTab(this)
    }
}
