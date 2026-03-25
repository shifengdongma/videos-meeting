export interface SignalMessage {
  type: string
  [key: string]: unknown
}

export class WsClient {
  private socket: WebSocket | null = null

  connect(url: string, onMessage: (event: MessageEvent<string>) => void) {
    this.socket = new WebSocket(url)
    this.socket.onmessage = onMessage
  }

  send(payload: SignalMessage) {
    this.socket?.send(JSON.stringify(payload))
  }

  close() {
    this.socket?.close()
  }
}
