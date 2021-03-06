# on user profile page
from flask_wtf import FlaskForm
from wtforms import SelectField, StringField
from wtforms.validators import DataRequired


class CreateReviewForm(FlaskForm):
    stars = SelectField("Stars", validators=[DataRequired()], choices=[])
    written = StringField("Leave any comments.")
