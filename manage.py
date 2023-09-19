from flask_migrate import Migrate, MigrateCommand
from flask.cli import FlaskGroup
from app import create_app, db

app = create_app('development')
cli = FlaskGroup(create_app=create_app)

migrate = Migrate(app, db)
cli.add_command('db', MigrateCommand)

if __name__ == '__main__':
    cli()

