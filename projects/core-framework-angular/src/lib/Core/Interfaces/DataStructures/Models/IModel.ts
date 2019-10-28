import {IModelDataProvider} from "../../DataProvider/IModelDataProvider";
import {IBaseModel} from "./IBaseModel";

export interface IModel extends IBaseModel {
    /**
     * Provide data provider
     * @return {IModelDataProvider}
     */
    dataProvider(): IModelDataProvider

    /**
     * Provide primary key attribute name
     * @return {string | Array<string>}
     */
    pk(): string | Array<string>
}