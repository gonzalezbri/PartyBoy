from flask import Flask
from config import Config
from flask_migrate import Migrate
from flask.cli import FlaskGroup
from backend.models import db  # Import db from your models module

app = Flask(__name__)

# Load configuration from config.py
app.config.from_object(Config)

# Initialize the SQLAlchemy database
db.init_app(app)

# Initialize the Flask-Migrate extension
migrate = Migrate(app, db)

cli = FlaskGroup(app)  # Use FlaskGroup to create and run CLI commands

if __name__ == '__main__':
    cli()






