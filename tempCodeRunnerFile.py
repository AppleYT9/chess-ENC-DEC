from flask import Flask, request, jsonify, render_template
from db import db, EncryptedMessage
from chess_encrypt import encrypt_message
from chess_decrypt import decrypt_message

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///chess_encryption.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/encrypt', methods=['POST'])
def encrypt():
    data = request.json
    message = data.get('message', '')
    encrypted_message = encrypt_message(message)
    
    new_entry = EncryptedMessage(original_message=message, encrypted_message=encrypted_message)
    db.session.add(new_entry)
    db.session.commit()
    
    return jsonify({"encrypted": encrypted_message})

@app.route('/decrypt', methods=['POST'])
def decrypt():
    data = request.json
    encrypted_text = data.get('encrypted', '')
    decrypted_message = decrypt_message(encrypted_text)
    return jsonify({"decrypted": decrypted_message})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
