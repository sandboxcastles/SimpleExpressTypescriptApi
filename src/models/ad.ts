import { IMongoDbItem } from './mongodb-item';

export interface IAd extends IMongoDbItem {
    title: string;
    body: string;
}
