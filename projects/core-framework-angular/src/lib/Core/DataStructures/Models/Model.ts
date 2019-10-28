import {IModel} from '../../Interfaces/DataStructures/Models/IModel';
import {ABaseModel} from './BaseModel';
import {IModelDataProvider} from '../../Interfaces/DataProvider/IModelDataProvider';

export abstract class AModel extends ABaseModel implements IModel {
    /**
     * @inheritDoc
     */
    dataProvider(): IModelDataProvider {
        if (typeof this['$dp'] === 'object') {
            return this['$dp'];
        }
        throw new Error('You should use any of data provider decorators');
    }

    /**
     * @inheritDoc
     */
    pk(): string | Array<string> {
        if (this.schema()['id'] === undefined) {
            throw new Error('Could not to find default primary key in model. You must redeclare pk() in model or define `id` field in schema.');
        }
        return 'id';
    }
}