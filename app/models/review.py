from .db import db
from sqlalchemy.orm import relationship


class Review(db.Model):
    __tablename__ = "Reviews"
    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String(255), nullable=False)
    hit_id = db.Column(db.Integer, db.ForeignKey("Hits.id"))
    reviewer = db.Column(db.Integer, db.ForeignKey("Players.id"))
    reviewee = db.Column(db.Integer, db.ForeignKey("Players.id"))

    player1 = relationship("Player", foreign_keys=[reviewer])
    player2 = relationship("Player", foreign_keys=[reviewee])
    