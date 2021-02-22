import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

// import * as helmet from 'helmet';
// import * as morgan from 'morgan';

const middleware = [
    // helmet(),
    bodyParser.json(),
    cors(),
    // morgan('combined')
];

export function useMiddleware(app: express.Express): void {
    app.use(bodyParser.json());
    app.use(cors());
    // middleware.forEach(mw => app.use(mw));
}
