from .db import db


hits_courts = db.Table(
    "hits_courts",
    db.Column(
        "hit_id",
        db.Integer,
        db.ForeignKey("hits.id"),
        primary_key=True
    )
    db.Column(
        "court_id",
        db.Integer,
        db.ForeignKey("courts.id"),
        primary_key=True
    )
)
