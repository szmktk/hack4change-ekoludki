from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base


class User(Base):
    __tablename__ = "users"

    user_id = Column(String, )
    username = Column(String, )
    password = Column(String, )
    email = Column(String, )
    contact_info = Column(String, )
    user_type = Column(String, )
    user_points = Column(String, )