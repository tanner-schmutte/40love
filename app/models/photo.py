from .db import db


class Photo(db.Model):
    __tablename__ = "photos"

    id = db.Column(db.Integer, primary_key=True)
    player_id = db.Column(db.Integer, db.ForeignKey("players.id"), nullable=False)
    url = db.Column(db.String, nullable=False)

    player = db.relationship("Player")

    def to_dict(self):
        return {
            "id": self.id,
            "player": self.user_id,
            "url": self.url,
        }
