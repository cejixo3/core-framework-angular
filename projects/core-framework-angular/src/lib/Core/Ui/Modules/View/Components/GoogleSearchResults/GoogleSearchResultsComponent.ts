import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'ui-google-search-results',
    templateUrl: './GoogleSearchResults.html',
    styleUrls: ['./GoogleSearchResults.scss']
})
export class GoogleSearchResultsComponent {
    @Input() title: string;
    @Input() description: string;
    @Input() url: string;
    @Input() full: boolean = true;
    private baseStyles = ['google-search'];

    constructor() {
    }

    getLink(): string {
        if (this.url.length <= 50) {
            return this.url;
        }
        return this.url.substring(0, 50) + ' ...';
    }

    getTitle(): string {
        if (this.title.length <= 66 - 17) {
            return this.title + ' / Турагент Онлайн';
        }
        return this.title.substring(0, 66 - 17) + ' ... / Турагент Онлайн';
    }

    getDescription(): string {
        if (this.description.length <= 160) {
            return this.description;
        }
        return this.description.substring(0, 160) + ' ...';
    }

    getStyles(): string[] {
        if (this.full === false) {
            return this.baseStyles.concat('no-search');
        }
        return this.baseStyles;
    }
}