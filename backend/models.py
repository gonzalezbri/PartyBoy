from backend import db  # Imported the SQLAlchemy instance

#This User model represents a basic table with columns for id, username, email, and password.

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)  # Store hashed passwords here

    def __repr__(self):
        return f'<User {self.username}>'
    

#This Event model is a basic table with columns for id,name,desc,date,location,and organizer id.

from backend import db
from datetime import datetime  # Import datetime for event date/time

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255))
    date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    location = db.Column(db.String(255))
    organizer_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    organizer = db.relationship('User', backref='events')

    def __repr__(self):
        return f'<Event {self.name}>'
    

#This Guest model is a basic table with columns for id,name,email,event id, and event relationship.
from backend import db

class Guest(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey('event.id'), nullable=False)

    event = db.relationship('Event', backref='guests')

    def __repr__(self):
        return f'<Guest {self.name}>'
    

#This feedbakc rating model is for users to put ratings on events
from backend import db  # Import the SQLAlchemy instance
from sqlalchemy.orm import relationship

class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    User_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String(255))
    
    # Define a relationship to the user leaving the feedback
    user = relationship("User", back_populates="feedback_given")
    
    def __repr__(self):
        return f'<Feedback (ID: {self.id}, User: {self.user_id}, Rating: {self.rating})>'