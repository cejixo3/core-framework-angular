import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {TableComponent} from '../../Table/TableComponent';
import {IAttribute} from '../../../../../../Interfaces/DataStructures/IAttribute';


@Directive({
    selector: '[cell]'
})
export class CellDirective {


    constructor(public viewContainer: ViewContainerRef, public template: TemplateRef<CellDirective>) {
    }

}
