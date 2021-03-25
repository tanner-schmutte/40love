from flask import Blueprint, jsonify, request, json
from flask_login import login_required, current_user

from app.models import db, Player, Court, Hit
from app.forms import RequestForm, ReviewForm


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
        return jsonify(player.to_dict())
    else:
        return ({"error": "error"})


@player_routes.route('/<int:id>/courts')
@login_required
def get_player_courts(id):
    player = Player.query.get(id)
    courts = player.courts

    return jsonify([court.to_dict() for court in courts])


@player_routes.route('/<int:id>/requests', methods=['POST'])
@login_required
def make_request(id):
    player = Player.query.get(id)

    form = RequestForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        request = Request(
            date=form.data['date'],
            player1_id=current_user.id,
            player2_id=id,
            court_id=form.data['court_id'],
        )
        db.session.add(request)
        db.session.commit()

        return jsonify(request.to_dict())
    else:
        return ({"errors": "errors"})

    return ({"errors": "errors"})


@player_routes.route('/<int:id>/hits')
@login_required
def get_hit(id):
    request = Request.query.filter(
            (Request.requester_id == current_user.id) &
            (Request.requestee_id == id)
        ).first()

    if request:
        return ({'requested': True})
    else:
        return ({'requested': False})


@player_routes.route('/<int:id>/requests/received')
@login_required
def get_requests_received(id):
    requests = Request.query.filter(Request.requestee_id == id).all()

    return jsonify([request.to_dict() for request in requests])


@player_routes.route('/<int:id>/requests/sent')
@login_required
def get_requests_sent(id):
    requests = Request.query.filter(Request.requester_id == id).all()

    return jsonify([request.to_dict() for request in requests])


@player_routes.route('/<int:id>/reviews', methods=['POST'])
@login_required
def leave_review(id):
    player = Player.query.get(id)

    hit = Hit.query.filter((player1_id == id and player2_id == current_user) or
                           (player2_id == id and player1_id == current_user)).all()

    form = ReviewForm()

    form['csrf_token'] = request.cookies['csrf_token']

    if form.validate_on_submit():
        review = Review(
            rating=form.data['stars'],
            comment=form.data['written'],
            hit_id=hit[-1].id,
            reviewer=current_user.id,
            reviewee=id
        )
        db.session.add(review)
        db.session.commit()
        return jsonify(review.to_dict())
    else:
        return jsonify({'errors':
                        validation_errors_to_error_messages(form.errors)
                        }), 401
