#import necessary packages
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker

#create database URL
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:admin@localhost:5432/satellite"

#create engine
engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)

#create a session -> not an instance yet, only class
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

#create a base class
Base = declarative_base()