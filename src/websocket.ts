import * as express from 'express';
import expressws from 'express-ws';
import SampleWebsocket from './sample/route/SampleWebsocket';
import SampleWebsocket2 from './sample/route/SampleWebsocket2';

export default (app: express.Application) => {
    const {app: newApp} = expressws(app);

    SampleWebsocket(newApp);
    SampleWebsocket2(newApp);
};