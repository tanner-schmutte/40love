from .db import db
from .player import Player


class Request(db.Model):
    __tablename__ = "requests"

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable=False)

    requester_id = db.Column(db.Integer, db.ForeignKey("players.id"),
                             nullable=False)

    requestee_id = db.Column(db.Integer, db.ForeignKey("players.id"),
                             nullable=False)

    court_id = db.Column(db.Integer, db.ForeignKey("courts.id"),
                         nullable=False)

    response = db.Column(db.Boolean, nullable=True)

    requester = db.relationship("Player", foreign_keys="Request.requester_id")
    requestee = db.relationship("Player", foreign_keys="Request.requestee_id")
    court = db.relationship("Court")

    def to_dict(self):
        return {
            "id": self.id,
            "date": self.date,
            "requester": self.requester_id,
            "requestee": self.requestee_id,
            "court": self.court_id,
            "response": self.response
        }
