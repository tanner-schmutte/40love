from flask import Blueprint, jsonify, request, json
from flask_login import login_required, current_user

from app.models import db, Player, Court, Hit
from app.forms import CreateHitForm, CreateReviewForm


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


@player_routes.route('/<int:id>/hits', methods=['POST'])
@login_required
def set_hit(id):
    player = Player.query.get(id)

    form = CreateHitForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    print('route hit')
    print('----------------------------------------------------------------')

    formValue = json.loads(request.data)

    print('----------------------------------------------------------------')
    print(formValue)

    date = formValue['date'],
    player1_id = formValue['requesterId'],
    player2_id = formValue['requesteeId'],
    court_id = formValue['courtId'],

    print(date[0])
    print(player1_id[0])
    print(player2_id[0])
    print(court_id)

    # if form.validate_on_submit():
    hit = Hit(
        date=date[0],
        player1_id=player1_id[0],
        player2_id=int(player2_id[0]),
        court_id=int(court_id[0]),
    )

    print('----------------------------------------------------------------')
    print('hit', hit)
    print('----------------------------------------------------------------')

    db.session.add(hit)
    db.session.commit()

    return jsonify(hit.to_dict())
# else:
#     return ({"errors": "errors"})


@player_routes.route('/<int:id>/reviews', methods=['POST'])
@login_required
def leave_review(id):
    player = Player.query.get(id)
    hit = Hit.query.filter((player1_id == id and player2_id == current_user) or
                           (player2_id == id and player1_id == current_user)).all()
    form = CreateReviewForm()
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


@player_routes.route('/<int:id>/courts')
@login_required
def get_player_courts(id):
    player = Player.query.get(id)
    courts = player.courts

    return jsonify([court.to_dict() for court in courts])
