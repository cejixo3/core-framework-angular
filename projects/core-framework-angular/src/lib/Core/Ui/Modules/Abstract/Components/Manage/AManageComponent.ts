import {ABreadCrumbComponent} from "../BreadCrumb/ABreadCrumbComponent";
import {ActivatedRoute, Router} from "@angular/router";
import {IModel} from "../../../../../Interfaces/DataStructures/Models/IModel";

export abstract class AManageComponent extends ABreadCrumbComponent {

    protected route: ActivatedRoute;
    protected r: Router;
    protected readonly _model: IModel;

    public constructor(route: ActivatedRoute,
                       r: Router) {
        super();
        this.route = route;
        this.r = r;
        this._model = this.modelConstructor();

        this.route
            .params
            .subscribe(params => {
                if (!params[this.pkFieldName()]) {
                    return;
                }
                this._model
                    .setAttribute(this.pkFieldName(), params[this.pkFieldName()])
                    .dataProvider()
                    .find(params[this.pkFieldName()])
                    .then(() => {
                        this.breadCrumb = `Редакторовать [${this.model().attribute(this.titleFieldName()).value()}]`;
                    });
            });
    }

    /**
     * Save model
     */
    public saveModel() {
        this
            ._model
            .validate()
            .then(() => {
                if (this._model.attribute(this.pkFieldName()).value()) {
                    return this._model.dataProvider().update();
                } else {
                    return this._model.dataProvider().create();
                }
            })
            .then(() => {
                if (typeof this._model['viewLink'] === 'function') {
                    return this.r.navigate([this._model['viewLink']()]);
                }
                return null;
            })
            .catch((e) => {
                console.log('could not save post', e, this._model);

            });
    }

    /**
     * Provide reference for model instance
     * @return {IModel}
     */
    public model(): IModel | any {
        return this._model;
    }

    /**
     * Provide constructor for creating model
     * @return {IModel}
     */
    protected abstract modelConstructor(): IModel;

    /**
     * Provide field that's represent primary key
     * @return {string}
     */
    public pkFieldName(): string {
        return 'id';
    }

    /**
     * Provide field name for titling
     * @return {string}
     */
    public titleFieldName(): string {
        return 'name';
    }

    /**
     * Provide current instance of Component
     * @return {this}
     */
    public self(): this {
        return this;
    }
}