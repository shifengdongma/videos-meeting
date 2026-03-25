from sqlalchemy import ForeignKey, Integer, String, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base


class Vote(Base):
    __tablename__ = "votes"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    meeting_id: Mapped[int] = mapped_column(ForeignKey("meetings.id"), nullable=False)
    topic: Mapped[str] = mapped_column(String(255), nullable=False)

    meeting = relationship("Meeting", back_populates="votes")
    options = relationship("VoteOption", back_populates="vote", cascade="all, delete-orphan")
    records = relationship("VoteRecord", back_populates="vote", cascade="all, delete-orphan")


class VoteOption(Base):
    __tablename__ = "vote_options"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    vote_id: Mapped[int] = mapped_column(ForeignKey("votes.id"), nullable=False)
    content: Mapped[str] = mapped_column(String(120), nullable=False)

    vote = relationship("Vote", back_populates="options")
    records = relationship("VoteRecord", back_populates="option")


class VoteRecord(Base):
    __tablename__ = "vote_records"
    __table_args__ = (UniqueConstraint("vote_id", "user_id", name="uq_vote_user"),)

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    vote_id: Mapped[int] = mapped_column(ForeignKey("votes.id"), nullable=False)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), nullable=False)
    option_id: Mapped[int] = mapped_column(ForeignKey("vote_options.id"), nullable=False)

    vote = relationship("Vote", back_populates="records")
    user = relationship("User", back_populates="vote_records")
    option = relationship("VoteOption", back_populates="records")
