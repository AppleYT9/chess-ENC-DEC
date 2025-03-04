
# ♟️ Chess Encryption Game

🔐 **Turn text into chess moves and reveal it by clicking the correct squares!**

![Chessboard]('')

## 📌 Features
- ✅ **Message Encryption** – Converts text into a sequence of chess moves.
- ✅ **Interactive Chessboard** – Click squares to reveal the hidden message step by step.
- ✅ **Decryption Mode** – Paste encrypted moves & auto-reveal the message.
- ✅ **Modern UI** – Dark mode, animated buttons, and glowing effects!

---

## 🚀 How to Run the Project
### 1️⃣ Install Dependencies
```bash
pip install flask flask_sqlalchemy
```
  
### 2️⃣ Run the Flask Server
```bash
python app.py
```

### 3️⃣ Open in Browser
👉 Visit **`http://127.0.0.1:5000/`**

---

## 📜 How It Works
1. **Enter a message** and click **"Encrypt"** → The message converts into chess moves.
2. **Click the chess squares in order** → Each click reveals a letter.
3. **Wrong move?** Restart and try again!
4. **Paste an encrypted message & click "Decrypt"** → Auto-reveals the text on the board.

---

## 🎨 Screenshots
| Encryption | Decryption |
|------------|------------|
| ![Encrypting a message]('') | ![Decrypting a message]('') |

---

## 🛠️ Technologies Used
- 🐍 **Python (Flask)** – Backend API
- 🎯 **JavaScript (Fetch API, jQuery)** – Handles encryption & board interactions
- 🎨 **HTML & CSS** – Interactive UI with animations
- 🗄️ **SQLite (SQLAlchemy)** – Stores encrypted messages

---

## 📂 Project Structure
```
/chess_encryption
│── /static
│   ├── script.js      # Handles chessboard interactions
│   ├── style.css      # Beautiful chessboard UI
│── /templates
│   ├── index.html     # Frontend UI
│── app.py             # Main Flask server
│── db.py              # Database setup
│── chess_encrypt.py   # Encryption logic
│── chess_decrypt.py   # Decryption logic
│── requirements.txt   # Dependencies
│── README.md          # Project documentation
```

---

## ✨ Future Enhancements
- ✅ **Save game history** in the database
- ✅ **Allow multiplayer encryption battles**
- ✅ **Chess AI integration** to make it a playable game

---

## 🤝 Contributing
Want to improve this project?  
Feel free to **fork & submit a PR!** 🚀

---

## 📧 Contact
📌 **Developer:** *MADHAN SENTHILKUMAR*  
<!-- 📌 **GitHub:** [Your GitHub Profile](https://github.com/yourusername)  
📌 **Email:** your.email@example.com -->
