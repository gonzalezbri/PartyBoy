from flask import Blueprint
from flask_sqlalchemy import SQLAlchemy

auth = Blueprint('auth', __name__)
db = SQLAlchemy()
