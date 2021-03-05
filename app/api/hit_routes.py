from flask import Blueprint, jsonify, request

from ..models.db import db
from ..models.hit import Hit

hit_routes = Blueprint('hits', __name__)


@hit_routes.route('/<int:id>', methods=['DELETE'])
def delete_hit(id):
    hit = Hit.query.get(id)
    if (hit):
        db.session.delete(hit)
        db.session.commit()
        return jsonify({'success': 'success'})
    else:
        return jsonify({'error': 'error'})
