from typing import List, Union
from pydantic import BaseModel
#schema actives
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
#schema communications
class CommunicationsBase(BaseModel):
    comm_object_name: str
    comm_object_id: str
    comm_norad_cat_id: int
    comm_owner: str
    comm_launch_date: str
    comm_launch_site: str
    comm_tle1: str
    comm_tle2: str

    class Config:
        orm_mode = True

#schema misceallanous
class MiscBase(BaseModel):
    misc_object_name: str
    misc_object_id: str
    misc_norad_cat_id: int
    misc_owner: str
    misc_launch_date: str
    misc_launch_site: str
    misc_tle1: str
    misc_tle2: str

    class Config:
        orm_mode = True

#schema navigation
class NavigationBase(BaseModel):
    nav_object_name: str
    nav_object_id: str
    nav_norad_cat_id: int
    nav_owner: str
    nav_launch_date: str
    nav_launch_site: str
    nav_tle1: str
    nav_tle2: str

    class Config:
        orm_mode = True

#schema science
class ScienceBase(BaseModel):
    science_object_name: str
    science_object_id: str
    science_norad_cat_id: int
    science_owner: str
    science_launch_date: str
    science_launch_site: str
    science_tle1: str
    science_tle2: str

    class Config:
        orm_mode = True

#schema weather
class Weather_ersBase(BaseModel):
    weather_object_name: str
    weather_object_id: str
    weather_norad_cat_id: int
    weather_ers_owner: str
    weather_launch_date: str
    weather_launch_site: str
    weather_tle1: str
    weather_tle2: str

    class Config:
        orm_mode = True

#debris schema
class DebrisBase(BaseModel):
    debris_object_name: str
    debris_object_id: str
    debris_norad_cat_id: int
    debris_owner: str
    debris_launch_date: str
    debris_launch_site: str
    debris_purpose: str
    debris_tle1: str
    debris_tle2: str

    class Config:
        orm_mode = True