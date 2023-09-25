from flask import Blueprint, request, jsonify, redirect, url_for
from flask_bcrypt import bcrypt
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from datetime import timedelta
from backend.models import User
from flask_cors import CORS
from backend.database import db
from flask_login import login_user, logout_user, login_required 


auth_blueprint = Blueprint('auth', __name__)
CORS(auth_blueprint, resources={r"/auth/*": {"origins": "http://localhost:3000"}})

@auth_blueprint.route('/signup', methods=['POST', 'OPTIONS'])
def signup():
    if request.method == 'OPTIONS':
        # Handle preflight request
        response = jsonify({'message': 'Preflight request accepted'})
        response.headers["Access-Control-Allow-Origin"] = "http://localhost:3000"
        response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
        response.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
        return response, 200

    try:
        data = request.get_json()

        required_fields = ['username', 'email', 'password']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing {field} field'}), 400

        # Check if the user with the same username or email already exists
        existing_user = User.query.filter_by(username=data['username']).first()
        if existing_user:
            return jsonify({'error': 'Username already exists'}), 400

        existing_email = User.query.filter_by(email=data['email']).first()
        if existing_email:
            return jsonify({'error': 'Email already exists'}), 400

        # Hash the user's password
        hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')

        # Create a new user with the hashed password
        new_user = User(
            username=data['username'],
            email=data['email'],
            password=hashed_password
        )

        # Add the user to the database
        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'User created successfully'}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@auth_blueprint.route('/signin', methods=['POST'])
def signin():
    try:
        data = request.get_json()
        user = User.query.filter_by(email=data['email']).first()

        if not user or not bcrypt.check_password_hash(user.password, data['password']):
            return jsonify({'error': 'Invalid email or password'}), 401

        # Create an access token (JWT) for the authenticated user
        access_token = create_access_token(identity=user.id, expires_delta=timedelta(days=1))

        return jsonify({'access_token': access_token}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@auth_blueprint.route('/user', methods=['GET'])
@jwt_required
def get_user():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if not user:
        return jsonify({'error': 'User not found'}), 404

    return jsonify({
        'id': user.id,
        'username': user.username,
        'email': user.email,
    }), 200


@auth_blueprint.route('/signout', methods=['POST'])
@login_required  # Protect the route with login_required
def signout():
    logout_user()  # Use Flask-Login's logout_user function
    return jsonify({'message': 'Logged out successfully'}), 200