from chess_encrypt import reverse_char_map

def decrypt_message(encrypted_text):
    moves = encrypted_text.split("-")
    decrypted_text = "".join([reverse_char_map.get(move, "?") for move in moves])
    return decrypted_text
