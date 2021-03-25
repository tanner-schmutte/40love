from .db import db
from .player_court import Players_Courts


class Court(db.Model):
    __tablename__ = "courts"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    latitude = db.Column(db.Numeric(10, 7), nullable=False)
    longitude = db.Column(db.Numeric(10, 7), nullable=False)

    players = db.relationship("Player", secondary=Players_Courts)
    request = db.relationship("Request")
    hit = db.relationship("Hit")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "address": self.address,
            "latitude": str(self.latitude),
            "longitude": str(self.longitude)
        }
