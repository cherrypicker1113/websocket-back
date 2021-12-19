import * as express from 'express';
import expressws from 'express-ws';
import ChatWebsocket from './chat/route/ChatWebsocket';
import SampleWebsocket from './sample/route/SampleWebsocket';
import SampleWebsocket2 from './sample/route/SampleWebsocket2';

export default (app: express.Application) => {
    const {app: expressWsApp} = expressws(app);

    SampleWebsocket(expressWsApp);
    SampleWebsocket2(expressWsApp);
    ChatWebsocket(expressWsApp);
};