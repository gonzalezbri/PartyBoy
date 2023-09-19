import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

class Config:
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:4717@localhost/partydb'
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Disable SQLAlchemy track modifications

    # Configure JWT settings
    JWT_SECRET_KEY = 'your-secret-key'  # Replace with a strong, unique secret key
    JWT_TOKEN_LOCATION = ['headers', 'cookies']
    JWT_COOKIE_CSRF_PROTECT = False  # Disable CSRF protection for cookies (use it only in trusted environments)
    JWT_ACCESS_TOKEN_EXPIRES = False  # Set to True to enable access token expiration
    JWT_REFRESH_TOKEN_EXPIRES = False  # Set to True to enable refresh token expiration

    # Enable cross-origin resource sharing (CORS) for your frontend's URL
    CORS_ORIGINS = ['http://localhost:3000']  # Replace with your frontend's URL

class DevelopmentConfig(Config):
    DEBUG = True
    ENV = 'development'

class ProductionConfig(Config):
    DEBUG = False
    ENV = 'production'

config_by_name = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
}

# Set the current configuration based on the environment variable
FLASK_ENV = os.environ.get('FLASK_ENV', 'development')
config = config_by_name[FLASK_ENV]
