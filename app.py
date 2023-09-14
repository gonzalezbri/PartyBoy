from flask import Flask
from config import Config
from flask_migrate import Migrate
from flask.cli import FlaskGroup
from backend.models import db  # Import db from your models module
from backend.events import event_blueprint  # Import the event Blueprint
from backend.users import user_blueprint  # Import the user Blueprint
from backend.guests import guest_blueprint  # Import the guest Blueprint
from backend.feedback import feedback_blueprint

app = Flask(__name__)

# Load configuration from config.py
app.config.from_object(Config)

# Initialize the SQLAlchemy database
db.init_app(app)

# Initialize the Flask-Migrate extension
migrate = Migrate(app, db)

# Register your Blueprint
app.register_blueprint(event_blueprint, url_prefix='/api/event')
app.register_blueprint(user_blueprint, url_prefix='/api/user')
app.register_blueprint(guest_blueprint, url_prefix='/api/guest')
app.register_blueprint(feedback_blueprint, url_prefix='/api/feedback')




cli = FlaskGroup(app)  # Use FlaskGroup to create and run CLI commands

if __name__ == '__main__':
    cli()






