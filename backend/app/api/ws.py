from fastapi import APIRouter, WebSocket, WebSocketDisconnect

from app.services.ws_manager import manager

router = APIRouter(tags=["ws"])


@router.websocket("/ws/meetings/{meeting_id}")
async def meeting_ws(websocket: WebSocket, meeting_id: int):
    await manager.connect_meeting(meeting_id, websocket)
    try:
        while True:
            payload = await websocket.receive_json()
            await manager.broadcast_meeting(meeting_id, payload)
    except WebSocketDisconnect:
        manager.disconnect_meeting(meeting_id, websocket)


@router.websocket("/ws/live/{live_id}")
async def live_ws(websocket: WebSocket, live_id: int):
    await manager.connect_live(live_id, websocket)
    try:
        while True:
            payload = await websocket.receive_json()
            await manager.broadcast_live(live_id, payload)
    except WebSocketDisconnect:
        manager.disconnect_live(live_id, websocket)
