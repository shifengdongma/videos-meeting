from collections import defaultdict

from fastapi import WebSocket


class ConnectionManager:
    def __init__(self):
        self.meeting_connections: dict[int, list[WebSocket]] = defaultdict(list)
        self.live_connections: dict[int, list[WebSocket]] = defaultdict(list)

    async def connect_meeting(self, meeting_id: int, websocket: WebSocket):
        await websocket.accept()
        self.meeting_connections[meeting_id].append(websocket)

    def disconnect_meeting(self, meeting_id: int, websocket: WebSocket):
        if websocket in self.meeting_connections[meeting_id]:
            self.meeting_connections[meeting_id].remove(websocket)

    async def broadcast_meeting(self, meeting_id: int, payload: dict):
        for connection in list(self.meeting_connections[meeting_id]):
            await connection.send_json(payload)

    async def connect_live(self, live_id: int, websocket: WebSocket):
        await websocket.accept()
        self.live_connections[live_id].append(websocket)

    def disconnect_live(self, live_id: int, websocket: WebSocket):
        if websocket in self.live_connections[live_id]:
            self.live_connections[live_id].remove(websocket)

    async def broadcast_live(self, live_id: int, payload: dict):
        for connection in list(self.live_connections[live_id]):
            await connection.send_json(payload)


manager = ConnectionManager()
