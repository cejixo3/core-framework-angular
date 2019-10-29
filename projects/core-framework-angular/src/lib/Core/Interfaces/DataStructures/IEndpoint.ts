interface Map {
    [key: string]: string;
}

export interface IEndpointServiceLocatorist {
    [key: string]: IEndpoint;
}

export interface IEndpoint {
    prefix: string;
    auto: string;
    additions: Map;
}

export enum PredefinedBehavioursEnum {
    c = 'create',
    l = 'list',
    v = 'view',
    u = 'update',
    r = 'remove',
}