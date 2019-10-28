import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    Input,
    OnDestroy,
    OnInit,
    Optional,
    QueryList
} from '@angular/core';
import {CellDirective} from '../Columns/Cell/CellDirective';
import {IModel} from '@Core/Interfaces/DataStructures/Models/IModel';
import {IModelListActionEvent, ModelList} from '@Core/Providers/ModelList';
import {CollectionQuery} from '@Core/Providers/CollectionQuery';
import {GlobalSearch} from '@Core/Services/GlobalSearch';
import {ICollectionQuery, SORT} from '@Core/Interfaces/DataStructures/Queries/ICollectionQuery';
import {ICollection} from '@Core/Interfaces/DataStructures/Collections/ICollection';
import {ActionNames} from '@Core/Interfaces/IModelBulkActon';
import {IBaseModel} from '@Core/Interfaces/DataStructures/Models/IBaseModel';

interface IColumnWrapper {
    headerName: string;
    component: any;
}

interface HeaderItem {
    attributeName?: string;
    label: string;
    sort: boolean;
}

@Component({
    selector: 'ui-grid-table',
    templateUrl: './TableComponent.html',
    styleUrls: ['./TableComponent.scss']
})
export class TableComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
    @Input() pagination = true;
    @Input() headers: Array<string> = [];
    @Input() collection: ICollection;
    @Input() quickSearch: string[] = [];
    public quickSearchQuery = '';
    public headerList: HeaderItem[] = [];
    public SORT = SORT;
    @ContentChildren(CellDirective) templates: QueryList<CellDirective>;

    constructor(@Optional() public models: ModelList,
                public query: CollectionQuery,
                public gs: GlobalSearch) {

    }

    public columns: IColumnWrapper[] = [];
    private tpls: any[] = [];

    ngAfterContentInit(): void {
        this.templates.forEach((i) => {
            this.registerColumnComponent(i);
        });
    }

    ngAfterViewInit(): void {
        const sortKeys = this.collection.sortKeys(),
            model = this.collection.model(),
            modelSchema = model.schema();
        this.headers.forEach((name) => {
            if (modelSchema.hasOwnProperty(name)) {
                this.headerList.push({
                    attributeName: name,
                    label: model.attribute(name).label(),
                    sort: sortKeys.indexOf(name) !== -1
                });
            } else {
                this.headerList.push({
                    label: name,
                    sort: false
                });
            }
        });
    }

    /**
     * Load collection according to query
     * @param {ICollectionQuery} q
     */
    private loadCollection(q: ICollectionQuery) {
        this.collection
            .dataProvider()
            .find(q)
            .then(() => {
                console.log('new data fetched');
            })
            .catch((e) => {
                console.log(`error during on search`, e);
            });
    }

    /**
     * On search hook
     * @param term
     */
    private onSearch(term) {
        this.loadCollection(this.query.setTerm(term, this.collection.fullTextSearchKeys()));
    }

    private onModelListEvent(ev: IModelListActionEvent) {
        switch (ev.name) {
            case ActionNames.PModelBulkRemoveAction: {
                this.loadCollection(this.query);
                if (this.models !== null) {
                    while (this.models.list().length) {
                        this.models.list().splice(0, 1);
                    }
                }
            }
        }
    }

    set isAllChecked(val: boolean) {
        this.collection.data().forEach((m: IModel) => {
            this.onCheckedStateChange({model: m, checked: val});
        });
    }

    get isAllChecked() {
        if (this.models === null) {
            return false;
        }
        return this.collection.data().length > 0 && this.models.list().length === this.collection.data().length;
    }

    onCheckedStateChange(event: { model: IModel, checked: boolean }) {
        if (this.models === null) {
            return;
        }
        const index = this.models.list().indexOf(event.model);
        if (event.checked === false) {
            if (index !== -1) {
                this.models.list().splice(index, 1);
            }
        } else {
            if (index === -1) {
                this.models.list().push(event.model);
            }
        }
    }

    ngOnInit(): void {
        this.gs.eventEmitter().subscribe(this.onSearch.bind(this));
        if (this.models !== null) {
            this.models.em().subscribe(this.onModelListEvent.bind(this));
        }
    }

    public ngOnDestroy(): void {
        this.gs.unsubscribe();
        if (this.models !== null) {
            this.models.em().unsubscribe();
        }
    }

    getTemplate(i: number) {
        return this.tpls[i].template;
    }

    public registerColumnComponent(component: any): this {
        this.tpls.push(component);
        this.columns.push({headerName: component.header, component: component});
        return this;
    }


    public getRowColor(index: number, model: IBaseModel): string | null {
        if (!model.attribute('color').is('')) {
            return model.attribute('color').value();
        }
        return null;
    }

    /**
     * Check is sort for attributeName enabled
     * @param {string} attributeName
     * @returns {boolean}
     */
    public isSortEnabled(attributeName: string): boolean {
        return this.query.sort().hasOwnProperty(attributeName);
    }

    /**
     *
     * @param {string} attributeName
     * @returns {string}
     */
    public sortDir(attributeName: string): string {
        if (this.isSortEnabled(attributeName)) {
            return this.query.sort()[attributeName];
        }
        return this.SORT.ASC;
    }

    /**
     * Toggle sort
     * @param {string} attributeName
     */
    public toggleSort(attributeName: string) {
        this.query.setSort(attributeName, this.sortDir(attributeName) === this.SORT.ASC ? this.SORT.DESC : this.SORT.ASC);
        this.loadCollection(this.query);
    }
}
