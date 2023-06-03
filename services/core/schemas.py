from enum import Enum
from typing import Optional

from pydantic import BaseModel


class UserType(Enum):
    DRIVER = "DRIVER"
    PASSENGER = "PASSENGER"


class UserBase(BaseModel):
    email: str


class UserView(UserBase):
    email: str
    user_id: Optional[int]
    username: Optional[str]
    contact_info: Optional[str]
    # user_type: UserType
    user_points: Optional[int]

    class Config:
        orm_mode = True


class UserCreate(UserView):
    password: str


class User(BaseModel):
    user_id: Optional[int]
    username: Optional[str]
    # password: str
    email: Optional[str]
    contact_info: Optional[str]
    # user_type: UserType
    user_points: Optional[int]


# class Route(BaseModel):
#     route_id: str
#     route_date_start: str
#     route_date_end: str
#     route_start_time: str
#     start_point: str
#     end_point: str
#     # route_passengers:  # TODO junction_table // Bartek
#     route_driver: User
#     # route_points_id: Points
#     route_status: str
#     route_n_o_passengers: int  # ilość pasazerow // Bartek
#     route_description: str
#
#
# class Points(BaseModel):
#     points_id: str
#     route_id: Route
#     points_amount: int  # TODO potrzebny mnoznik punktow // Bartek
#     created_at: str  # TODO tutaj potrzebna funkcja time czy cos lepszego // Bartek
