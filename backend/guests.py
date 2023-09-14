from flask import Blueprint, request, jsonify
from backend import db
from backend.models import Guest

# Created a Blueprint for guest-related routes
guest_blueprint = Blueprint('guest', __name__)

# Define routes for guest-related operations
@guest_blueprint.route('/guests', methods=['POST'])
def create_guest():
    data = request.get_json()

    new_guest = Guest(
        name=data['name'],
        email=data['email'],
        event_id=data['event_id']
    )

    db.session.add(new_guest)
    db.session.commit()

    return jsonify({'message': 'Guest created successfully'}), 201

@guest_blueprint.route('/guests/<int:guest_id>', methods=['GET'])
def get_guest(guest_id):
    guest = Guest.query.get_or_404(guest_id)
    
    guest_data = {
        'id': guest.id,
        'name': guest.name,
        'email': guest.email,
        'event_id': guest.event_id
    }

    return jsonify(guest_data)


# update route:
@guest_blueprint.route('/guests/<int:guest_id>', methods=['PUT'])
def update_guest(guest_id):
    guest = Guest.query.get_or_404(guest_id)
    data = request.get_json()

    guest.name = data['name']
    guest.email = data['email']
    guest.event_id = data['event_id']

    db.session.commit()

    return jsonify({'message': 'Guest updated successfully'})

# delete route:
@guest_blueprint.route('/guests/<int:guest_id>', methods=['DELETE'])
def delete_guest(guest_id):
    guest = Guest.query.get_or_404(guest_id)

    db.session.delete(guest)
    db.session.commit()

    return jsonify({'message': 'Guest deleted successfully'})

