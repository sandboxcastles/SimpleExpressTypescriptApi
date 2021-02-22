import { IAd } from '../models/ad';
import { IEndpointCollection } from '../models/endpoint-collection';

export const adsCollection: IEndpointCollection<IAd> = {
    collectionName: 'ads',
    items: [
        {
            title: 'Test Ad',
            body: 'Test Ad Body'
        }
    ]
};
