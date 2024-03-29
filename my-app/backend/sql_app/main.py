#import packages
import uvicorn
from typing import List
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
import crud
import models
import schemas
from database import SessionLocal, engine
from fastapi.encoders import jsonable_encoder
from datetime import date
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
#call for single launch date
#@app.get("/active/{active_launch}", response_model=schemas.ActiveBase)
#def read_active_launch(active_launch_date: date, db: Session = Depends(get_db)):
    #db_active_launch_date = crud.get_launch_date(db, active_launch_date=active_launch_date)

    #if db_active_launch_date is None:
        #raise HTTPException(status_code=404, detail="User not found")

    #return db_active_launch_date

#call for launch_date before specific date
@app.get("/activelaunch/", response_model=List[schemas.ActiveBase])
def read_active(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    active_launch = crud.get_active_launch(db, launch_date=crud.launch_date, skip=skip, limit=limit)
    return active_launch

#call active satellites
@app.get("/active/", response_model=List[schemas.ActiveBase])
def read_actives(skip: int = 0, limit: int = 7856, db: Session = Depends(get_db)):
    actives = crud.get_actives(db, skip=skip, limit=limit)
    return actives

#call debris
@app.get("/debris/", response_model=List[schemas.DebrisBase])
def read_debris(skip: int = 0, limit: int = 3451, db: Session = Depends(get_db)):
    debris = crud.get_debris(db, skip=skip, limit=limit)
    return debris
#call communication satellites
@app.get("/communications/", response_model=List[schemas.CommunicationsBase])
def read_communication(skip: int = 0, limit: int = 6689, db: Session = Depends(get_db)):
    communication = crud.get_communication(db, skip=skip, limit=limit)
    return communication
#call miscellanous satellites
@app.get("/misc/", response_model=List[schemas.MiscBase])
def read_misc(skip: int = 0, limit: int = 148, db: Session = Depends(get_db)):
    misc = crud.get_misc(db, skip=skip, limit=limit)
    return misc
#call navigation satellites
@app.get("/nav/", response_model=List[schemas.NavigationBase])
def read_nav(skip: int = 0, limit: int = 320, db: Session = Depends(get_db)):
    nav = crud.get_navigation(db, skip=skip, limit=limit)
    return nav
#call science satellites
@app.get("/science/", response_model=List[schemas.ScienceBase])
def read_science(skip: int = 0, limit: int = 97, db: Session = Depends(get_db)):
    science = crud.get_science(db, skip=skip, limit=limit)
    return science
#call weather satellites
@app.get("/weather/", response_model=List[schemas.Weather_ersBase])
def read_weather(skip: int = 0, limit: int = 635, db: Session = Depends(get_db)):
    weather = crud.get_weather(db, skip=skip, limit=limit)
    return weather

#start uvicorn
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000, log_level="info")


