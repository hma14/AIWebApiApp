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

load_dotenv()

DeepSeek_API_KEY = os.getenv("DeepSeek_API_KEY")
ChatGPT_API_KEY = os.getenv("ChatGPT_API_KEY")


def send_messages(ai_type, model, messages):
    

    if ai_type == constants.OPEN_AI:
        response = openai_send_messages(messages)
    elif ai_type == constants.DEEP_SEEK:
        response = deepseek_send_messages(messages)
    else:
        response = 'No AI type is selected.'

    return response      
    

""" 
    api_key = ChatGPT_API_KEY
    client = OpenAI(api_key=api_key)
    
    if ai_type == constants.DEEP_SEEK:
        api_key = DeepSeek_API_KEY 
        client = OpenAI(api_key=api_key, base_url="https://api.deepseek.com")        
    
    response = client.chat.completions.create(
        model=model,
        messages=messages,
        max_tokens=15,        
    )

    message = response.choices[0].message
    content = message.content
    print(content)
    return content
"""

def deepseek_send_messages(messages):  
    
    import requests

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
        


def openai_send_messages(messages):


    client = OpenAI(api_key=ChatGPT_API_KEY)
    response = client.chat.completions.create(
        model="gpt-4",
        messages=messages,
        max_tokens=15,        
    )

    message = response.choices[0].message
    content = message.content
    print(content)
    return content


