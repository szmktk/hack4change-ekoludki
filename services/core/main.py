from enum import Enum

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


# class UserType(Enum):
#     DRIVER = "DRIVER"
#     PASSENGER = "PASSENGER"


# class User(BaseModel):
#     user_id: str
#     username: str
#     password: str
#     email: str
#     contact_info: str
#     user_type: UserType
#     user_points: int


# class Route(BaseModel):
#     route_id: str
#     route_date_start: str
#     route_date_end: str
#     route_start_time: str
#     start_point: str
#     end_point: str
#     route_passengers: # todo junction_table  Bartek
#     route_driver: User
#     route_points_id: Points
#     route_status: str
#     route_n_o_passengers: int  #ilość pasazerow  Bartek
#     route_description: str


# class Points(BaseModel):
#     points_id: strString
#     route_id: Route
#     points_amount: int  #todo potrzebny mnoznik punktow  Bartek
#     created_at: str  #todo tutaj potrzebna funkcja time czy cos lepszego  Bartek


@app.get("/")
async def root():
    return {"message": "it_works!"}
