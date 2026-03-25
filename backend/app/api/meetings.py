from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.enums import MeetingStatus, RoleEnum
from app.models.meeting import Meeting
from app.models.user import User
from app.schemas.meeting import MeetingCreate, MeetingResponse, MeetingUpdate
from app.services.deps import get_current_user, require_roles

router = APIRouter(prefix="/meetings", tags=["meetings"])


@router.get("", response_model=list[MeetingResponse])
def list_meetings(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    query = db.query(Meeting).order_by(Meeting.start_time.desc())
    if current_user.role == RoleEnum.user:
        return query.all()
    return query.all()


@router.post("", response_model=MeetingResponse, status_code=status.HTTP_201_CREATED)
def create_meeting(
    payload: MeetingCreate,
    current_user: User = Depends(require_roles(RoleEnum.admin, RoleEnum.host)),
    db: Session = Depends(get_db),
):
    meeting = Meeting(
        title=payload.title,
        start_time=payload.start_time,
        end_time=payload.end_time,
        record_url=payload.record_url,
        host_id=current_user.id,
    )
    db.add(meeting)
    db.commit()
    db.refresh(meeting)
    return meeting


@router.get("/{meeting_id}", response_model=MeetingResponse)
def get_meeting(
    meeting_id: int,
    _: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    meeting = db.query(Meeting).filter(Meeting.id == meeting_id).first()
    if not meeting:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="会议不存在")
    return meeting


@router.put("/{meeting_id}", response_model=MeetingResponse)
def update_meeting(
    meeting_id: int,
    payload: MeetingUpdate,
    current_user: User = Depends(require_roles(RoleEnum.admin, RoleEnum.host)),
    db: Session = Depends(get_db),
):
    meeting = db.query(Meeting).filter(Meeting.id == meeting_id).first()
    if not meeting:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="会议不存在")
    if current_user.role != RoleEnum.admin and meeting.host_id != current_user.id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="无权修改该会议")

    meeting.title = payload.title
    meeting.start_time = payload.start_time
    meeting.end_time = payload.end_time
    meeting.record_url = payload.record_url
    meeting.status = payload.status
    db.commit()
    db.refresh(meeting)
    return meeting


@router.delete("/{meeting_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_meeting(
    meeting_id: int,
    current_user: User = Depends(require_roles(RoleEnum.admin, RoleEnum.host)),
    db: Session = Depends(get_db),
):
    meeting = db.query(Meeting).filter(Meeting.id == meeting_id).first()
    if not meeting:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="会议不存在")
    if current_user.role != RoleEnum.admin and meeting.host_id != current_user.id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="无权删除该会议")
    db.delete(meeting)
    db.commit()
