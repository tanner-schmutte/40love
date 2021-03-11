from flask import Blueprint, jsonify
from flask_login import current_user, login_required

from app.models import db, Court

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
@login_required
def add_court(id):
    court = Court.query.get(id)
    court.players.append(current_user)
    db.session.commit()

    return ({'success': 'success'})


@court_routes.route('/<int:id>/players')
def check_court(id):
    court = Court.query.get(id)

    if current_user in court.players:
        return ({'added': True})
    else:
        return ({'added': False})


@court_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def remove_court(id):
    court = Court.query.get(id)
    court.players.remove(current_user)
    db.session.commit()

    return ({'success': 'success'})
