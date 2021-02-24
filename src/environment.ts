import { adsCollection } from './collections/ads-collection.js';
import { jokesCollection } from './collections/jokes-collection.js';

export const environment = {
    port: 3001,
    baseUrl: 'http://localhost',
    apiEndpoint: '/api',
    collections: [
        adsCollection,
        jokesCollection
    ],
};
