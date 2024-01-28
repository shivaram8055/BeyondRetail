from flask import Flask, jsonify
from flask_cors import CORS
import speech_recognition as sr

app = Flask(__name__)
CORS(app)

@app.route("/speech-recognition", methods=["POST"])
def speech_recognition():
    try:
        recognizer = sr.Recognizer()
        with sr.Microphone() as source:
            print("Listening...")
            audio = recognizer.listen(source, timeout=5)  # Adjust the timeout value as needed
            answer = recognizer.recognize_google(audio)

            if answer:
                print("Speech Recognized:", answer)
                return jsonify({"answer": answer})
            else:
                return jsonify({"error": "Speech Recognition could not understand audio."})

    except sr.UnknownValueError:
        return jsonify({"error": "Speech Recognition could not understand audio."})
    except sr.RequestError as e:
        return jsonify({"error": f"Could not request results from Google Speech Recognition service; {e}"})

if __name__ == "__main__":
    app.run(debug=True)
