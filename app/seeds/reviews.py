from app.models import db, Review


def seed_reviews():

    seed = [
        Review(rating=3, comment="talented player", hit_id=1, reviewer_id=1, reviewee_id=13),
        Review(rating=1, comment="very childish.... showed up late and was rude the whole time. this player needs to learn the etiquette that is expected in this type of gentleman's sport", hit_id=2, reviewer_id=7, reviewee_id=1),
        Review(rating=3, comment="meh", hit_id=1, reviewer_id=18, reviewee_id=1),
        Review(rating=5, comment="never say never with this player", hit_id=11, reviewer_id=17, reviewee_id=1),
        Review(rating=4, comment="Amazing footwork, gosh", hit_id=11, reviewer_id=20, reviewee_id=1),
        Review(rating=5, comment="very fun to hit with", hit_id=3, reviewer_id=6, reviewee_id=1),
        Review(rating=5, comment="G.O.A.T.", hit_id=4, reviewer_id=2, reviewee_id=3),
        Review(rating=5, comment="G.O.A.T.", hit_id=4, reviewer_id=3, reviewee_id=2),
        Review(rating=5, comment="G.O.A.T.", hit_id=5, reviewer_id=15, reviewee_id=5),
        Review(rating=5, comment="I love my big sister... but I'm the G.O.A.T.", hit_id=5, reviewer_id=5, reviewee_id=15),
        Review(rating=5, comment="Love you, hunnyboo", hit_id=6, reviewer_id=10, reviewee_id=11),
        Review(rating=5, comment="Love you, hunnyboo", hit_id=6, reviewer_id=11, reviewee_id=10),
        Review(rating=2, comment="He's an a** at times.", hit_id=7, reviewer_id=4, reviewee_id=13),
        Review(rating=2, comment="He's a joke.", hit_id=7, reviewer_id=13, reviewee_id=4),
        Review(rating=4, comment="I lost but it was a good hit I guess, gees", hit_id=8, reviewer_id=20, reviewee_id=7),
        Review(rating=4, comment="There's a diamond in the rough with that kid. Hidden gem. He was drinking milk. It slowed him down.", hit_id=8, reviewer_id=7, reviewee_id=20),
        Review(rating=4, comment="Tough player..", hit_id=9, reviewer_id=12, reviewee_id=8),
        Review(rating=4, comment="Tough player..", hit_id=9, reviewer_id=8, reviewee_id=12),
        Review(rating=2, comment="This player needs to grow up", hit_id=10, reviewer_id=19, reviewee_id=17),
        Review(rating=3, comment="Some of her shots were unreal.", hit_id=10, reviewer_id=17, reviewee_id=19),
        Review(rating=2, comment="His swing needs work.", hit_id=11, reviewer_id=18, reviewee_id=16),
        Review(rating=1, comment="He's a cheater.", hit_id=11, reviewer_id=16, reviewee_id=18),
        Review(rating=1, comment="Definitely a cheater.", hit_id=11, reviewer_id=7, reviewee_id=18),
        Review(rating=1, comment="Hooked me on several calls.", hit_id=11, reviewer_id=4, reviewee_id=18),
        Review(rating=1, comment="This player should be suspended for the horrendous line calls.", hit_id=11, reviewer_id=12, reviewee_id=18),
        Review(rating=1, comment="This player should be suspended for the horrendous line calls.", hit_id=11, reviewer_id=7, reviewee_id=6),
        Review(rating=3, comment="He's got a lot of potential", hit_id=11, reviewer_id=7, reviewee_id=14),

    ]

    db.session.add_all(seed)
    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews CASCADE;')
    db.session.commit()