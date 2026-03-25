from datetime import datetime

from pydantic import BaseModel, ConfigDict

from app.models.enums import MeetingStatus


class MeetingBase(BaseModel):
    title: str
    start_time: datetime
    end_time: datetime
    record_url: str | None = None


class MeetingCreate(MeetingBase):
    pass


class MeetingUpdate(MeetingBase):
    status: MeetingStatus


class MeetingResponse(MeetingBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    host_id: int
    status: MeetingStatus
