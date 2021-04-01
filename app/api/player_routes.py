from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user

from app.models import db, Player, Court, Request, Hit, Review
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


@player_routes.route('/<int:id>/add-all-courts', methods=['POST'])
def add_all_courts(id):
    player = Player.query.get(id)
    courts = Court.query.all()

    for court in courts:
        player.courts.append(court)

    db.session.commit()

    return {'success': True}


@player_routes.route('/<int:id>/courts')
@login_required
def get_player_courts(id):
    player = Player.query.get(id)
    courts = player.courts

    return jsonify([court.to_dict() for court in courts])


@player_routes.route('/<int:id>/requests', methods=['POST'])
@login_required
def make_hit_request(id):
    player = Player.query.get(id)

    form = RequestForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        hit_request = Request(
            date=form.data['date'],
            requester_id=current_user.id,
            requestee_id=id,
            court_id=form.data['court_id'],
            response=None
        )
        db.session.add(hit_request)
        db.session.commit()

        return jsonify(hit_request.to_dict())
    else:
        return ({"errors": "errors"})

    return ({"errors": "errors"})


@player_routes.route('/<int:id>/requests')
@login_required
def get_hit_request(id):
    hit_request = Request.query.filter(
            (Request.requester_id == current_user.id) &
            (Request.requestee_id == id)
        ).first()

    if hit_request:
        return ({'requested': True})
    else:
        return ({'requested': False})


@player_routes.route('/<int:id>/requests/received')
@login_required
def get_requests_received(id):
    hit_requests = Request.query.filter((Request.requestee_id == id) &
                                        (Request.response == None)).all()

    return jsonify([hit_request.to_dict() for hit_request in hit_requests])


@player_routes.route('/<int:id>/requests/sent')
@login_required
def get_requests_sent(id):
    hit_requests = Request.query.filter(Request.requester_id == id).all()

    return jsonify([hit_request.to_dict() for hit_request in hit_requests])


@player_routes.route('/<int:id>/requests/received/<int:hit_id>/accept',
                     methods=['PATCH', 'POST'])
@login_required
def accept_request(id, hit_id):

    hit_request = Request.query.get(hit_id)

    if request.method == 'PATCH':
        hit_request.response = True

    if request.method == 'POST':
        hit = Hit(
            date=hit_request.date,
            player1_id=hit_request.requester_id,
            player2_id=hit_request.requestee_id,
            court_id=hit_request.court_id
        )
        db.session.add(hit)

    db.session.commit()

    return jsonify(hit_request.to_dict())


@player_routes.route('/<int:id>/requests/received/<int:hit_id>/decline',
                     methods=['PATCH'])
@login_required
def decline_request(id, hit_id):
    hit_request = Request.query.get(hit_id)
    hit_request.response = False

    db.session.commit()

    return jsonify(hit_request.to_dict())


@player_routes.route('/<int:id>/hits/requester')
@login_required
def get_hits_as_requester(id):
    hits = Hit.query.filter(Hit.player1_id == id).all()

    return jsonify([hit.to_dict() for hit in hits])


@player_routes.route('/<int:id>/hits/requestee')
@login_required
def get_hits_as_requestee(id):
    hits = Hit.query.filter(Hit.player2_id == id).all()

    return jsonify([hit.to_dict() for hit in hits])


@player_routes.route('/<int:id>/reviews')
@login_required
def get_reviews(id):
    reviews = Review.query.filter(Review.reviewee_id == id).all()

    return jsonify([review.to_dict() for review in reviews])


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
