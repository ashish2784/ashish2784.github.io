import os
from typing import Annotated, TypedDict, Union

from fastapi import FastAPI, HTTPException, Header
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

# LangChain / LangGraph imports
from langchain_google_genai import ChatGoogleGenerativeAI
from langgraph.graph import StateGraph, END
from langchain_core.messages import SystemMessage, HumanMessage

# Load environment variables
load_dotenv()

# Security: Ensure API Key is present
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

app = FastAPI(title="LangGraph Gemini RAG API")

# Setup CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load Knowledge Base
KNOWLEDGE_PATH = os.path.join(os.path.dirname(__file__), "knowledge.txt")
try:
    with open(KNOWLEDGE_PATH, "r") as f:
        KNOWLEDGE_BASE = f.read()
except FileNotFoundError:
    KNOWLEDGE_BASE = "No specific portfolio data available."

# Define State for LangGraph
class AgentState(TypedDict):
    messages: list
    next_step: str

# Initialize Gemini
if GOOGLE_API_KEY:
    # Confirmed 'gemini-flash-latest' works in this environment
    llm = ChatGoogleGenerativeAI(model="gemini-flash-latest", google_api_key=GOOGLE_API_KEY)
else:
    llm = None

# Define System Prompt
SYSTEM_PROMPT = f"""You are 'Agent Ashish', an AI assistant for Ashish T's professional portfolio.
Your goal is to answer questions about Ashish's projects, experience, research, and certifications using the provided context.

RULES:
1. Be professional, concise, and helpful.
2. If the user asks a personal question not covered in the data, answer politely that you only have information about Ashish's professional background.
3. Use the following context to answer questions:

{KNOWLEDGE_BASE}
"""

# Define a simple node for the graph
def chatbot_node(state: AgentState):
    if not llm:
        return {"messages": ["Error: Gemini API Key not found in backend environment."], "next_step": END}
    
    # Prepend the system prompt to the conversation
    messages = [SystemMessage(content=SYSTEM_PROMPT)] + state["messages"]
    
    response = llm.invoke(messages)
    return {"messages": [response], "next_step": END}

# Build the Graph
workflow = StateGraph(AgentState)
workflow.add_node("chatbot", chatbot_node)
workflow.set_entry_point("chatbot")
workflow.add_edge("chatbot", END)
graph = workflow.compile()

class ChatQuery(BaseModel):
    message: str

@app.get("/")
async def root():
    return {"status": "LangGraph Backend is running", "gemini_ready": llm is not None}

@app.post("/api/chat")
async def chat(query: ChatQuery):
    if not GOOGLE_API_KEY:
        raise HTTPException(status_code=500, detail="GOOGLE_API_KEY is not set on the server.")

    try:
        # Run the graph
        initial_state = {
            "messages": [HumanMessage(content=query.message)],
            "next_step": "chatbot"
        }
        
        result = graph.invoke(initial_state)
        
        # Get the last message from the result
        final_message = result["messages"][-1]
        
        # Handle different response types from LangChain
        content = getattr(final_message, 'content', str(final_message))
        
        return {"response": content}
    except Exception as e:
        print(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
