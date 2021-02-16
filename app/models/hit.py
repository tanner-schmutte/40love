from .db import db
from sqlalchemy import Table, Column, Integer, ForeignKey
from sqlalchemy.orm import backref, relationship
# from sqlalchemy.ext.declarative import declarative_base
from .player import Player

# Base = declarative_base()

# association_table = Table('association', Base.metadata,
#                           Column('Player_id', Integer,
#                                  ForeignKey('Players.id')),
#                           Column('Hit_id', Integer,
#                                  ForeignKey('Hits.id')))


class Hit(db.Model):
    __tablename__ = "Hits"

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime)
    player1_id = db.Column(db.Integer, db.ForeignKey("Players.id"))
    player2_id = db.Column(db.Integer, db.ForeignKey("Players.id"))
    court_id = db.Column(db.Integer, db.ForeignKey("Courts.id"))

    player1 = relationship("Player", foreign_keys=[player1_id])
    player2 = relationship("Player", foreign_keys=[player2_id])
    court = relationship("Court", backref="Hits")
    review = relationship("Review", backref="Hits")
