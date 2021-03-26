from flask_wtf import FlaskForm
from wtforms import SelectField, DateTimeField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Hit, Court


class RequestForm(FlaskForm):
    date = DateTimeField("Date", validators=[DataRequired()])

    court_id = SelectField("Court", validators=[DataRequired()],
                           choices=[x for x in range(1, 26)])
