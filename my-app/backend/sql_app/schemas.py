from typing import List, Union, Tuple
from pydantic import BaseModel, Field
from datetime import date
#schema actives
class ActiveBase(BaseModel):
    active_object_name: str = Field(alias="object_name")
    active_object_id: str = Field(alias="object_id")
    active_norad_cat_id: int = Field(alias="norad_cat_id")
    active_owner: str = Field(alias="owner")
    active_launch_date: date = Field(alias="launch_date")
    active_launch_site: str = Field(alias="launch_site")
    active_tle1: str = Field(alias="tle1")
    active_tle2: str = Field(alias="tle2")
    active_type: str = Field(alias="type")

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
#schema communications
class CommunicationsBase(BaseModel):
    comm_object_name: str = Field(alias="object_name")
    comm_object_id: str = Field(alias="object_id")
    comm_norad_cat_id: int = Field(alias="norad_cat_id")
    comm_owner: str = Field(alias="owner")
    comm_launch_date: str = Field(alias="launch_date")
    comm_launch_site: str = Field(alias="launch_site")
    comm_tle1: str = Field(alias="tle1")
    comm_tle2: str = Field(alias="tle2")
    comm_type: str = Field(alias="type")

    class Config:
        orm_mode = True
        allow_population_by_field_name = True

#schema misceallanous
class MiscBase(BaseModel):
    misc_object_name: str = Field(alias="object_name")
    misc_object_id: str = Field(alias="object_id")
    misc_norad_cat_id: int = Field(alias="norad_cat_id")
    misc_owner: str = Field(alias="owner")
    misc_launch_date: str = Field(alias="launch_date")
    misc_launch_site: str = Field(alias="launch_site")
    misc_tle1: str = Field(alias="tle1")
    misc_tle2: str = Field(alias="tle2")
    misc_type: str = Field(alias="type")

    class Config:
        orm_mode = True
        allow_population_by_field_name = True

#schema navigation
class NavigationBase(BaseModel):
    nav_object_name: str = Field(alias="object_name")
    nav_object_id: str = Field(alias="object_id")
    nav_norad_cat_id: int = Field(alias="norad_cat_id")
    nav_owner: str = Field(alias="owner")
    nav_launch_date: str = Field(alias="launch_date")
    nav_launch_site: str = Field(alias="launch_site")
    nav_tle1: str = Field(alias="tle1")
    nav_tle2: str = Field(alias="tle2")
    nav_type: str = Field(alias="type")

    class Config:
        orm_mode = True
        allow_population_by_field_name = True

#schema science
class ScienceBase(BaseModel):
    science_object_name: str = Field(alias="object_name")
    science_object_id: str = Field(alias="object_id")
    science_norad_cat_id: int = Field(alias="norad_cat_id")
    science_owner: str = Field(alias="owner")
    science_launch_date: str = Field(alias="launch_date")
    science_launch_site: str = Field(alias="launch_site")
    science_tle1: str = Field(alias="tle1")
    science_tle2: str = Field(alias="tle2")
    science_type: str = Field(alias="type")

    class Config:
        orm_mode = True
        allow_population_by_field_name = True

#schema weather
class Weather_ersBase(BaseModel):
    weather_object_name: str = Field(alias="object_name")
    weather_object_id: str = Field(alias="object_id")
    weather_norad_cat_id: int = Field(alias="norad_cat_id")
    weather_ers_owner: str = Field(alias="owner")
    weather_launch_date: str = Field(alias="launch_date")
    weather_launch_site: str = Field(alias="launch_site")
    weather_tle1: str = Field(alias="tle1")
    weather_tle2: str = Field(alias="tle2")
    weather_type: str = Field(alias="type")

    class Config:
        orm_mode = True
        allow_population_by_field_name = True

#debris schema
class DebrisBase(BaseModel):
    debristle_object_name: str = Field(alias="object_name")
    debristle_tle1: str = Field(alias="tle1")
    debristle_tle2: str = Field(alias="tle2")
    debristle_type: str = Field(alias="type")

    class Config:
        orm_mode = True
        allow_population_by_field_name = True

#class ActiveDebrisBase(BaseModel):
   #active: List[ActiveBase]
    #debris: List[DebrisBase]

    #class Config:
        #orm_mode = True