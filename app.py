from flask import Flask
from config import Config
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from decouple import config as decouple_config
from flask_cors import CORS  # Import Flask-CORS
from backend.database import db  # Import db from backend.database

bcrypt = Bcrypt()
jwt = JWTManager()

def create_app(config_name=None):
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Loading the JWT_SECRET_KEY from the environment using Python Decouple
    app.config['JWT_SECRET_KEY'] = decouple_config('JWT_SECRET_KEY')

    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)

    CORS(
    app,
    supports_credentials=True,
    resources={r"/*": {"origins": "http://localhost:3000"}},
    methods=["OPTIONS", "POST", "GET", "PUT", "DELETE"],
    allow_headers=["Content-Type", "Authorization"],
)


    # Import and register blueprints
    from backend.auth import auth_blueprint
    from backend.events import events_bp

    app.register_blueprint(auth_blueprint)
    app.register_blueprint(events_bp, url_prefix='/events')

    return app

if __name__ == '__main__':
    app = create_app('development')
    app.run(debug=True)

