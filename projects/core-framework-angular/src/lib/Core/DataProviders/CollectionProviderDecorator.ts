import {SL} from '../SL';
import {IEndpoint} from '../Interfaces/DataStructures/IEndpoint';

export function CollectionProviderDecorator(options: {
    endpoint: IEndpoint,
    apiUrl?: string
}) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            $dp = SL.getDataProviderFactory().collection(options.endpoint, this);
        };
    };
}
