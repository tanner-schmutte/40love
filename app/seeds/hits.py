from app.models import db, Hit


def seed_hits():

    seed = [
        Hit(date='2021-04-16 13:30', player1_id=13, player2_id=1, court_id=6),
        Hit(date='2021-04-07 09:30', player1_id=7, player2_id=1, court_id=10),
        Hit(date='2021-04-11 15:00', player1_id=1, player2_id=6, court_id=18),
        Hit(date='2021-05-03 12:00', player1_id=2, player2_id=3, court_id=1),
        Hit(date='2021-05-03 12:00', player1_id=5, player2_id=15, court_id=3),
        Hit(date='2021-05-03 12:00', player1_id=10, player2_id=11, court_id=20),
        Hit(date='2021-05-03 12:00', player1_id=4, player2_id=13, court_id=3),
        Hit(date='2021-05-03 12:00', player1_id=7, player2_id=20, court_id=3),
        Hit(date='2021-05-03 12:00', player1_id=12, player2_id=8, court_id=3),
        Hit(date='2021-05-03 12:00', player1_id=19, player2_id=17, court_id=3),
        Hit(date='2021-05-03 12:00', player1_id=16, player2_id=18, court_id=3),


    ]

    db.session.add_all(seed)
    db.session.commit()


def undo_hits():
    db.session.execute('TRUNCATE hits CASCADE;')
    db.session.commit()