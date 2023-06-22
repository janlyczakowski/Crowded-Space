from sqlalchemy.orm import Session
import models
import schemas
from datetime import date

#def get_launch_date(db: Session, active_launch_date: date):
    #return db.query(models.Active).filter(models.Active.active_launch_date == active_launch_date).first()
#1 call actives by launch date
launch_date = date(2009, 2, 10)
def get_active_launch(db: Session, launch_date: date = date(2009, 2, 10), skip: int = 0, limit: int = 100):
    return db.query(models.Active).filter(models.Active.active_launch_date < launch_date).offset(skip).limit(limit).all()
#call2 actives
def get_actives(db: Session, skip: int = 0, limit: int = 7834):
    return db.query(models.Active).offset(skip).limit(limit).all()

#3 call debris
def get_debris(db: Session, skip: int = 0, limit: int = 3451):
    return db.query(models.Debris).offset(skip).limit(limit).all()
#4 call communications
def get_communication(db: Session, skip: int = 0, limit: int = 6689):
    communication = db.query(models.Communications).offset(skip).limit(limit).all()
    return [schemas.CommunicationsBase.from_orm(i) for i in communication]
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
