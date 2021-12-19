import {ChatMessage} from "./ChatMessage";
import {ChatMessageType} from "./ChatMessageType";

export default class ChatUserMessage extends ChatMessage {
    public type: ChatMessageType = 'user-message';

    constructor (
        public readonly id: number,
        public readonly message: string,
        public readonly clientId: number,
        public readonly createTime: number
    ) {
        super();
    }
}