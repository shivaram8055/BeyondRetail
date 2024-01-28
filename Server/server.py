from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route("/members")
def members():
    return jsonify({"members": ["mem1", "mem2", "mem3"]})

@app.route("/trigger-function", methods=["POST"])
def trigger_function():
    # Call the functionTriggered() function
    result = functionTriggered()
    return jsonify({"result": result})

def functionTriggered():
    return "Function Triggered"

if __name__ == "__main__":
    app.run(debug=True)
