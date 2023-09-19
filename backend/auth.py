from flask import Blueprint, request, jsonify
from flask_bcrypt import bcrypt
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from datetime import timedelta
from backend.models import User

auth_blueprint = Blueprint('auth', __name__)

# Set the JWT secret key (replace 'your-secret-key' with a strong secret)
app.config['JWT_SECRET_KEY'] = 'your-secret-key'

@auth_blueprint.route('/signup', methods=['POST'])
def signup():
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
        user = User.query.filter_by(username=data['username']).first()

        if user and bcrypt.check_password_hash(user.password, data['password']):
            # Passwords match, generate JWT token
            access_token = create_access_token(identity=user.id, expires_delta=timedelta(hours=1))

            return jsonify({'access_token': access_token}), 200
        else:
            return jsonify({'error': 'Invalid username or password'}), 401

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Example protected route using JWT
@auth_blueprint.route('/protected', methods=['GET'])
@jwt_required()
def protected_route():
    current_user_id = get_jwt_identity()
    return jsonify({'message': 'This is a protected route', 'user_id': current_user_id}), 200
