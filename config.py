import os

class Config:
    # SQLAlchemy database URI for PostgreSQL
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:4717@localhost/parties'
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Disable tracking modifications

    # Other configuration options (if needed)
    SECRET_KEY = 'possible_secret_key_here'


# Additional configuration settings will go here

    # Flask-Mail configuration for sending email (if needed)
    # MAIL_SERVER = 'smtp.example.com'
    # MAIL_PORT = 587
    # MAIL_USE_TLS = True
    # MAIL_USERNAME = 'your_username'
    # MAIL_PASSWORD = 'your_password'