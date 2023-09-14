from flask import Blueprint, request, jsonify
from backend import db
from backend.models import Feedback

# Created a Blueprint for feedback-related routes
feedback_blueprint = Blueprint('feedback', __name__)

# Define routes for feedback-related operations
@feedback_blueprint.route('/feedback', methods=['POST'])
def create_feedback():
    data = request.get_json()

    new_feedback = Feedback(
        user_id=data['user_id'],
        rating=data['rating'],
        comment=data['comment']
    )

    db.session.add(new_feedback)
    db.session.commit()

    return jsonify({'message': 'Feedback created successfully'}), 201

@feedback_blueprint.route('/feedback/<int:feedback_id>', methods=['DELETE'])
def delete_feedback(feedback_id):
    feedback = Feedback.query.get_or_404(feedback_id)

    db.session.delete(feedback)
    db.session.commit()

    return jsonify({'message': 'Feedback deleted successfully'})


# Get a list of all feedback
@feedback_blueprint.route('/feedback', methods=['GET'])
def get_all_feedback():
    feedback_list = Feedback.query.all()
    
    feedback_data = []
    for feedback in feedback_list:
        feedback_data.append({
            'id': feedback.id,
            'user_id': feedback.user_id,
            'rating': feedback.rating,
            'comment': feedback.comment
        })

    return jsonify(feedback_data)


