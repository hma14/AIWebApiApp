from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from openai import OpenAI
from sendMessages import send_messages
import constants
import debugpy


DeepSeek_BASE_URL = "https://api.deepseek.com"

app = Flask(__name__)
CORS(app)


@app.route("/api/process", methods=["POST"])
def process_message():
    data = request.json
    user_message = data.get("message", "")
    model = data.get("aiModel", "")
    print (f"model =  {model}")
    
    if user_message == '' or user_message is None:
        user_message = "default message"
    #return jsonify({"result": user_message})

    #model = "deepseek-chat" #"gpt-4" 
    messages = [
        # {"role": "system", "content": "You are a math tutor. Explain concepts step by step."},
        # {"role": "system", "content": "You are a pirate. Respond in pirate slang."},
        # {"role": "system", "content": "You are a helpful assistant."},
        {
            "role": "system",
            "content": "You are a helpful assistant.",
        },
        {"role": "user", "content": user_message},
    ]
    message = send_messages(model, messages)
    

    return jsonify({"result": message})


if __name__ == "__main__":

    app.run(debug=True, host="localhost", port=5000)
