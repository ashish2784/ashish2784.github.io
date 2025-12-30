import os
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")

print(f"Key loaded: {'Yes' if api_key else 'No'}")

try:
    # Try gemini-1.5-flash as it's more standard
    llm = ChatGoogleGenerativeAI(model="gemini-1.5-flash", google_api_key=api_key)
    res = llm.invoke("Say hello")
    print(f"1.5-flash: {res.content}")
except Exception as e:
    print(f"1.5-flash failed: {e}")

try:
    # Try 2.0-flash
    llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash", google_api_key=api_key)
    res = llm.invoke("Say hello")
    print(f"2.0-flash: {res.content}")
except Exception as e:
    print(f"2.0-flash failed: {e}")

try:
    # Try prepending models/
    llm = ChatGoogleGenerativeAI(model="models/gemini-1.5-flash", google_api_key=api_key)
    res = llm.invoke("Say hello")
    print(f"models/1.5-flash: {res.content}")
except Exception as e:
    print(f"models/1.5-flash failed: {e}")
