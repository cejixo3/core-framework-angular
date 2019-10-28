import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'infinite-scroll',
    templateUrl: './infinite-scroll.component.html',
    styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit, OnDestroy {
    @Input() options = {};
    @Output() scrolled = new EventEmitter();
    @ViewChild('viewPortAnchor') viewPortAnchor: ElementRef<HTMLElement>;

    private observer: IntersectionObserver;

    constructor(private host: ElementRef) {
    }

    get element() {
        return this.host.nativeElement;
    }

    private isHostScrollable() {
        const style = window.getComputedStyle(this.element);

        return style.getPropertyValue('overflow') === 'auto' ||
            style.getPropertyValue('overflow-y') === 'scroll';
    }

    ngOnInit() {
        const options = {
            root: this.isHostScrollable() ? this.host.nativeElement : null,
            ...this.options
        };
        const callback = ([entry]) => {
            if (entry.isIntersecting) {
                this.scrolled.emit();
            }
        };
        this.observer = new IntersectionObserver(callback, options);

        this.observer.observe(this.viewPortAnchor.nativeElement);
    }

    ngOnDestroy() {
        this.observer.disconnect();
    }
}
