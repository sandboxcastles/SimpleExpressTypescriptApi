import * as express from 'express';
import { ObjectId } from 'mongodb';

import { environment } from '../environment';
import { IEndpointModule } from '../interfaces/endpoint-module';
import { IRepository } from '../interfaces/repository';
import { IMongoDbItem } from '../models/mongodb-item';

export class EndpointsModule<T extends IMongoDbItem> implements IEndpointModule {
    protected apiEndpoint: string;

    constructor(protected repo: IRepository<T>, protected collectionName: string) {
        this.apiEndpoint = `${environment.apiEndpoint}/${collectionName}`;
    }

    addEndpoints(app: express.Express): void {
        app.get(`${this.apiEndpoint}/:id`, async (req, res) => {
            res.send(await this.repo.get(req.params.id as string));
        });

        app.get(this.apiEndpoint, async (_, res) => {
            res.send(await this.repo.getAll());
        });

        app.post(`${this.apiEndpoint}/find`, async (req, res) => {
            const item = { ...req.body };
            if (item._id) {
                const id = new ObjectId(item._id);
                delete item._id;
                item._id = id;
            }
            res.send(await this.repo.find(item));
        });

        app.post(this.apiEndpoint, async (req, res) => {
            const newAd = req.body;
            const result = await this.repo.add(newAd);
            res.send({ message: `Item inserted: ${result}`});
        });

        app.put(`${this.apiEndpoint}/:id`, async (req, res) => {
            const item = req.body;
            await this.repo.update(req.params.id as string, item);
            res.send({ message: 'Item updated.' });
        });

        app.delete(`${this.apiEndpoint}/:id`, async (req, res) => {
            await this.repo.delete(req.params.id);
            res.send({ message: 'Item removed.' });
        });
    }
}