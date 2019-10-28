import {Component, Input} from '@angular/core';
import {TabComponent} from '../Tab/TabComponent';

@Component({
    selector: 'ui-tab-set',
    templateUrl: './TabSetComponent.html',
    styleUrls: ['./TabSetComponent.scss']
})
export class TabSetComponent {
    tabs: TabComponent[] = [];
    @Input() direction: string = 'horizontal';

    addTab(tab: TabComponent) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }

    selectTab(tab: TabComponent) {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
        tab.active = true;
    }
}
