from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Player

player_routes = Blueprint('players', __name__)


@player_routes.route('/')
@login_required
def players():
    players = Player.query.all()
    return {"players": [player.to_dict() for player in players]}


@player_routes.route('/<int:id>')
@login_required
def player(id):
    player = Player.query.get(id)
    return player.to_dict()
