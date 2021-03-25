from flask import Blueprint, jsonify
from flask_login import login_required

from app.models import db, Request

request_routes = Blueprint('requests', __name__)


@hit_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_request(id):
    request = Request.query.get(id)
    if (request):
        db.session.delete(request)
        db.session.commit()
        return jsonify({'success': 'success'})
    else:
        return jsonify({'error': 'error'})
