import random
import string

chess_squares = [f"{file}{rank}" for rank in range(1, 9) for file in "abcdefgh"]
char_map = {char: chess_squares[i] for i, char in enumerate(string.ascii_uppercase + string.ascii_lowercase + string.digits + " " + "'")}
reverse_char_map = {v: k for k, v in char_map.items()}

def encrypt_message(message):
    encrypted_moves = [char_map.get(char, random.choice(chess_squares)) for char in message]
    return "-".join(encrypted_moves)
