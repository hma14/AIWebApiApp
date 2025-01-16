import os
import json

def getFile(filePath: str):
    
    base_dir = os.path.dirname(os.path.abspath(__file__))  # Get current script's directory
    #shared_file = os.path.join(base_dir, "../frontend/src/ai_models.json")
    file_path = os.path.join(base_dir, filePath)

    with open(file_path, "r") as file:
        return json.load(file)

def get_mapping(fileName: str, key: str) -> str:
    content = getFile(fileName)
    return content.get(key, None)  # Returns None if the key is not found