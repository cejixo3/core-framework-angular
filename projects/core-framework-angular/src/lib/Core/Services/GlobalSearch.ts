import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class GlobalSearch {

    public toggleEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
    private _eventEmitter: EventEmitter<string> = new EventEmitter<string>();

    eventEmitter(): EventEmitter<string> {
        return this._eventEmitter;
    }

    unsubscribe() {
        this._eventEmitter.unsubscribe();
        this._eventEmitter = new EventEmitter<string>();
    }
}
