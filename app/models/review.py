from .db import db


class Review(db.Model):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)

    rating = db.Column(db.Integer, nullable=False)

    comment = db.Column(db.String(255), nullable=True)

    hit_id = db.Column(db.Integer, db.ForeignKey("hits.id"), nullable=False)

    reviewer_id = db.Column(db.Integer, db.ForeignKey("players.id"),
                            nullable=False)

    reviewee_id = db.Column(db.Integer, db.ForeignKey("players.id"),
                            nullable=False)

    hit = db.relationship("Hit")
    reviewer = db.relationship("Player", foreign_keys="Review.reviewer_id")
    reviewer = db.relationship("Player", foreign_keys="Review.reviewee_id")

    def to_dict(self):
        return {
            "id": self.id,
            "rating": self.rating,
            "comment": self.comment,
            "hit": self.hit_id,
            "reviewer": self.reviewer_id,
            "reviewee": self.reviewee_id
        }
