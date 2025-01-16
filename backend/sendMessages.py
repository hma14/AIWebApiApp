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
from constants import AIModel

load_dotenv()

DeepSeek_API_KEY = os.getenv("DeepSeek_API_KEY")
ChatGPT_API_KEY = os.getenv("ChatGPT_API_KEY")


def send_messages(model: AIModel, messages):
    
    modelName = [m.value for m in AIModel if m.name == model][0]
    
    if model == AIModel.GPT_4O.name:   
        return f"OPEN_AI - {openai_send_messages(modelName, messages)}"
    elif model == AIModel.DEEPSEEK_CHAT.name:
        return f"DeepSeek - {deepseek_send_messages(modelName, messages)}"
    else:
        return 'Llama is under construction.'

    

def deepseek_send_messages(model, messages):  
    
    
    client = OpenAI(api_key=DeepSeek_API_KEY, base_url="https://api.deepseek.com")
    
    response = client.chat.completions.create(
        model=model,
        messages=messages,
        max_tokens=15,        
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


