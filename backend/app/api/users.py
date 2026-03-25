from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.enums import RoleEnum
from app.models.user import User
from app.schemas.user import UserResponse, UserRoleUpdate
from app.services.deps import require_roles

router = APIRouter(prefix="/users", tags=["users"])


@router.get("", response_model=list[UserResponse])
def list_users(
    _: User = Depends(require_roles(RoleEnum.admin)),
    db: Session = Depends(get_db),
):
    return db.query(User).order_by(User.created_at.desc()).all()


@router.put("/{user_id}/role", response_model=UserResponse)
def update_user_role(
    user_id: int,
    payload: UserRoleUpdate,
    _: User = Depends(require_roles(RoleEnum.admin)),
    db: Session = Depends(get_db),
):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="用户不存在")
    user.role = payload.role
    db.commit()
    db.refresh(user)
    return user
