import {Component, Input} from '@angular/core';
import {IAttribute} from '../../../../../../Interfaces/DataStructures/IAttribute';

const FORMAT_SECONDS = 's';
const FORMAT_MILLISECONDS = 'ms';
const FORMAT_NANOSECONDS = 'ns';

@Component({
    selector: 'ui-grid-column-time',
    templateUrl: './TimeComponent.html',
    styleUrls: ['./TimeComponent.scss']
})
export class TimeComponent {


    public val = 0;
    private f: string = FORMAT_SECONDS;

    @Input() viewFormat: string = 'medium';

    @Input() set format(f: string) {
        if ([FORMAT_SECONDS, FORMAT_MILLISECONDS, FORMAT_NANOSECONDS].indexOf(f) !== -1) {
            this.f = f;
        }
    }

    @Input() set attribute(attr: IAttribute) {
        switch (this.f) {
            case FORMAT_SECONDS:
                this.val = attr.value() * 1000;
                break;
            case FORMAT_NANOSECONDS:
                this.val = Math.ceil(attr.value() / 1000000);
                break;
            default: {
                this.val = attr.value();
            }
        }
    }
}
