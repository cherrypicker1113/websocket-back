import {Application} from 'express-ws';
import {WebSocket} from 'ws';
import {HttpUtil} from '../../common/util/HttpUtil';
import {ChatMessage} from '../model/ChatMessage';
import {ChatSystemMessage} from '../model/ChatSystemMessage';
import ChatUserMessage from '../model/ChatUserMessage';

export default (app: Application) => {
    let clientIdSeq: number = 0;
    const clientMap: Map<number, WebSocket> = new Map();
    const chatMessages: ChatMessage[] = [];

    app.ws('/chat', (ws, req) => {
        const clientId = ++clientIdSeq;
        clientMap.set(clientId, ws);

        ws.send(JSON.stringify({action: 'init', data: {
            clientId,
            messages: chatMessages.length > 50
                ? chatMessages.slice(chatMessages.length - 50, chatMessages.length)
                : chatMessages
        }}));

        broadcast(new ChatSystemMessage('user-in', chatMessages.length, clientId, Date.now()));

        const ip = HttpUtil.getRequestIp(req);
        console.log('새로운 클라이언트 접속', ip, clientId);
    
        ws.on('message', (json: string) => {
            const res = JSON.parse(json);
            if (res.action !== 'message')
                return;

            broadcast(new ChatUserMessage(chatMessages.length, res.data, clientId, Date.now()));
        });

        ws.on('error', (err) => {
            console.error(err);
        });

        ws.on('close', () => {
            clientMap.delete(clientId);
            broadcast(new ChatSystemMessage('user-out', chatMessages.length, clientId, Date.now()));
            console.log('클라이언트 접속 해제', ip);
        });
    });

    const broadcast = (message: ChatMessage) => {
        chatMessages.push(message);

        const serialized = JSON.stringify({
            action: 'message',
            data: message
        });
        clientMap.forEach(client => client.send(serialized));
    };
};