from enum import Enum


class RoleEnum(str, Enum):
    admin = "admin"
    host = "host"
    user = "user"


class MeetingStatus(str, Enum):
    scheduled = "scheduled"
    ongoing = "ongoing"
    ended = "ended"
