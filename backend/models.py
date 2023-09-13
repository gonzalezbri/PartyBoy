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