import { adsCollection } from './collections/ads-collection.js';
import { jokesCollection } from './collections/jokes-collection.js';
import { IEndpointCollection } from './models/endpoint-collection.js';
import { IMongoDbItem } from './models/mongodb-item.js';

const collections: IEndpointCollection<IMongoDbItem>[] = [
    adsCollection,
    jokesCollection
];

export const environment = {
    port: 3001,
    baseUrl: 'http://localhost',
    apiEndpoint: '/api',
    collections,
};
