import { app } from './app';
import { addEndpoints } from './endpoints';
import * as middleware from './middleware';
import * as startServer from './start-server';

middleware.useMiddleware(app);

addEndpoints(app);

startServer.start(app);