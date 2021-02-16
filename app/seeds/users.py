from werkzeug.security import generate_password_hash
from app.models import db, Player


# Adds a demo user, you can add other users here if you want
def seed_users():

    seed = [
        Player(username='Roger Federer', password='password'),
        Player(username='Rafa Nadal', password='password'),
        Player(username='Novak Djokovic', password='password'),
        Player(username='Serena Williams', password='password'),
        Player(username='Dominic Decoco', password='password'),
        Player(username='Ron Bergundy', password='password'),
        Player(username='Madison Keys', password='password'),
        Player(username='Gael Monfils', password='password'),
        Player(username='Andre Agassi', password='password'),
        Player(username='Steffi Graf', password='password'),
        Player(username='Maria Sharapova', password='password'),
        Player(username='Nick Kyrgios', password='password'),
        Player(username='LeBron James', password='password'),
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
