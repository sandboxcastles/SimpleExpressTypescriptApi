import { app } from '../app';
import { addCollections } from '../database/add-collections';
import { addEndpoints } from '../endpoints';
import { environment } from '../environment';
import { getPort } from '../ports/get-port';
import { MongoDatabase } from '../database/mongo';

import * as middleware from '../middleware';
import * as startServer from './start-server';
import { isValidPort } from '../ports/valid-port';

export function start(startPort = -1) {

    let port = Number(startPort);

    if (!isValidPort(port)) {
        const args = process.argv.slice(2);
        port = getPort(args, environment.port);
    }

    middleware.useMiddleware(app);

    const db = new MongoDatabase();
    
    addEndpoints(app, db);
    addCollections(db);
    startServer.start(app, port, environment.baseUrl);
}