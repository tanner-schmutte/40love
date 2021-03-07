from .db import db


class Review(db.Model):
    __tablename__ = "Reviews"
    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String(255), nullable=False)

    hit_id = db.Column(db.Integer, db.ForeignKey("hits.id"), nullable=False)

    reviewer = db.Column(db.Integer, db.ForeignKey("players.id"),
                         nullable=False)

    reviewee = db.Column(db.Integer, db.ForeignKey("players.id"),
                         nullable=False)

    hit = db.relationship("Hit")
    player = db.relationship("Player")

    def to_dict(self):
        return {
            "id": self.id,
            "rating": self.rating,
            "comment": self.comment,
            "hit": self.hit_id,
            "reviewer": self.reviewer,
            "reviewee": self.reviewee
        }
