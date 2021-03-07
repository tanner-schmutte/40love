from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .players_courts import players_courts


class Player(db.Model, UserMixin):
    __tablename__ = 'players'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    ntrp = db.Column(db.Numeric(2, 1), nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)

    courts = db.relationship("Court", secondary=players_courts)
    hits = db.relationship("Hit")
    reviews = db.relationship("Review")

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
