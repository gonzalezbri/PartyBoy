from backend.auth import User  # Move this import to the top of events.py
from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from backend.models import Event
from backend.database import db  # Import db from database.py

events_bp = Blueprint("events", __name__, url_prefix="/api/events")

# Create a new event
@events_bp.route("/", methods=["POST"])
@jwt_required()  # decorator to protect the route with JWT authentication
def create_event():
    try:
        current_user_id = get_jwt_identity()  # Get the user's ID from the JWT token
        user = User.query.get(current_user_id)  # Retrieve the user object
        if not user:
            return jsonify({"message": "User not found"}), 404

        # Extract data from the request
        data = request.get_json()
        event_name = data.get("event_name")
        description = data.get("description")
        event_date = data.get("event_date")
        flyer_url = data.get("flyer_url")

        # Create a new event
        new_event = Event(
            event_name=event_name,
            description=description,
            event_date=event_date,
            flyer_url=flyer_url,
            user=user,
        )

        db.session.add(new_event)
        db.session.commit()

        return jsonify({"message": "Event created successfully"}), 201

    except Exception as e:
        return jsonify({"message": "Error creating event", "error": str(e)}), 500

# route for fetching all events
@events_bp.route("/", methods=["GET"])
def get_events():
    try:
        events = Event.query.all()
        event_list = [{"id": event.id, "event_name": event.event_name} for event in events]
        return jsonify(event_list), 200

    except Exception as e:
        return jsonify({"message": "Error fetching events", "error": str(e)}), 500
