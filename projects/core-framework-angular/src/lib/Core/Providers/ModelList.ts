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
     */
    public em() {
        return this._em;
    }

    /**
     * Provide reference for list
     */
    public list(): IModel[] {
        return this._list;
    }
}