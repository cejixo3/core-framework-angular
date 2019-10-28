import {IValueAdapter} from '../Interfaces/IValueAdapter';

const W = 604800;
const D = 86400;
const H = 3600;
const M = 60;
const S = 1;

export class DurationValueAdapter implements IValueAdapter {

    private getNumber(str: string, t: string, m: number) {
        const p = str.split(t);
        if (p.length !== 2) {
            return 0;
        }
        if (p[1] !== '') {
            return 0;
        }
        const n = Number(p[0]);
        if (isNaN(n)) {
            return 0;
        }
        return n * m;
    }

    /**
     *
     * @param {string} part 1d
     * @return {number}
     */
    private extractSecFrom(part: string): number {
        let s = 0;
        s += this.getNumber(part, 'w', W);
        s += this.getNumber(part, 'd', D);
        s += this.getNumber(part, 'h', H);
        s += this.getNumber(part, 'm', M);
        s += this.getNumber(part, 's', S);
        return s;
    }

    /**
     * fmt - 1w 2d 5h 20m 10s
     * @return {any}
     */
    fromFmt(fmt: any): any {
        let sec = 0;
        fmt.split(' ').forEach((exp: string) => {
            sec += this.extractSecFrom(exp);
        });
        return sec;

    }

    toFmt(val: any): any {

        let
            str = ``,
            total = val,
            w = 0,
            d = 0,
            h = 0,
            m = 0,
            s = 0;
        w = Math.floor(total / W);
        total %= W;
        if (w > 0) {
            str += `${w}w`;
        }
        d = Math.floor(total / D);
        total %= D;
        if (d > 0) {
            str += ` ${d}d`;
        }
        h = Math.floor(total / H);
        total %= H;
        if (h > 0) {
            str += ` ${h}h`;
        }
        m = Math.floor(total / M);
        total %= M;
        if (m > 0) {
            str += ` ${m}m`;
        }
        s = Math.floor(total / S);
        if (s > 0) {
            str += ` ${s}s`;
        }
        total %= S;
        if (str === '') {
            str = '0s';
        }
        return str;
    }

    valid(val: any): boolean {
        return true;
    }

}