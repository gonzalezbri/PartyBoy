from flask import Blueprint, request, jsonify
from backend import db
from backend.models import User

# Create a Blueprint for user-related routes
user_blueprint = Blueprint('user', __name__)

# Define routes for user-related operations
@user_blueprint.route('/users', methods=['POST'])
def create_user():
    try:
        data = request.get_json()

        # Ensure that all required fields are provided in the request JSON
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

        # Create a new user
        new_user = User(
            username=data['username'],
            email=data['email'],
            password=data['password']
        )

        # Add the user to the database
        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'User created successfully'}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@user_blueprint.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    try:
        user = User.query.get_or_404(user_id)

        user_data = {
            'id': user.id,
            'username': user.username,
            'email': user.email
        }

        return jsonify(user_data), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500




