from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base


class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password = Column(String)
    email = Column(String, unique=True)
    contact_info = Column(String)
    user_type = Column(String)
    user_points = Column(Integer)



class Route(Base):
    __tablename__ = "route"

    route_id = Column(Integer, primary_key=True, index=True)
    route_date_start = Column(String)
    route_date_end = Column(String)
    route_start_time = Column(String)
    start_point = Column(String)
    end_point = Column(String)
    route_passengers = Column(String) #TODO junction_table // Bartek
    route_points_id = Column(String) #TODO musimy to jakoś liczyć Bartek
    route_status = Column(Boolean)
    route_n_o_passengers = Column(Integer) #ilość pasazerow // Bartek
    route_description = Column(String)

    route_driver = relationship("User", back_populates="user_id")



class Points(Base):
    __tablename__ = "points"

    points_id = Column(Integer, primary_key=True, index=True)
    points_amount = Column(String) #TODO potrzebny mnoznik punktow // Bartek
    created_at = Column(String) #TODO tutaj potrzebna funkcja time czy cos lepszego // Bartek

    route_id = relationship("Route", back_populates="route_id")
