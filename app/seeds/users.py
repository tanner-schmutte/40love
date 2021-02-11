from werkzeug.security import generate_password_hash
from app.models import db, Player

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = Player(username='Roger Federer', password='password')
    
    db.session.add(demo)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
