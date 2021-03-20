from flask_wtf import FlaskForm
from wtforms import SelectField, DateTimeField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Hit, Court


class CreateHitForm(FlaskForm):
    day_n_time = DateTimeField("Day 'n' Time", validators=[DataRequired()])

    requester_id = IntegerField("Requester Id", validators=[DataRequired()])

    requestee_id = IntegerField("Requestee Id", validators=[DataRequired()])

    court = SelectField("Court", validators=[DataRequired()],
                        choices=[x for x in range(1, 26)])
