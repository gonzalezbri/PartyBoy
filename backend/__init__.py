from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config

# Create the Flask app instance
backend_app = Flask(__name__)  # Rename the app to backend_app

# Load configuration from config.py
backend_app.config.from_object(Config)

# Initialize the SQLAlchemy database
db = SQLAlchemy(backend_app)  # Initialize SQLAlchemy with backend_app

# Import and create your database models (import after db initialization)
from backend.models import User

# Import your Blueprint(s)
from backend.users import user_blueprint  # Import the user Blueprint

# Register the user Blueprint
backend_app.register_blueprint(user_blueprint, url_prefix='/api/user')  # Adjust the URL prefix as needed
