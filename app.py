from flask import Flask, send_from_directory
from config import Config
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from decouple import config as decouple_config
from flask_cors import CORS
from backend.database import db
from flask_login import LoginManager
import os

bcrypt = Bcrypt()
jwt = JWTManager()
login_manager = LoginManager()

@login_manager.user_loader
def load_user(user_id):
    from backend.models import User  # Import your User model
    return User.query.get(int(user_id))

app = Flask(__name__)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_frontend(path):
    if path != "" and os.path.exists("frontend/build/" + path):
        return send_from_directory("frontend/build", path)
    else:
        return send_from_directory("frontend/build", 'index.html')

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
        supports_credentials=True,  # Allow cookies and credentials to be sent
        resources={
            r"/auth/*": {"origins": "http://localhost:3000"},  # Replace with your frontend URL
        },
        methods=["OPTIONS", "POST", "GET", "PUT", "DELETE"],  
        allow_headers=["Content-Type", "Authorization"],  
    )

    login_manager.login_view = "auth.login" 
    login_manager.init_app(app)

    # Import and register blueprints
    from backend.auth import auth_blueprint
    from backend.events import events_bp

    app.register_blueprint(auth_blueprint)
    app.register_blueprint(events_bp, url_prefix='/events')

    return app

if __name__ == '__main__':
    app = create_app('development')
    app.run(debug=True)


