import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';

const app = express();
const port = 9001;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello world!');
});

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('Time: ', Date.now());
    next();
});

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});