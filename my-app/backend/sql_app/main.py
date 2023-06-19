#import packages
import uvicorn
from typing import List
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
import crud, models, schemas
from database import SessionLocal, engine
#initialize database

models.Base.metadata.create_all(bind=engine)

#instance
app = FastAPI()

#dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


#path operations
#call active single
@app.get("/active/{active_norad_cat_id}", response_model=schemas.ActiveBase)
def read_active(active_norad_cat_id: int, db: Session = Depends(get_db)):
    db_active_norad_cat_id = crud.get_active(db, active_norad_cat_id=active_norad_cat_id)

    if db_active_norad_cat_id is None:
        raise HTTPException(status_code=404, detail="User not found")

    return db_active_norad_cat_id
#call actives
@app.get("/active/", response_model=List[schemas.ActiveBase])
def read_actives(skip: int = 0, limit: int = 7856, db: Session = Depends(get_db)):
    actives = crud.get_actives(db, skip=skip, limit=limit)
    return actives
#call actives and debris
#call debris
#call communications
@app.get("/communications/", response_model=List[schemas.CommunicationsBase])
def read_communication(skip: int = 0, limit: int = 6689, db: Session = Depends(get_db)):
    communication = crud.get_communication(db, skip=skip, limit=limit)
    return communication
#call misc
@app.get("/misc/", response_model=List[schemas.MiscBase])
def read_misc(skip: int = 0, limit: int = 148, db: Session = Depends(get_db)):
    misc = crud.get_misc(db, skip=skip, limit=limit)
    return misc
#call nav
@app.get("/nav/", response_model=List[schemas.NavigationBase])
def read_misc(skip: int = 0, limit: int = 320, db: Session = Depends(get_db)):
    nav = crud.get_navigation(db, skip=skip, limit=limit)
    return nav
#call science
@app.get("/science/", response_model=List[schemas.ScienceBase])
def read_science(skip: int = 0, limit: int = 97, db: Session = Depends(get_db)):
    science = crud.get_science(db, skip=skip, limit=limit)
    return science
#call weather
@app.get("/weather/", response_model=List[schemas.Weather_ersBase])
def read_weather(skip: int = 0, limit: int = 635, db: Session = Depends(get_db)):
    weather = crud.get_weather(db, skip=skip, limit=limit)
    return weather

#start uvicorn
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8001, log_level="info")


