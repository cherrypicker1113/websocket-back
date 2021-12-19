import {ChatMessageType} from "./ChatMessageType";

export abstract class ChatMessage {
    public abstract type: ChatMessageType;
    public abstract id: number;
    public abstract clientId: number;
    public createTime?: number;
}