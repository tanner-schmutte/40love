from flask import Blueprint, request
from flask_login import login_required

from app.config import Config
from app.aws_s3 import (upload_file_to_s3, allowed_file, get_unique_filename)
from app.models import db, Photo

photo_routes = Blueprint('photos', __name__)


@photo_routes.route('/', methods=["POST"])
@login_required
def upload_image():
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["file"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request
    new_image = Photo(user=current_user, url=url)
    db.session.add(new_image)
    db.session.commit()
    return {"url": url}
