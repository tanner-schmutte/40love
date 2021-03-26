from flask.cli import AppGroup
from .users import seed_users, undo_users
from .courts import seed_courts, undo_courts
from .requests import seed_requests, undo_requests

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_courts()
    seed_requests()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_courts()
    undo_requests()
    # Add other undo functions here
