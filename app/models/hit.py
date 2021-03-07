from .db import db
from .player import Player


class Hit(db.Model):
    __tablename__ = "hits"

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable=False)

    player1_id = db.Column(db.Integer, db.ForeignKey("players.id"),
                           nullable=False)

    player2_id = db.Column(db.Integer, db.ForeignKey("players.id"),
                           nullable=False)

    court_id = db.Column(db.Integer, db.ForeignKey("courts.id"),
                         nullable=False)

    player = db.relationship("Player")
    court = db.relationship("Court")

    def to_dict(self):
        return {
            "id": self.id,
            "date": self.date,
            "player1": self.player1_id,
            "player2": self.player2_id,
            "court": self.court_id,
        }
