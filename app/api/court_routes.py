from flask import Blueprint, jsonify, requests
from flask_login import current_user

from app.models import db, Court, players_courts

court_routes = Blueprint('courts', __name__)


@court_routes.route('/')
def get_courts():
    courts = Court.query.all()
    return jsonify([court.to_dict() for court in courts])


@court_routes.route('/<int:id>')
def get_court(id):
    court = Court.query.get(id)
    if court:
        return jsonify(court.to_dict())
    else:
        return ({'error': 'error'})


@court_routes.route('/<int:id>', methods=['POST'])
def add_court(id):
    player = current_user.id
    court = Court.query.get(id)
    player_court = players_courts(
        player_id=player,
        court_id=court
    )
    db.session.add(player_court)
    db.session.commit()
