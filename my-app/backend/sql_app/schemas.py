from typing import List, Union
from pydantic import BaseModel

class ActiveBase(BaseModel):
    active_object_name: str
    active_object_id: str
    active_norad_cat_id: int
    active_owner: str
    active_launch_date: str
    active_launch_site: str
    active_purpose: str
    active_tle1: str
    active_tle2: str

    class Config:
        orm_mode = True