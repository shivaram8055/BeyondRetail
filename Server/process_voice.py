from flask import Flask, request, jsonify
from wit import Wit
from SpeechRecognition import speech_to_text, text_to_speech
from flask_cors import CORS
from Response import response_data

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

wit_client = Wit("DHQVL5DPGYDSWD72KRTHFAS7GOWUSTYI")

@app.route('/process_voice', methods=['POST'])
def process_voice():
    # try:
        # Assuming your voice-to-text logic is here
    voice_text = speech_to_text()

    # Using Wit.ai for intent and entity recognition
    wit_response = wit_client.message(voice_text)



    # Extract intent and entities from Wit.ai response
    intent = wit_response['intents'][0]['name'] if wit_response['intents'] else None
    print("Intent: ",intent)
    entities = wit_response['entities']
    print("Entities: ",entities)

    # Your business logic based on intent and entities
    response_text = response_data(intent, entities)
    print("Response ",response_text)
    if isinstance(response_text, list):
        text_to_speech(response_text[0])
    else:
        text_to_speech(response_text)

    


    return jsonify({"user_input": voice_text, "response_text": response_text,"intent":intent})

# except Exception as e:
    #     return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
