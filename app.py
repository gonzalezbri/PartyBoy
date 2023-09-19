# app.py

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from config import config

app = Flask(__name__)
app.config.from_object(config)

# Configure PostgreSQL database URI before initializing extensions
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:4717@localhost/partydb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# Import and register blueprints
from backend.auth import auth_blueprint
from backend.events import events_bp  # Correct the blueprint name

app.register_blueprint(auth_blueprint)
app.register_blueprint(events_bp, url_prefix='/events')

if __name__ == '__main__':
    app.run(debug=True)
