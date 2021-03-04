from flask import Blueprint, jsonify, requests
from flask_login import current_user

from ..models.db import db
from ..models.court import Court
from ..models.player import Player
from ..models.hit import Hit

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

