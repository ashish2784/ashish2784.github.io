import os
import time
from collections import defaultdict
from typing import Annotated, TypedDict, Union

from fastapi import FastAPI, HTTPException, Header
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

# LangChain / LangGraph imports
from langchain_google_genai import ChatGoogleGenerativeAI
from langgraph.graph import StateGraph, END
from langchain_core.messages import SystemMessage, HumanMessage

try:
    from backend.portfolio_logic import get_portfolio_response
except ImportError:  # pragma: no cover
    from portfolio_logic import get_portfolio_response

# Load environment variables
load_dotenv()

# Security: Ensure API Key is present
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

app = FastAPI(title="LangGraph Gemini RAG API")

RATE_LIMIT_WINDOW = 60
RATE_LIMIT_MAX_REQUESTS = 8
REQUEST_LOG = defaultdict(list)

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
3. Stay strictly focused on Ashish's professional portfolio, projects, experience, research, certifications, and capabilities.
4. If the request is unrelated to Ashish's portfolio or professional background, politely decline and redirect to portfolio-related topics.
5. Use the following context to answer questions:

{KNOWLEDGE_BASE}
"""


def check_rate_limit(identifier: str) -> bool:
    now = time.time()
    window_start = now - RATE_LIMIT_WINDOW
    REQUEST_LOG[identifier] = [ts for ts in REQUEST_LOG[identifier] if ts > window_start]

    if len(REQUEST_LOG[identifier]) >= RATE_LIMIT_MAX_REQUESTS:
        return False

    REQUEST_LOG[identifier].append(now)
    return True


def is_portfolio_related(message: str) -> bool:
    text = message.lower()
    portfolio_keywords = [
        'ashish', 'portfolio', 'project', 'projects', 'experience', 'career', 'research',
        'certification', 'certifications', 'skill', 'skills', 'capability', 'capabilities',
        'resume', 'work', 'background', 'tech', 'stack', 'ai', 'data', 'frontend', 'backend'
    ]
    return any(keyword in text for keyword in portfolio_keywords)


def get_chat_response(message: str) -> str:
    if not llm:
        return get_portfolio_response(message, KNOWLEDGE_BASE)

    try:
        response = llm.invoke([SystemMessage(content=SYSTEM_PROMPT), HumanMessage(content=message)])
        return getattr(response, "content", str(response))
    except Exception as exc:
        print(f"Falling back to local logic: {exc}")
        return get_portfolio_response(message, KNOWLEDGE_BASE)


class ChatQuery(BaseModel):
    message: str


@app.get("/")
async def root():
    return {"status": "LangGraph Backend is running", "gemini_ready": llm is not None}


@app.post("/api/chat")
async def chat(query: ChatQuery):
    identifier = f"ip:{os.getenv('REMOTE_ADDR', 'local')}"

    if not check_rate_limit(identifier):
        return {
            "response": "You have reached the chat limit. Please wait a moment and ask again about Ashish's portfolio."
        }

    if not is_portfolio_related(query.message):
        return {
            "response": "I can only help with Ashish's portfolio, projects, experience, research, certifications, and capabilities."
        }

    if not GOOGLE_API_KEY:
        return {"response": get_chat_response(query.message)}

    try:
        return {"response": get_chat_response(query.message)}
    except Exception as e:
        print(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
