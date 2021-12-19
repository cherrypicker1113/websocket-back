import {Application} from 'express-ws';
import {HttpUtil} from '../../common/util/HttpUtil';

export default (app: Application) => {
    app.ws('/sample2', (ws, req) => {
        const ip = HttpUtil.getRequestIp(req);
        console.log('새로운 클라이언트 접속2', ip);
    
        ws.on('message', (msg) => {
            console.log(msg);
        });
        ws.on('error', (err) => {
            console.error(err);
        });
        ws.on('close', () => {
            console.log('클라이언트 접속 해제', ip);
        });
    })
};