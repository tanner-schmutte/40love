from flask import Blueprint, jsonify
from flask_login import login_required, current_user

from ..models.db import db
from ..models.player import Player
from ..models.court import Court
from ..models.hit import Hit
from ..forms.create_hit_form import CreateHitForm


player_routes = Blueprint('players', __name__)


@player_routes.route('/')
@login_required
def players():
    players = Player.query.all()
    return {"players": [player.to_dict() for player in players]}


@player_routes.route('/<int:id>')
@login_required
def get_player(id):
    player = Player.query.get(id)
    if player:
        return player.to_dict()
    else:
        return ({"error": "error"})


@player_routes.route('/<int:id>/hits', methods=['POST'])
@login_required
def set_hit(id):
    player = Player.query.get(id)
    form = CreateHitForm()
    form['csrf_token'] = request.cookies['csrf_token']
    if form.validate_on_submit():
        hit = Hit(
            date=form.data['day_n_time'],
            player1_id=current_user,
            player2_id=id,
            court_id=form.data['court'],
        )

@player_routes.route('/<int:id>/reviews', methods=['POST'])
@login_required
def leave_review():
    
