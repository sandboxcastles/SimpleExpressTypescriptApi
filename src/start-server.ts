import * as express from 'express';

import { environment } from './environment';

export function start(app: express.Express): void {
    app.listen(environment.port, () => {
        console.log(`Server running at ${environment.baseUrl}:${environment.port}...`);
    })
}
