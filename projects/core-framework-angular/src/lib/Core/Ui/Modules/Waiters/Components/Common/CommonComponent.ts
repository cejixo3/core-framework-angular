import {AfterViewInit, Component, ElementRef, Input, OnDestroy} from '@angular/core';

@Component({
    selector: 'ui-waiter-common',
    templateUrl: './CommonComponent.html',
    styleUrls: ['./CommonComponent.scss']
})
export class CommonComponent implements AfterViewInit, OnDestroy {

    @Input() level = 1;
    private wr: Element;

    private op: string;

    constructor(private el: ElementRef) {
    }

    ngAfterViewInit(): void {
        this.wr = this.el.nativeElement;
        let lvl = 0;
        while (this.level > lvl) {
            lvl++;
            this.wr = this.wr.parentElement;
        }

        this.op = this.wr['style']['position'];
        if (['relative', 'absolute'].indexOf(this.op) === -1) {
            this.wr['style']['position'] = 'relative';
        }
    }

    ngOnDestroy(): void {
        this.wr['style']['position'] = this.op;
    }
}
