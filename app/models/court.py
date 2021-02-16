from .db import db
from sqlalchemy import Table, Column, Integer, ForeignKey
from sqlalchemy.orm import backref, relationship
# from sqlalchemy.ext.declarative import declarative_base
from .player import Player

# Base = declarative_base()

# association_table = Table('association', Base.metadata,
#                           Column('Player_id', Integer,
#                                  ForeignKey('Players.id')),
#                           Column('Court_id', Integer,
#                                  ForeignKey('Courts.id')))


class Court(db.Model):
    __tablename__ = "Courts"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    latitude = db.Column(db.Numeric(10, 7), nullable=False)
    longitude = db.Column(db.Numeric(10, 7), nullable=False)
    player_id = db.Column(db.Integer, db.ForeignKey("Players.id"))

    player = relationship("Player", backref="Courts")
