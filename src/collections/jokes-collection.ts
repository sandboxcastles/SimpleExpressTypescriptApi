import { IEndpointCollection } from '../models/endpoint-collection';
import { IJoke } from '../models/joke';

export const jokesCollection: IEndpointCollection<IJoke> = {
    collectionName: 'jokes',
    items: [
        {
            title: 'Mathmechicken',
            question: 'Did you know my chicken can count it\'s own eggs?',
            punchline: 'She\'s a mathmechicken!'
        }
    ]
};
