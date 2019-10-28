import {Component, Input, OnInit} from '@angular/core';
import {ReadOnlyAttribute} from '../../../../../DataStructures/ReadOnlyAttribute';
import {IAttribute} from '../../../../../Interfaces/DataStructures/IAttribute';
import {IValueAdapter} from '../../../../../Interfaces/IValueAdapter';


enum MONTHS {
    January = 0,
    February = 1,
    March = 2,
    April = 3,
    May = 4,
    June = 5,
    July = 6,
    August = 7,
    September = 8,
    October = 9,
    November = 10,
    December = 11,
}

enum YEARS {
    Y_2019 = 2019,
    Y_2020 = 2020,
    Y_2021 = 2021,
    Y_2022 = 2022,
    Y_2023 = 2023,
    Y_2024 = 2024,
    Y_2025 = 2025,
    Y_2026 = 2026,
    Y_2027 = 2027,
    Y_2028 = 2028,
    Y_2029 = 2029,
    Y_2030 = 2030,
}

interface MMYY {
    MM: number,
    YY: number
}

class Adapter implements IValueAdapter {

    public fromFmt(fmt: MMYY | any): number | any {
        let date = new Date();
        date.setUTCFullYear(fmt.YY, fmt.MM);
        date.setUTCMonth(fmt.MM);
        date.setDate(1);
        date.setUTCHours(0);
        date.setUTCMinutes(0);
        date.setUTCSeconds(0);
        date.setUTCMilliseconds(1);
        return Math.round(date.getTime() / 1000)
    }

    public toFmt(val: number | any): MMYY | any {
        let date = new Date(val * 1000);
        return {
            MM: date.getUTCMonth(),
            YY: date.getUTCFullYear()
        }
    }

    public valid(val: any): boolean {
        return true;
    }

}

class Attribute extends ReadOnlyAttribute {
    constructor(protected lbl: string, protected val: any, private onchange: () => void) {
        super(lbl, val);
    }

    setValue(value: any): this {
        this.val = value;
        this.onchange();
        return this;
    };
}

@Component({
    selector: 'ui-form-mmyy',
    templateUrl: './MMYYComponent.html',
    styleUrls: ['./MMYYComponent.scss']
})
export class MMYYComponent implements OnInit {
    public attr: IAttribute = new ReadOnlyAttribute('', 0);
    @Input() showLabel: boolean = true;
    @Input() adapter: IValueAdapter | Adapter = new Adapter();

    @Input() set attribute(val: IAttribute) {
        if (val.value() > 0) {
            this.attr = val;
            let v = this.adapter.toFmt(<number>this.attr.value());

            this.year.setValue(v.YY);
            this.month.setValue(v.MM);
        }
    }

    public year: IAttribute;
    public eYears = YEARS;
    public month: IAttribute;
    public eMonths = MONTHS;

    constructor() {
        this.year = new Attribute('Year', YEARS['Y_2019'], this.onChange.bind(this));
        this.month = new Attribute('Month', MONTHS['January'], this.onChange.bind(this));
    }

    onChange() {
        if (this.attr) {
            this.attr.setValue(this.adapter.fromFmt({MM: this.month.value(), YY: this.year.value()}))
        }
    }

    hasErrors(): boolean {
        return this.attr && this.attr.errors().length > 0;
    }

    errors(): Array<string> {
        return this.attr && this.attr.errors();
    }

    ngOnInit() {
    }
}
