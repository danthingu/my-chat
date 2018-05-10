export class ChatMessage {
    $key?: string;
    email?: string;
    username?: string;
    message?: string;
    timeSent?: Date = new Date();
}
