import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICollection} from '../../../../../Interfaces/DataStructures/Collections/ICollection';
import {IBaseModel} from '../../../../../Interfaces/DataStructures/Models/IBaseModel';
import {debounceTime} from 'rxjs/internal/operators';
import {SearchJSONQuery} from '../../../../../DataStructures/Queries/SearchJSONQuery';
import {IAttribute} from '../../../../../Interfaces/DataStructures/IAttribute';

@Component({
    selector: 'ui-form-select-search-collection',
    templateUrl: './SelectSearchCollectionComponent.html',
    styleUrls: ['./SelectSearchCollectionComponent.scss']
})
export class SelectSearchCollectionComponent implements AfterContentInit {


    @Input() attribute: IAttribute;
    @Input() langKey = '';
    @Input() collection: ICollection;
    data: Array<{ label: string, id: string }> = [];
    typeAhead = new EventEmitter<string>();
    // Bind attributes
    @Input() label = 'name';
    @Input() id = 'id';
    @Output() onSelect: EventEmitter<IBaseModel | null> = new EventEmitter<IBaseModel | null>();

    private _val = '';

    private checked = false;

    constructor() {

        this
            .typeAhead
            .pipe(debounceTime(200))
            .subscribe((term) => {
                let field = this.label;
                const query = {};
                if (this.langKey) {
                    field = `${this.langKey}.${this.label}`;
                }
                query[field] = {'$regex': term, '$options': 'i'};
                this.collection
                    .dataProvider()
                    .find(new SearchJSONQuery(query))
                    .then(() => {
                        this.data = this.collection.data().map((m: IBaseModel) => {
                            const r = {id: m.attribute(this.id).value(), label: ''};
                            if (this.langKey) {
                                const parts = this.label.split('.');
                                r.label = m.lang(parts[0]).attribute(parts[1]).value();
                            } else {
                                r.label = m.attribute(this.label).value();
                            }
                            return r;
                        });
                    })
                    .catch(() => {
                        console.log('bbb');
                    })
                ;
            });

    }

    ngAfterContentInit(): void {
        if (this.attribute) {
            const intervalId = setInterval(() => {
                if (this.attribute.value()) {
                    clearInterval(intervalId);
                    const query = {};
                    let id = this.id;
                    if (id === 'id') {
                        id = '_id';
                    }
                    query[id] = {'$eq': this.attribute.value()};
                    this.collection
                        .dataProvider()
                        .find(new SearchJSONQuery(query))
                        .then(() => {
                            this.data = this.collection.data().map((m: IBaseModel) => {
                                const r = {id: m.attribute(this.id).value(), label: ''};
                                if (this.langKey) {
                                    const parts = this.label.split('.');
                                    r.label = m.lang(parts[0]).attribute(parts[1]).value();
                                } else {
                                    r.label = m.attribute(this.label).value();
                                }
                                return r;
                            });
                        })
                        .catch(() => {
                            console.log('bbb');
                        });


                }
            }, 200);
        }
    }

    set value(val: string) {
        if (this.attribute) {
            this.attribute.setValue(val);
        } else {
            this._val = val;
        }
    }

    get value() {
        if (this.attribute) {
            return this.attribute.value();
        }
        return this._val;
    }

    hasErrors(): boolean {
        return false;
    }

    errors(): Array<string> {
        return [];
    }

    onChange($event: { label: string, id: string }) {
        if ($event === undefined) {
            this.onSelect.emit(null);
            if (this.attribute) {
                this.attribute.setValue('');
            }
            return;
        }
        const model = this
            .collection
            .data()
            .reduce((p: IBaseModel | null, c: IBaseModel) => {
                return p === null && c.attribute(this.label).value() === $event.label && c.attribute(this.id).value() === $event.id ? c : p;
            }, null);
        if (model !== null) {
            this.onSelect.emit(model);
            if (this.attribute) {
                this.attribute.setValue(model.attribute(this.id).value());
            }
        }
    }
}
