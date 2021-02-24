import { Db, MongoClient, ObjectId } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';

import { IMongoDbItem } from '../models/mongodb-item';

export class MongoDatabase {
    private _database: Db;
    
    public async startDatabase() {
        if (!this._database) {
            const mongod = new MongoMemoryServer();
            const mongoDbUrl = await mongod.getUri();
            const client = new MongoClient(mongoDbUrl, { useUnifiedTopology: true });
            const connection = await client.connect();
            this._database = connection.db();
        }
    }
    
    public async getDatabase() {
        if (!this._database) {
            await this.startDatabase();
        }
    
        return this._database;
    }

    public async get<T>(id: string, collectionName: string): Promise<T> {
        const database = await this.getDatabase();
        return await database.collection(collectionName).findOne({ _id: new ObjectId(id) });
    }


    public async getAll<T>(collectionName: string): Promise<T[]> {
        const database = await this.getDatabase();
        return await database.collection(collectionName).find({}).toArray() as T[];
    }

    public async find<T>(item: Partial<T>, collectionName: string): Promise<T[]> {
        const database = await this.getDatabase();
        return await database.collection(collectionName).find({ ...item }).toArray() as T[];
    }


    public async insert<T extends IMongoDbItem>(item: Partial<T>, collectionName: string): Promise<any> {
        const database = await this.getDatabase();
        const { insertedId } = await database.collection(collectionName).insertOne(item);
        return insertedId;
    }


    public async insertMany<T extends IMongoDbItem>(items: Partial<T>[], collectionName: string): Promise<any> {
        const database = await this.getDatabase();
        const { insertedIds, insertedCount } = await database.collection(collectionName).insertMany(items);
        return insertedIds;
    }

    public async update<T extends IMongoDbItem>(id: string, item: Partial<T>, collectionName: string) {
        const database = await this.getDatabase();
        delete item._id;
        await database.collection(collectionName).updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    ...item
                }
            }
        );
    }

    public async delete(id: string, collectionName: string) {
        const database = await this.getDatabase();
        await database.collection(collectionName).deleteOne(
            { _id: new ObjectId(id) }
        );
    }
}
