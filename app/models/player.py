from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .player_court import Players_Courts


class Player(db.Model, UserMixin):
    __tablename__ = 'players'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    ntrp = db.Column(db.Numeric(2, 1), nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)

    courts = db.relationship("Court", secondary=Players_Courts)

    requester = db.relationship("Request", foreign_keys="Request.requester_id")
    requestee = db.relationship("Request", foreign_keys="Request.requestee_id")

    player1 = db.relationship("Hit", foreign_keys="Hit.player1_id")
    player2 = db.relationship("Hit", foreign_keys="Hit.player2_id")

    reviewer = db.relationship("Review", foreign_keys="Review.reviewer_id")
    reviewee = db.relationship("Review", foreign_keys="Review.reviewee_id")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "ntrp": str(self.ntrp),
        }
