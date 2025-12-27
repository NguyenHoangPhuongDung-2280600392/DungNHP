from flask import Flask, render_template, request, json # type: ignore
from cipher.caesar import CaesarCipher
from cipher.vigenere import VigenereCipher
from cipher.railfence import RailFenceCipher
from cipher.playfair.playfair_cipher import PlayfairCipher
from cipher.transposition import TranspositionCipher

app = Flask(__name__)

#router routes for home page
@app.route("/")
def home():
    return render_template('index.html')

#router routes for caesar cypher ----------------------------------------------------
@app.route("/caesar")
def caesar():
    return render_template('caesar.html')

@app.route("/caesar/encrypt", methods=['POST'])
def caesar_encrypt():
    text = request.form['inputPlainText']
    key = int(request.form['inputKeyPlain'])
    Caesar = CaesarCipher()
    encrypted_text = Caesar.encrypt_text(text, key)
    # return f"text: {text}<br/>key: {key}<br/>encrypted text: {encrypted_text}"
    return render_template('caesar.html',
        inputPlainText = text,
        inputKeyCipher = key,
        outputCipherText= encrypted_text
    )
    
@app.route("/caesar/decrypt", methods=['POST'])
def caesar_decrypt():
    text = request.form['inputCipherText']
    key = int(request.form['inputKeyCipher'])
    Caesar = CaesarCipher()
    decrypted_text = Caesar.decrypt_text(text, key)
    return render_template('caesar.html',
        inputCipherText = text,
        inputKeyCipher = key,
        outputPlainText= decrypted_text
    )

#VIGENERE CIPHER -----------------------------------------------------------------------
@app.route("/vigenere")
def vigenere():
    return render_template('vigenere.html')

@app.route("/vigenere/encrypt", methods=['POST'])
def vigenere_encrypt():
    text = request.form['inputPlainText']
    key = request.form['inputKeyPlain']
    vig = VigenereCipher()
    encrypted_text = vig.vigenere_encrypt(text, key)
    # return f"text: {text}<br/>key: {key}<br/>encrypted text: {encrypted_text}"
    return render_template('vigenere.html',
        inputPlainText = text,
        inputKeyCipher = key,
        outputCipherText= encrypted_text
    )
    
@app.route("/vigenere/decrypt", methods=['POST'])
def vigenere_decrypt():
    text = request.form['inputCipherText']
    key = request.form['inputKeyCipher']
    vig = VigenereCipher()
    decrypted_text = vig.vigenere_decrypt(text, key)
    return render_template('vigenere.html',
        inputCipherText = text,
        inputKeyCipher = key,
        outputPlainText= decrypted_text
    )

#RAILFENCE CIPHER ----------------------------------------------------------
@app.route("/railfence")
def railfence():
    return render_template('railfence.html')

@app.route("/railfence/encrypt", methods=['POST'])
def rail_fence_encrypt():
    text = request.form['inputPlainText']
    key = int(request.form['inputKeyPlain'])
    rail = RailFenceCipher()
    encrypted_text = rail.rail_fence_encrypt(text, key)
    # return f"text: {text}<br/>key: {key}<br/>encrypted text: {encrypted_text}"
    return render_template('railfence.html',
        inputPlainText = text,
        inputKeyCipher = key,
        outputCipherText= encrypted_text
    )
    
@app.route("/railfence/decrypt", methods=['POST'])
def rail_fence_decrypt():
    text = request.form['inputCipherText']
    key = int(request.form['inputKeyCipher'])
    rail = RailFenceCipher()
    decrypted_text = rail.rail_fence_decrypt(text, key)
    return render_template('railfence.html',
        inputCipherText = text,
        inputKeyCipher = key,
        outputPlainText= decrypted_text
    )
    
#PLAYFAIR CIPHER --------------------------------------------

@app.route("/Playfair")
def playfair():
    return render_template('playfair.html')

@app.route("/playfair/encrypt", methods=['POST'])
def playfair_encrypt():
    text = request.form['inputPlainText']
    key = request.form['inputKeyPlain']
    playfair = PlayfairCipher()
    matrix = playfair.create_playfair_matrix(key)  # Tạo ma trận từ key
    encrypted_text = playfair.playfair_encrypt(text, matrix)
    return render_template('playfair.html',
        inputPlainText=text,
        inputKeyCipher=key,
        outputCipherText=encrypted_text
    )

    
@app.route("/playfair/decrypt", methods=['POST'])
def playfair_decrypt():
    text = request.form['inputCipherText']
    key = request.form['inputKeyCipher']
    playfair = PlayfairCipher()
    matrix = playfair.create_playfair_matrix(key)  # Tạo ma trận từ key
    decrypted_text = playfair.playfair_decrypt(text, matrix)
    return render_template('playfair.html',
        inputCipherText=text,
        inputKeyCipher=key,
        outputPlainText=decrypted_text
    )


#TRANSPOSITION CIPHER ---------------------------------------

@app.route("/transposition")
def transposition():
    return render_template('transposition.html')

@app.route("/transposition/encrypt", methods=['POST'])
def transposition_encrypt():
    text = request.form['inputPlainText']
    key = int(request.form['inputKeyPlain'])
    trans = TranspositionCipher()
    encrypted_text = trans.encrypt(text, key)
    return render_template('transposition.html',
        outputCipherText=encrypted_text
    )
    
@app.route("/transposition/decrypt", methods=['POST'])
def transposition_decrypt():
    text = request.form['inputCipherText']
    key = int(request.form['inputKeyCipher'])
    trans = TranspositionCipher()
    decrypted_text = trans.decrypt(text, key)
    return render_template('transposition.html',
        outputPlainText=decrypted_text
    )

#main function
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050, debug=True)