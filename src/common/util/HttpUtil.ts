import {IncomingMessage} from 'http';

export class HttpUtil {
    public static getRequestIp(request: IncomingMessage): string | undefined {
        return request.headers['x-forwarded-for'] as string
            || request.socket.remoteAddress;
    }
}