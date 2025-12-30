import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

model = genai.GenerativeModel('gemini-1.5-flash')
try:
    response = model.generate_content("Hello")
    print(f"SDK 1.5-flash: {response.text}")
except Exception as e:
    print(f"SDK 1.5-flash failed: {e}")

model2 = genai.GenerativeModel('gemini-2.0-flash')
try:
    response = model2.generate_content("Hello")
    print(f"SDK 2.0-flash: {response.text}")
except Exception as e:
    print(f"SDK 2.0-flash failed: {e}")
