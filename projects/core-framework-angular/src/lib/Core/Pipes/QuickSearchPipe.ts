import {Pipe, PipeTransform} from '@angular/core';
import {IBaseModel} from '../Interfaces/DataStructures/Models/IBaseModel';

@Pipe({
    name: 'search'
})
export class QuickSearchPipe implements PipeTransform {
    public transform(value, keys: string, term: string) {

        if (!term) {
            return value;
        }
        return (value || [])
            .filter((item: IBaseModel) => keys
                .split(',')
                .some(key => item.attribute(key).value() && new RegExp(term, 'gi').test(item.attribute(key).value())
                )
            );

    }
}