from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class EncryptedMessage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    original_message = db.Column(db.Text, nullable=False)
    encrypted_message = db.Column(db.Text, nullable=False)
