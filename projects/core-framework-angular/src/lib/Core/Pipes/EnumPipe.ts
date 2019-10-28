import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'enumPipe'
})
export class EnumPipe implements PipeTransform {

    transform(value: number, enumerable: { [key: string]: number }): string {
        let res = Object.keys(enumerable).reduce((p, c) => {
            return p === null && enumerable[c] === value ? c : p;
        }, null);
        return res === null ? `${value} (Not in Enum!)` : res;
    }
}