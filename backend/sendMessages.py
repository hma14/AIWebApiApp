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
import json
from getFile import get_mapping


load_dotenv()

DeepSeek_API_KEY = os.getenv("DeepSeek_API_KEY")
ChatGPT_API_KEY = os.getenv("ChatGPT_API_KEY")


# Function to get the value for a given key

def send_messages(model, messages):
    
    modelName = get_mapping("../frontend/src/ai_models.json", model)
    
    if model.split("_")[0] == "GPT":   
        return f"OPEN_AI - {openai_send_messages(modelName, messages)}"
    elif model.split("_")[0] == "DS":
        return f"DeepSeek - {deepseek_send_messages(modelName, messages)}"
    else:
        return 'Llama is under construction.'

    

def deepseek_send_messages(model, messages):  
    
    
    client = OpenAI(api_key=DeepSeek_API_KEY, base_url="https://api.deepseek.com")
    
    response = client.chat.completions.create(
        model=model,
        messages=messages,
        max_tokens=500,        
    )

    message = response.choices[0].message
    content = message.content
    
    return content
    


def openai_send_messages(model, messages):

    client = OpenAI(api_key=ChatGPT_API_KEY)
    response = client.chat.completions.create(
        model=model,
        messages=messages,
        max_tokens=15,        
    )

    message = response.choices[0].message
    content = message.content
    
    return content


