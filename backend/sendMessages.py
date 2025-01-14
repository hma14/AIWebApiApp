from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from enum import Enum
import constants
from openai import OpenAI
import debugpy
import json
from dotenv import load_dotenv
import os
from typing import List

load_dotenv()

DeepSeek_API_KEY = os.getenv("DeepSeek_API_KEY")
ChatGPT_API_KEY = os.getenv("ChatGPT_API_KEY")


def send_messages(ai_type, model, messages):
    

    if ai_type == constants.OPEN_AI:
        return openai_send_messages(model, messages)
    elif ai_type == constants.DEEP_SEEK:
        return deepseek_send_messages(model, messages)
    else:
        response = 'No AI type is selected.'

    return response      
    

def deepseek_send_messages(model, messages: List[str]) -> None:  
    
    from openai import OpenAI
    client = OpenAI(api_key=DeepSeek_API_KEY, base_url="https://api.deepseek.com")
    
    for i, message in messages:
        messages = [{"role": "user", "content": message}]
        response = client.chat.completions.create(
            model=model,
            messages=message
        )
        messages.append(response.choices[0].message)
        i += 1
        print(f"Messages Round {i}: {messages}")
    

    

"""     import requests

    url = "https://api.deepseek.com/models"

    payload={}
    headers = {
    'Accept': 'application/json',
    'Authorization': f'Bearer {DeepSeek_API_KEY}'
    }

    response = requests.request("GET", url, headers=headers, data=payload)

    print(response.text)
    
    # Parse the JSON string into a Python dictionary
    response_dict = json.loads(response.text)

    # Access the 'data' list
    data_list = response_dict["data"]
    
    for model in data_list:
        print(f"Model ID: {model['id']}, Owned By: {model['owned_by']}")
    model_ids = [model['id'] for model in data_list]
    return model_ids
 """        


def openai_send_messages(model, messages):


    client = OpenAI(api_key=ChatGPT_API_KEY)
    response = client.chat.completions.create(
        model=model,
        messages=messages,
        max_tokens=15,        
    )

    message = response.choices[0].message
    content = message.content
    print(content)
    return content


