from .db import db
from .hit import Hit
from .players_courts import players_courts


class Court(db.Model):
    __tablename__ = "Courts"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    latitude = db.Column(db.Numeric(10, 7), nullable=False)
    longitude = db.Column(db.Numeric(10, 7), nullable=False)

    players = relationship("Player", secondary=players_courts)
