from werkzeug.security import generate_password_hash
from app.models import db, Player


# Adds a demo user, you can add other users here if you want
def seed_users():

    seed = [
        Player(username='Roger Federer', ntrp='7.0', password='password'),
        Player(username='Rafa Nadal', ntrp='7.0', password='password'),
        Player(username='Novak Djokovic', ntrp='7.0', password='password'),
        Player(username='Serena Williams', ntrp='7.0', password='password'),
        Player(username='Dominic Decoco', ntrp='7.0', password='password'),
        Player(username='Ron Bergundy', ntrp='7.0', password='password'),
        Player(username='Madison Keys', ntrp='7.0', password='password'),
        Player(username='Gael Monfils', ntrp='7.0', password='password'),
        Player(username='Andre Agassi', ntrp='7.0', password='password'),
        Player(username='Steffi Graf', ntrp='7.0', password='password'),
        Player(username='Maria Sharapova', ntrp='7.0', password='password'),
        Player(username='Nick Kyrgios', ntrp='7.0', password='password'),
        Player(username='LeBron James', ntrp='7.0', password='password'),
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
