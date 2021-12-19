import {ChatMessage} from "./ChatMessage";
import {ChatMessageType} from "./ChatMessageType";

export class ChatSystemMessage extends ChatMessage {

    constructor (
        public readonly type: ChatMessageType,
        public readonly id: number,
        public readonly clientId: number,
        public readonly createTime: number
    ) {
        super();
    }
}