from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session


from . import models
from .database import engine, SessionLocal
from .repository import create_user, get_user_by_email, get_user, create_route, get_route
from .schemas import UserView, UserCreate, RouteView, RouteCreate

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

# User methods
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

# Route method
@app.post("/routes", response_model=RouteView)
async def create_route_post(route: RouteCreate, db: Session = Depends(get_db)):
    # db_user = get_user_by_email(db, email=user.email)
    # if db_user: # TODO check user is true etc Pawel
    #     raise HTTPException(status_code=400, detail="Email already registered")

    route = create_route(db=db, route=route)
    view_route: RouteView = RouteView(
        route_id = route.route_id,
        route_date_start = route.route_date_start,
        route_date_end = route.route_date_end,
        route_start_time = route.route_start_time,
        start_point = route.start_point,
        end_point = route.end_point,
        # route_passengers:,  
        route_driver_id = route.route_driver_id,
        # route_points_id: Points,
        # route_status: Optional[str],
        route_n_o_passengers = route.route_n_o_passengers, 
        route_description = route.route_description
    )
    return view_route


@app.get("/routes/{route_id}", response_model=RouteView)
def read_route(route_id: int, db: Session = Depends(get_db)):
    db_route = get_route(db, route_id=route_id)
    if db_route is None:
        raise HTTPException(status_code=404, detail="Route not found")
    return db_route