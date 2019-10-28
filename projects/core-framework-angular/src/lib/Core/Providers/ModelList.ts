import {EventEmitter, Injectable} from '@angular/core';
import {IModel} from '../Interfaces/DataStructures/Models/IModel';

export interface IModelListActionEvent {
    name: string;
    result: boolean;
}

@Injectable()
export class ModelList {

    private _list: IModel[] = [];
    private _em: EventEmitter<IModelListActionEvent> = new EventEmitter();

    /**
     * @return EventEmitter<IModelListActionEvent>
     */
    public em() {
        return this._em;
    }

    /**
     * Provide reference for list
     * @return {IModel[]}
     */
    public list(): IModel[] {
        return this._list;
    }
}