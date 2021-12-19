import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';
import websocket from './websocket';

const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello world!');
});

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('Time: ', Date.now());
    next();
});

app.use('/', routes);

websocket(app);

export default app;