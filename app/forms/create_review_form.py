# on user profile page
from flask_wtf import FlaskForm
from wtforms import SelectField, StringField
from wtforms.validators import DataRequired


class CreateReviewForm(FlaskForm):
    stars = SelectField("Stars", validators=[DataRequired()],
                        choices=[x/2 for x in range(11)])

    written = StringField("Leave any comments.")
