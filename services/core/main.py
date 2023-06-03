from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session


from . import models
from .database import engine, SessionLocal
from .repository import create_user, get_user_by_email, get_user
from .schemas import UserView, UserCreate

app = FastAPI()

models.Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
async def root():
    return {"message": "it_works!"}


@app.post("/users", response_model=UserView)
async def create_user_post(user: UserCreate, db: Session = Depends(get_db)):
    db_user = get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    user = create_user(db=db, user=user)
    view_user: UserView = UserView(
        user_id=user.user_id,
        username=user.username,
        email=user.email,
        contact_info= user.contact_info,
        user_points=user.user_points,
    )
    return view_user


@app.get("/users/{user_id}", response_model=UserView)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user
