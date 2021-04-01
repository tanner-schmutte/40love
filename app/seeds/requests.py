from app.models import db, Request


def seed_requests():

    seed = [
        Request(date='2021-04-05 12:00', requester_id=1, requestee_id=2, court_id=3),
        Request(date='2021-04-07 09:30', requester_id=1, requestee_id=20, court_id=1),
        Request(date='2021-04-11 15:00', requester_id=1, requestee_id=5, court_id=12),
        Request(date='2021-04-15 11:00', requester_id=1, requestee_id=18, court_id=19),

        Request(date='2021-04-09 10:00', requester_id=17, requestee_id=1, court_id=3),
        Request(date='2021-04-10 09:30', requester_id=11, requestee_id=1, court_id=2),
        Request(date='2021-04-14 15:30', requester_id=7, requestee_id=1, court_id=1),
    ]

    db.session.add_all(seed)
    db.session.commit()


def undo_requests():
    db.session.execute('TRUNCATE requests CASCADE;')
    db.session.commit()
