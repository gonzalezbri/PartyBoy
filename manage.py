from flask_migrate import Migrate
from app import create_app, db
from flask.cli import FlaskGroup

app = create_app('development')
cli = FlaskGroup(create_app=lambda: app)

migrate = Migrate(app, db)

if __name__ == '__main__':
    cli()




