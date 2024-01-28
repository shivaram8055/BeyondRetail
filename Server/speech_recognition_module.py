import pyttsx3
import speech_recognition as sr
from threading import Thread

engine = pyttsx3.init()

def speak(word):
    engine.setProperty('rate', 135)
    engine.setProperty('volume', 0.8)

    voices = engine.getProperty('voices')
    engine.setProperty('voice', voices[0].id)

    engine.say(str(word))
    engine.runAndWait()
    engine.stop()

def recognize_speech():
    speak('listening')
    rec = sr.Recognizer()

    with sr.Microphone() as source:
        try:
            print("Listening for speech...")
            audio = rec.listen(source)
            print("Speech captured successfully.")
            
            speak('moye moye')
            print("Processing speech...")

            answer = rec.recognize_google(audio)

            if answer:
                print("Speech Recognized:", answer)
                speak(answer)
            else:
                print("Speech Recognition could not understand audio.")

        except sr.UnknownValueError:
            print("Speech Recognition could not understand audio.")

        except sr.RequestError as e:
            print(f"Could not request results from Google Speech Recognition service; {e}")

if __name__ == "__main__":
    recognize_speech()
