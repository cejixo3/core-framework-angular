import {AfterContentInit, AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ICollectionDataProvider} from '../../../../../Interfaces/DataProvider/ICollectionDataProvider';
import {CollectionQuery} from '../../../../../Providers/CollectionQuery';

interface IItem {
    id: number;
    active: boolean;
}

@Component({
    selector: 'ui-grid-paginate',
    templateUrl: './PaginateComponent.html',
    styleUrls: ['./PaginateComponent.scss']
})
export class PaginateComponent implements OnInit, OnDestroy, AfterViewInit {
    @Input() provider: ICollectionDataProvider;


    private DEFAULT_PAGE_SIZE = 20;
    @Input() public pageSize: number = this.DEFAULT_PAGE_SIZE;
    public pageSizes = [
        this.DEFAULT_PAGE_SIZE,
        this.DEFAULT_PAGE_SIZE * 2,
        this.DEFAULT_PAGE_SIZE * 3,
        this.DEFAULT_PAGE_SIZE * 4,
        this.DEFAULT_PAGE_SIZE * 5,
        this.DEFAULT_PAGE_SIZE * 6,
        this.DEFAULT_PAGE_SIZE * 7,
        this.DEFAULT_PAGE_SIZE * 8,
        this.DEFAULT_PAGE_SIZE * 9,
        this.DEFAULT_PAGE_SIZE * 10,
        this.DEFAULT_PAGE_SIZE * 20,
        this.DEFAULT_PAGE_SIZE * 30
    ];

    public isDisabled: boolean = false;

    public items: Array<IItem> = [];
    public hasPrev = false;
    public hasNext = false;
    public current = 0;
    public allUiPagesCount = 0;
    public allUiRecordsCount = 0;
    public currentUiRecordsCount = 0;


    constructor(public query: CollectionQuery) {
    }

    public updateState() {
        const $count = Math.ceil(this.provider.allCount() / this.pageSize),
            $current = Math.ceil(this.query.offset() / this.pageSize),
            $max = 10;
        let
            $from = $current,
            $to = $current,
            resultSize = this.pageSize;

        this.pageSizes.forEach((size: number) => {
            if (size <= this.provider.onPageCount()) {
                resultSize = size;
            }
        });


        this.pageSize = resultSize;

        while (true) {
            if ($from <= 0 || $current - $from > $max / 2) {
                break;
            } else {
                $from--;
            }
        }

        while (true) {
            if ($to + 1 >= $count || $to - $current > $max / 2) {
                break;
            } else {
                $to++;
            }
        }
        this.items = [];
        for (let $i = $from; $i <= $to; $i++) {
            this.items.push({
                id: $i,
                active: $current === $i
            });
        }
        this.hasPrev = $current - 1 >= 0;
        this.hasNext = $current + 1 < $count;
        this.current = $current;
        this.allUiPagesCount = $count === 0 ? 1 : $count;
        this.allUiRecordsCount = this.provider.allCount();
        this.currentUiRecordsCount = this.provider.onPageCount();
    }

    public goPrev() {
        if (this.hasPrev) {
            this.goTo({id: this.current - 1, active: false});
        }
    }

    public goNext() {
        if (this.hasNext) {
            this.goTo({id: this.current + 1, active: false});
        }
    }

    public getUpdatedQuery() {

        const id = this.items.reduce((p, c) => {
            return p === 0 && c.active === true ? c.id : p;
        }, 0);
        this.query.setLimit(this.pageSize).setOffset(id * this.pageSize);
        return this.query;
    }

    public changePageSize() {
        this.isDisabled = true;
        this.provider
            .find(this.getUpdatedQuery())
            .then(() => {
                this.isDisabled = false;
            })
            .catch(() => {
                this.isDisabled = false;
            })
        ;
    }

    public goTo(item: IItem) {
        if (item.active || this.isDisabled) {
            return null;
        }

        this.isDisabled = true;
        this.provider
            .find(this.query.setLimit(this.pageSize).setOffset(item.id * this.pageSize))
            .then(() => {
                this.isDisabled = false;
            })
            .catch(() => {
                this.isDisabled = false;
            })
        ;
    }

    ngOnInit(): void {
        this.provider.eventEmitter().subscribe((type: string) => {
            if (type !== 'find-finish-success') {
                return;
            }
            this.updateState();
        });
    }

    ngAfterViewInit() {
        this.updateState();
    }

    ngOnDestroy(): void {
        this.provider.eventEmitter().unsubscribe();
    }
}
