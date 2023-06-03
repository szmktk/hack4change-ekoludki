from sqlalchemy.orm import Session

from . import models, schemas


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.user_id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_route(db: Session, route_id: int):
    return db.query(models.Route).filter(models.Route.route_id == route_id).first()

def create_route(db: Session, route: schemas.RouteCreate):
    db_route = models.Route(
    route_date_start = route.route_date_start,
    route_date_end = route.route_date_end,
    route_start_time = route.route_start_time,
    start_point = route.start_point,
    end_point = route.end_point,
    # route_passengers:,  # TODO junction_table // Bartek
    route_driver_id = route.route_driver_id,
    # route_points_id: Points,
    # route_status: Optional[str],
    route_n_o_passengers = route.route_n_o_passengers,  # ilość pasazerow // Bartek
    route_description = route.route_description)

    db.add(db_route)
    db.commit()
    db.refresh(db_route)
    return db_route