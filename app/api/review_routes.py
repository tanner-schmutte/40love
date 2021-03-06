from flask import Blueprint, jsonify

from ..models.db import db
from ..models.hit import Hit

review_routes = Blueprint('reviews', __name__)


@review_routes.route('/<int:id>', methods=['DELETE'])
def delete_review(id):
    review = Review.query.get(id)
    if (review):
        db.session.delete(review)
        db.session.commit()
        return jsonify({'success': 'success'})
    else:
        return jsonify({'error': 'error'})
