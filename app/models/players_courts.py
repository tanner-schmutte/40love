from .db import db

players_courts = db.Table(
    "players_courts",
    db.Column(
        "player_id",
        db.Integer,
        db.ForeignKey("players.id"),
        primary_key=True
    ),
    db.Column(
        "court_id",
        db.Integer,
        db.ForeignKey("courts.id"),
        primary_key=True
    )
)
