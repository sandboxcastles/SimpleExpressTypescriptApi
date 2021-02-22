import { IRepository } from '../interfaces/repository';
import { IMongoDbItem } from '../models/mongodb-item';
import { MongoDatabase } from './mongo';

export class Repository<T extends IMongoDbItem> implements IRepository<T> {
    constructor(protected db: MongoDatabase, protected collectionName: string) {}

    async get(id: string) {
        const result = await this.db.get(id, this.collectionName);
        return result as T;
    }

    async getAll() {
        const result = await this.db.getAll(this.collectionName);
        return result as T[];
    }

    async find(item: Partial<T>) {
        const result = await this.db.find(item, this.collectionName);
        return result as T[];
    }

    async add(item: Partial<T>) {
        return await this.db.insert(item, this.collectionName);
    }

    async update(id: string, item: Partial<T>) {
        await this.db.update(id, item, this.collectionName);
    }

    async delete(id: string) {
        await this.db.delete(id, this.collectionName);
    }
}
