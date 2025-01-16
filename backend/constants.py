from enum import Enum

class AIModel(Enum):
    GPT_4O = 'gpt-4o'
    GPT_4_TURBO = 'gpt-4-turbo'
    GPT_35_TURBO = 'gpt-3.5-turbo'
    CODE_DAVINCI_002 = 'code-davinci-002'
    CODE_CUSHMAN_001 = 'code-cushman-001'
    TEXT_DAVINCI_003 = 'text-davinci-003'
    TEXT_BABBAGE_001 = 'text-curie-001'
    TEXT_ADA_001 = 'text-ada-001'
    
    DEEPSEEK_CHAT = 'deepseek-chat'
    LLAMA = 'Llama' 
    
