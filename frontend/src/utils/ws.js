export class WsClient {
    constructor() {
        Object.defineProperty(this, "socket", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
    }
    connect(url, onMessage) {
        this.socket = new WebSocket(url);
        this.socket.onmessage = onMessage;
    }
    send(payload) {
        this.socket?.send(JSON.stringify(payload));
    }
    close() {
        this.socket?.close();
    }
}
