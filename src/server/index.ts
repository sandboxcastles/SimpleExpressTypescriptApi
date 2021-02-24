import { app } from '../app';
import { addCollections } from '../database/add-collections';
import { addEndpoints } from '../endpoints';
import { environment } from '../environment';
import { getPort } from '../ports/get-port';
import { MongoDatabase } from '../database/mongo';

import * as middleware from '../middleware';
import * as startServer from './start-server';

middleware.useMiddleware(app);

const db = new MongoDatabase();
addEndpoints(app, db);
addCollections(db);

const args = process.argv.slice(2);
const port = getPort(args, environment.port);
startServer.start(app, port, environment.baseUrl);