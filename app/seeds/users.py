from werkzeug.security import generate_password_hash
from app.models import db, Player


# Adds a demo user, you can add other users here if you want
def seed_users():

    seed = [
        Player(username='demo_user', ntrp='4.5', password='password'),
        Player(username='Roger_Federer', ntrp='7.0', password='password'),
        Player(username='Rafa_Nadal', ntrp='7.0', password='password'),
        Player(username='Novak_Djokovic', ntrp='7.0', password='password'),
        Player(username='Serena_Williams', ntrp='7.0', password='password'),
        Player(username='Dominic_Decoco', ntrp='4.0', password='password'),
        Player(username='Ron_Bergundy', ntrp='1.5', password='password'),
        Player(username='Madison_Keys', ntrp='7.0', password='password'),
        Player(username='Gael_Monfils', ntrp='7.0', password='password'),
        Player(username='Andre_Agassi', ntrp='7.0', password='password'),
        Player(username='Steffi_Graf', ntrp='7.0', password='password'),
        Player(username='Maria_Sharapova', ntrp='7.0', password='password'),
        Player(username='Nick_Kyrgios', ntrp='7.0', password='password'),
        Player(username='LeBron_James', ntrp='3.5', password='password'),
    ]

    db.session.add_all(seed)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
