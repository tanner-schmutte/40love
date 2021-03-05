from flask_wtf import FlaskForm
from wtforms import SelectField, DateField
from wtforms.validators import DataRequired, ValidationError
from app.models import Hit, Court


class CreateHitForm(FlaskForm):
    court = SelectField("Court", validators=[DataRequired()], choices=[])
    day_n_time = DateField("Day 'n' Time", validators=[DataRequired()])
