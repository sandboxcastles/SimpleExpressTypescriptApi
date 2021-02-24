import * as express from 'express';

export function start(app: express.Express, port: number, baseUrl: string): void {
    app.listen(port, () => {
        console.log(`Server running at ${baseUrl}:${port}...`);
    })
}
