import speech_recognition as sr
import pyttsx3
import json
import speech_recognition as sr

with open('Database.json', 'r', encoding='utf-8') as file:
        products_data = json.load(file)

def speech_to_text():
    recognizer = sr.Recognizer()

    with sr.Microphone() as source:
        # recognizer.adjust_for_ambient_noise(source)
        print("Say something:")
        text_to_speech("i am listening")
        
        audio = recognizer.listen(source, timeout=2)

    try:
        user_input = recognizer.recognize_google(audio)
        return user_input
    except sr.UnknownValueError:
        text_to_speech("Could not understand audio.")
        return ""
    except sr.RequestError as e:
        print("Could not request results from Speech Recognition service; {0}".format(e))
        return ""

# Example usage:



def text_to_speech(text):
    engine = pyttsx3.init()
    engine.say(text)
    engine.runAndWait()


def check_availability(product_name):
    for product in products_data:
        if products_data["title"].lower() == product_name.lower():
            return True
    return False

def response_from_data(intent, entities):
    product_name=entities['product_name:product_name'][0]['value']
    if intent == 'productAvailability':
        if check_availability(product_name):
            return f"The {product_name} is available"
        return "The requested product is not available"

    elif intent == 'orderProduct':
        product_name = entities['product_name:product_name'][0]['value']
        if product_name:
            return f"Sure, let me find information about {product_name} for you."

        return "I'm sorry, I couldn't understand which product you're looking for."

    elif intent == 'productSpecifications':
        return f'Your product {intent} have display of 6.2 inches'

    else:
        return "I'm sorry, I didn't understand your request. Can you please provide more details?"


