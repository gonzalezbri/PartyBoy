from flask.cli import FlaskGroup
from app import app, db
from flask_migrate import Migrate  # Import Flask-Migrate commands

cli = FlaskGroup(app)

# Initialize Flask-Migrate
migrate = Migrate(app, db)

# Add the migration commands to the CLI
cli.add_command('db')

if __name__ == "__main__":
    cli()




