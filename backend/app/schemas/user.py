from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field

from app.models.enums import RoleEnum


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: "UserResponse"


class UserRegister(BaseModel):
    username: str = Field(min_length=3, max_length=50)
    password: str = Field(min_length=6, max_length=128)


class UserLogin(UserRegister):
    pass


class UserResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    username: str
    role: RoleEnum
    created_at: datetime


class UserRoleUpdate(BaseModel):
    role: RoleEnum
