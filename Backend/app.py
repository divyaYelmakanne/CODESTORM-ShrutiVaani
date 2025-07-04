from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import io

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "WELCOME TO SHRUTIVAANI 🗣️! FLASK BACKEND IS RUNNING SUCCESSFULLY ✨"

@app.route("/api/voice-to-text", methods=["POST"])
def voice_to_text():
    # Placeholder: receive audio, return dummy text
    # In production, use Vosk or similar for STT
    # audio = request.files["audio"]
    # lang = request.form.get("lang", "hi-IN")
    return jsonify({"text": "(transcribed text would appear here)"})

@app.route("/api/text-to-voice", methods=["POST"])
def text_to_voice():
    # Placeholder: receive text, return dummy audio
    # In production, use Coqui TTS or gTTS
    # text = request.form.get("text")
    # lang = request.form.get("lang", "hi-IN")
    # Return a dummy wav file
    dummy_audio = io.BytesIO(b"RIFF....WAVEfmt ")
    return send_file(dummy_audio, mimetype="audio/wav")

if __name__ == "__main__":
    app.run(debug=True) 