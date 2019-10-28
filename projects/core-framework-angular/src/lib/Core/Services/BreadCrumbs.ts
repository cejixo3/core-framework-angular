import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

interface IBCItem {
    label: string;
    link: string;
}

const MAX_LABEL_LENGTH = 70,
    DOTS = '...';

@Injectable()
export class BreadCrumbs {

    private _list: IBCItem[] = [];

    constructor(private router: Router, private titleService: Title) {

    }

    private getExistingIndex = function (label, link) {
        return this._list.reduce(function (p, c, index) {
            return p === -1 && c.link === link ? index : p;
        }, -1);
    };

    add(breadCrumb: string): this {
        const newCrumb = {
            label: breadCrumb,
            link: this.router.routerState.snapshot.url
        };
        if (newCrumb.label.length > (MAX_LABEL_LENGTH + DOTS.length)) { // need to cut text
            const
                pieceCount = Math.ceil((MAX_LABEL_LENGTH + DOTS.length) / 2),
                first = newCrumb.label.substr(0, pieceCount),
                last = newCrumb.label.substr(newCrumb.label.length - pieceCount);
            newCrumb.label = first + DOTS + last;
        }
        const eIndex = this.getExistingIndex(newCrumb.link, newCrumb.label);
        if (eIndex !== -1) {
            this._list.splice(eIndex, 1);
        }
        while (this._list.length > 4) {
            this._list.splice(0, 1);
        }
        this._list.push(newCrumb);
        this.titleService.setTitle('[TO.Blog]' + (this._list.length === 0 ? '' : (' / ' + this._list[this._list.length - 1].label)));
        return this;
    }

    list(): IBCItem[] {
        return this._list;
    }
}
