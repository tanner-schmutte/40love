from flask import Blueprint, jsonify
from flask_login import login_required

from app.models import db, Hit

hit_routes = Blueprint('hits', __name__)


@hit_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_hit(id):
    hit = Hit.query.get(id)
    if (hit):
        db.session.delete(hit)
        db.session.commit()
        return jsonify({'success': 'success'})
    else:
        return jsonify({'error': 'error'})
