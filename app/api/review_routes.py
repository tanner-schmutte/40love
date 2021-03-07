from flask import Blueprint, jsonify
from flask_login import login_required

from app.models import db, Review

review_routes = Blueprint('reviews', __name__)


@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    review = Review.query.get(id)
    if (review):
        db.session.delete(review)
        db.session.commit()
        return jsonify({'success': 'success'})
    else:
        return jsonify({'error': 'error'})
