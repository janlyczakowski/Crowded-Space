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
@app.get("/active/{active_norad_cat_id}", response_model=schemas.ActiveBase)
def read_active(active_norad_cat_id: int, db: Session = Depends(get_db)):
    db_active_norad_cat_id = crud.get_active(db, active_norad_cat_id=active_norad_cat_id)

    if db_active_norad_cat_id is None:
        raise HTTPException(status_code=404, detail="User not found")

    return db_active_norad_cat_id

@app.get("/active/", response_model=List[schemas.ActiveBase])
def read_actives(skip: int = 0, limit: int = 7856, db: Session = Depends(get_db)):
    actives = crud.get_actives(db, skip=skip, limit=limit)
    return actives

#start uvicorn
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8001, log_level="info")


