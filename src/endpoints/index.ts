import * as express from 'express';

import { MongoDatabase } from '../database/mongo';
import { Repository } from '../database/repository';
import { environment } from '../environment';
import { EndpointsModule } from './endpoint-module';

export async function addEndpoints(app: express.Express, db: MongoDatabase) {
    app.get('/', (_, res) => {
        res.send({ message: 'Welcome to localhost:3001' });
    })

    await db.startDatabase();
    environment.collections?.forEach(collection => {
        const repo = new Repository(db, collection.collectionName);
        new EndpointsModule(repo, collection.collectionName).addEndpoints(app);
    });
}