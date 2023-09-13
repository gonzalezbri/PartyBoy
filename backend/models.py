from backend import db  # Imported the SQLAlchemy instance

#This User model represents a basic table with columns for id, username, email, and password.

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)  # Store hashed passwords here

    def __repr__(self):
        return f'<User {self.username}>'