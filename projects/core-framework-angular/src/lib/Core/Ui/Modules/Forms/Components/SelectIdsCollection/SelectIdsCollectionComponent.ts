import {AfterViewInit, Component, EventEmitter, Input} from '@angular/core';
import {ICollection} from '../../../../../Interfaces/DataStructures/Collections/ICollection';
import {IBaseModel} from '../../../../../Interfaces/DataStructures/Models/IBaseModel';
import {debounceTime} from 'rxjs/internal/operators';
import {SearchJSONQuery} from '../../../../../DataStructures/Queries/SearchJSONQuery';
import {IAttribute} from '../../../../../Interfaces/DataStructures/IAttribute';

interface Result {
    label: string;
    id: string;
}

@Component({
    selector: 'ui-form-select-ids-collection',
    templateUrl: './SelectIdsCollectionComponent.html',
    styleUrls: ['./SelectIdsCollectionComponent.scss']
})
export class SelectIdsCollectionComponent implements AfterViewInit {
    @Input() collection: ICollection;
    data: Array<Result> = [];
    typeAhead = new EventEmitter<string>();
    @Input() label = 'name';
    @Input() id = 'id';
    @Input() unique = ''; // unique field
    @Input() filter: { [name: string]: any } = {};
    @Input() langKey = '';
    attr: IAttribute = null;
    private isInitialized = false;
    value = [];

    @Input() set attribute(val: IAttribute) {
        this.attr = val;
        if (this.isInitialized === false) {

        }
    }

    private autoloadFromAttributes() {
        if (Array.isArray(this.attr.value()) && this.attr.value().length === 0) {
            return;
        }
        this.isInitialized = true;
        const query = {};
        const id = this.id === 'id' ? '_id' : this.id;
        Object.keys(this.filter).forEach((name: string) => {
            query[name] = this.filter[name];
        });

        let inFilter = this.attr.value();

        if (this.attr.value().length > 0 && typeof this.attr.value()[0] !== 'string') {
            inFilter = this.attr.value().map((m: IBaseModel) => {
                return m.attribute(this.id).value();
            });
        }
        query[id] = {'$in': inFilter};
        this.find(new SearchJSONQuery(query)).then((d) => {
            this.value = d;
        });
    }

    constructor() {
        this
            .typeAhead
            .pipe(debounceTime(200))
            .subscribe((term) => {
                const query = {};
                Object.keys(this.filter).forEach((name: string) => {
                    query[name] = this.filter[name];
                });

                let field = this.label;
                if (this.langKey) {
                    field = `${this.langKey}.${this.label}`;
                }
                query[field] = {'$regex': term, '$options': 'i'};
                this.find(new SearchJSONQuery(query)).then((d) => {
                    this.data = d;

                });
            });
        setTimeout(() => {
            this.autoloadFromAttributes();
        }, 1000); // Debounce period. // LifeHack
    }

    private find(query: SearchJSONQuery): Promise<Result[]> {
        return new Promise<Result[]>((resolve, reject) => {
            query.setLimit(600);
            let finder = null;
            if (this.unique !== '') {
                finder = this.collection
                    .dataProvider()
                    .findUnique(this.unique, query);
            } else {
                finder = this.collection
                    .dataProvider()
                    .find(query);
            }
            finder.then(() => {
                resolve(this.collection.data()
                    .map((m: IBaseModel) => {

                        const r = {id: m.attribute(this.id).value(), label: ''};
                        if (this.langKey) {
                            const parts = this.label.split('.');
                            r.label = m.lang(parts[0]).attribute(parts[1]).value();
                        } else {
                            r.label = m.attribute(this.label).value();
                        }
                        return r;
                    }));
            })
                .catch((e) => {
                    reject(e);
                });
        });

    }

    hasErrors(): boolean {
        return false;
    }

    errors(): Array<string> {
        return [];
    }

    onChange($event: [{ label: string, id: string }]) {
        this.attr.setValue($event.map(i => i.id));
    }

    ngAfterViewInit(): void {

    }
}
