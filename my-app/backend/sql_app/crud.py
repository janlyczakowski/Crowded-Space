from sqlalchemy.orm import Session
import models
#1 call active & debris

#2 call actives
def get_active(db: Session, active_norad_cat_id: int):
    return db.query(models.Active).filter(models.Active.active_norad_cat_id == active_norad_cat_id).first()

def get_actives(db: Session, skip: int = 0, limit: int = 7834):
    return db.query(models.Active).offset(skip).limit(limit).all()

#3 call debris
#def get_debris(db: Session, skip: int = 0, limit: int = 3453):
    #return db.query(models.Debris).offset(skip).limit(limit).all()
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