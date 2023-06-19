#ToDo: relations
#import packages
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
#take Base class from database.py
from database import Base
#define classes ->tables from postgres db
class Active(Base):
    __tablename__ = "active"

    active_object_name = Column(String, primary_key=True)
    active_object_id = Column(String)
    active_norad_cat_id = Column(Integer, ForeignKey("satcat.satcat_norad_cat_id"))
    active_owner = Column(String)
    active_launch_date = Column(String)
    active_launch_site = Column(String)
    active_decay_date = Column(String)
    active_purpose = Column(String)
    active_tle1 = Column(String)
    active_tle2 = Column(String)

class Communications(Base):
    __tablename__ = "communications"

    comm_object_name = Column(String, primary_key=True)
    comm_object_id = Column(String)
    comm_norad_cat_id = Column(Integer, ForeignKey("satcat.satcat_norad_cat_id"))
    comm_owner = Column(String)
    comm_launch_date = Column(String)
    comm_launch_site = Column(String)
    comm_decay_date = Column(String)
    comm_tle1 = Column(String)
    comm_tle2 = Column(String)

class Debris(Base):
    __tablename__ = "debris"

    debris_object_name = Column(String, primary_key=True)
    debris_object_id = Column(String)
    debris_epoch = Column(String)
    debris_mean_motion = Column(String)
    debris_eccentricity = Column(String)
    debris_inlcination = Column(String)
    debris_ra_of_asc_node = Column(String)
    debris_arg_of_pericenter = Column(String)
    debris_mean_anomaly = Column(String)
    debris_ephemeris_type = Column(String)
    debris_classification_type = Column(String)
    debris_norad_cat_id = Column(Integer, ForeignKey("satcat.satcat_norad_cat_id"))
    debris_element_set_no = Column(String)
    debris_rev_at_epoch = Column(String)
    debris_bstar = Column(String)
    debris_mean_motion_dot = Column(String)
    debris_mean_motion_ddot = Column(String)
    debris_owner = Column(String)
    debris_launch_date = Column(String)
    debris_launch_site = Column(String)
    debris_decay_date = Column(String)

class Misc(Base):
    __tablename__ = "misc"

    misc_object_name = Column(String, primary_key=True)
    misc_object_id = Column(String)
    misc_norad_cat_id = Column(Integer, ForeignKey("satcat.satcat_norad_cat_id"))
    misc_owner = Column(String)
    misc_launch_date = Column(String)
    misc_launch_site = Column(String)
    misc_decay_date = Column(String)
    misc_tle1 = Column(String)
    misc_tle2 = Column(String)

class Navigation(Base):
    __tablename__ = "navigation"

    nav_object_name = Column(String, primary_key=True)
    nav_object_id = Column(String)
    nav_norad_cat_id = Column(Integer, ForeignKey("satcat.satcat_norad_cat_id"))
    nav_owner = Column(String)
    nav_launch_date = Column(String)
    nav_launch_site = Column(String)
    nav_decay_date = Column(String)
    nav_tle1 = Column(String)
    nav_tle2 = Column(String)

class Satcat(Base):
    __tablename__ = "satcat"

    satcat_object_name = Column(String)
    satcat_object_id = Column(String)
    satcat_norad_cat_id = Column(Integer, primary_key=True, index=True)
    satcat_object_type = Column(String)
    satcat_ops_status_owner = Column(String)
    satcat_owner = Column(String)
    satcat_launch_date = Column(String)
    satcat_launch_site = Column(String)
    satcat_mean_decay_date = Column(String)
    satcat_period = Column(String)
    satcat_inlcination = Column(String)
    satcat_apogee = Column(String)
    satcat_perigee = Column(String)
    satcat_rcs = Column(String)
    satcat_data_status_code = Column(String)
    satcat_orbit_center = Column(String)
    satcat_orbit_type = Column(String)

class Science(Base):
    __tablename__ = "science"

    science_object_name = Column(String, primary_key=True)
    science_object_id = Column(String)
    science_norad_cat_id = Column(Integer, ForeignKey("satcat.satcat_norad_cat_id"))
    science_owner = Column(String)
    science_launch_date = Column(String)
    science_launch_site = Column(String)
    science_decay_date = Column(String)
    science_tle1 = Column(String)
    science_tle2 = Column(String)
class Weather_ers(Base):
    __tablename__ = "weather_ers"

    weather_object_name = Column(String, primary_key=True)
    weather_object_id = Column(String)
    weather_norad_cat_id = Column(Integer, ForeignKey("satcat.satcat_norad_cat_id"))
    weather_ers_owner = Column(String)
    weather_launch_date = Column(String)
    weather_launch_site = Column(String)
    weather_decay_date = Column(String)
    weather_tle1 = Column(String)
    weather_tle2 = Column(String)