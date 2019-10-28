
export class BaseQuery {
    protected _limit = 20;
    protected _offset = 0;

    limit(): number {
        return this._limit;
    }

    offset(): number {
        return this._offset;
    }

    toJSON(): any {
        return {
            forGrid: true,
            limit: this.limit(),
            skip: this.offset()
        };
    }

    setLimit(limit: number): this {
        this._limit = limit;
        return this;
    }

    setOffset(offset: number): this {
        this._offset = offset;
        return this;
    }

}