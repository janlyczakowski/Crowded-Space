from sqlalchemy.orm import Session
import models
from datetime import datetime
#1 call active & debris
#def get_activedebris(db: Session, skip: int = 0, limit: int = 15000):
   # return db.query(models.ActiveDebris).offset(skip).limit(limit).all()
#2 call actives
def get_active(db: Session, active_launch_date:int):
    launch_date = datetime(1970, 1, 1).date()
    return db.query(models.Active).filter(models.Active.active_launch_date < launch_date).all()

def get_actives(db: Session, skip: int = 0, limit: int = 7834):
    return db.query(models.Active).offset(skip).limit(limit).all()

#3 call debris
def get_debris(db: Session, skip: int = 0, limit: int = 3451):
    return db.query(models.Debris).offset(skip).limit(limit).all()
#4 call communications
def get_communication(db: Session, skip: int = 0, limit: int = 6689):
    return db.query(models.Communications).offset(skip).limit(limit).all()
#5 call misc
def get_misc(db: Session, skip: int = 0, limit: int = 148):
    return db.query(models.Misc).offset(skip).limit(limit).all()
#6 call nav
def get_navigation(db: Session, skip: int = 0, limit: int = 320):
    return db.query(models.Navigation).offset(skip).limit(limit).all()
#7 call science
def get_science(db: Session, skip: int = 0, limit: int = 97):
    return db.query(models.Science).offset(skip).limit(limit).all()
#8 call weather
def get_weather(db: Session, skip: int = 0, limit: int = 635):
    return db.query(models.Weather_ers).offset(skip).limit(limit).all()

def get_active_debris(db: Session, skip: int = 0, limit: int = 7834):
    return get_debris(db, skip=skip, limit=limit), get_actives(db, skip=skip, limit=limit)
