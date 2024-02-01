import speech_recognition as sr
import pyttsx3

import speech_recognition as sr

def speech_to_text():
    recognizer = sr.Recognizer()

    with sr.Microphone() as source:
        # recognizer.adjust_for_ambient_noise(source)
        print("Say something:")
        
        audio = recognizer.listen(source, timeout=5)

    try:
        user_input = recognizer.recognize_google(audio)
        return user_input
    except sr.UnknownValueError:
        print("Could not understand audio.")
        return ""
    except sr.RequestError as e:
        print("Could not request results from Google Speech Recognition service; {0}".format(e))
        return ""

# Example usage:



def text_to_speech(text):
    engine = pyttsx3.init()
    engine.say(text)
    engine.runAndWait()

def response_from_data(intent, entities):
    if intent == 'productAvailability':
        return "Hello! How can I assist you today?"

    elif intent == 'orderProduct':
        product_name = entities['product_name:product_name'][0]['value']
        if product_name:
            return f"Sure, let me find information about {product_name} for you."

        return "I'm sorry, I couldn't understand which product you're looking for."

    elif intent == 'productSpecifications':
        return f'Your product {intent} have display of 6.2 inches'

    else:
        return "I'm sorry, I didn't understand your request. Can you please provide more details?"


