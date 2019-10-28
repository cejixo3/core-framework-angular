import {SL} from '../SL';
import {IEndpoint} from '../Interfaces/DataStructures/IEndpoint';

export function ModelProviderDecorator(options: {
    endpoint: IEndpoint,
    apiUrl?: string
}) {

    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            $dp = SL.getDataProviderFactory().model(options.endpoint, this);
        };
    };
}
