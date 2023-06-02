from enum import Enum

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class UserType(Enum):
    DRIVER = "DRIVER"
    PASSENGER = "PASSENGER"


class User(BaseModel):
    user_id: str
    username: str
    password: str
    email: str
    contact_info: str
    user_type: UserType


@app.get("/")
async def root():
    return {"message": "it_works!"}
