from flask_wtf import FlaskForm
from wtforms import SelectField, DateTimeField
from wtforms.validators import DataRequired, ValidationError
from app.models import Hit, Court


class CreateHitForm(FlaskForm):
    court = SelectField("Court", validators=[DataRequired()], choices=[])
    day_n_time = DateTimeField("Day 'n' Time", validators=[DataRequired()])
