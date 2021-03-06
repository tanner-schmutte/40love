from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class Player(db.Model, UserMixin):
    __tablename__ = 'Players'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    ntrp = db.Column(db.Numeric(2, 1), nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)

    courts = db.relationship("Court")
    hits = db.relationship("Hit")
    reviews = db.relationship("Reviews")

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
