from sqlalchemy.orm import Session
import models

def get_active(db: Session, active_norad_cat_id: int):
    return db.query(models.Active).filter(models.Active.active_norad_cat_id == active_norad_cat_id).first()

def get_actives(db: Session, skip: int = 0, limit: int = 7856):
    return db.query(models.Active).offset(skip).limit(limit).all()

def read_active_by_active_norad_cat_id(db: Session, active_norad_cat_id: int):
    return db.query(models.Active).filter(models.Active.active_norad_cat_id == active_norad_cat_id).first()

#def read_satcat(db: Session, satcat_object_name: str):
    #return db.query(models.Satcat).filter(models.Satcat.satcat_object_name == satcat_object_name).first()

#def read_satcats(db: Session, skip: int = 0, limit: int = 500):
    #return db.query(models.Satcat).offset(skip).limit(limit).all()