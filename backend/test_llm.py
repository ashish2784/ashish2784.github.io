import os
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv

load_dotenv()

try:
    llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash", google_api_key=os.getenv("GOOGLE_API_KEY"))
    res = llm.invoke("Hello, who are you?")
    print(res.content)
except Exception as e:
    print(f"ERROR: {e}")
