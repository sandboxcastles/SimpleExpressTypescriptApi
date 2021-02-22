import { IMongoDbItem } from './mongodb-item';

export interface IJoke extends IMongoDbItem {
    title: string;
    question?: string;
    punchline: string;
}
