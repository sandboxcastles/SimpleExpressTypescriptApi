import * as express from 'express';

export interface IEndpointModule {
    addEndpoints(app: express.Express): void;
}
