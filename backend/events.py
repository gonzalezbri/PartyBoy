from flask import Blueprint, request, jsonify
from backend.models import Event, User  
from backend import db

# Created a Blueprint for event-related routes
event_blueprint = Blueprint('event', __name__)


@event_blueprint.route('/events', methods=['GET'])
def get_events():
    events = Event.query.all()
    event_list = []
    for event in events:
        event_data = {
            'id': event.id,
            'name': event.name,
            'description': event.description,
            'date': event.date.strftime('%Y-%m-%d %H:%M:%S'),
            'location': event.location,
            'organizer_id': event.organizer_id
        }
        event_list.append(event_data)
    return jsonify(event_list)

@event_blueprint.route('/events/<int:event_id>', methods=['GET'])
def get_event(event_id):
    event = Event.query.get_or_404(event_id)
    event_data = {
        'id': event.id,
        'name': event.name,
        'description': event.description,
        'date': event.date.strftime('%Y-%m-%d %H:%M:%S'),
        'location': event.location,
        'organizer_id': event.organizer_id
    }
    return jsonify(event_data)

@event_blueprint.route('/events', methods=['POST'])
def create_event():
    data = request.get_json()
    new_event = Event(
        name=data['name'],
        description=data['description'],
        date=data['date'],
        location=data['location'],
        organizer_id=data['organizer_id']
    )
    db.session.add(new_event)
    db.session.commit()
    return jsonify({'message': 'Event created successfully'}), 201



