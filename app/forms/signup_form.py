from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.validators import DataRequired, ValidationError
from app.models import Player


def user_exists(form, field):
    username = field.data
    user = Player.query.filter(Player.username == username).first()
    if user:
        raise ValidationError("User is already registered.")


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(), user_exists])
    ntrp = SelectField('ntrp', validators=[DataRequired()], choices=[str(n/2) for n in range(1,16)])
    password = StringField('password', validators=[DataRequired()])
