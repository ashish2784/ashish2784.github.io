import re

DEFAULT_KNOWLEDGE = """
ASHISH T - PORTFOLIO KNOWLEDGE BASE

PROJECTS:
1. LMS PLATFORM (2023): A Django and PostgreSQL based academic management system for faculty and students. Tech: Django, PostgreSQL, Tailwind CSS, Alpine.js.
2. PREPRO AI (2024): Mock interview platform using LLMs (Google Gemini API) for technical assessments and performance analytics. Tech: Python, Gemini API, Streamlit, LangChain.
3. SALES ANALYTICS (2023): Business intelligence dashboards using SQL and Tableau to identify market trends. Tech: Tableau, Looker Studio, SQL, BigQuery.

CERTIFICATIONS:
- GOOGLE TENSOR FLOW (2023)
- ALTERYX DESIGNER CORE (2023)
- ORACLE GEN AI (2025)
- LINKEDIN HTML EXPERT (2022)
- ORACLE DATA SCIENCE (2025)

RESEARCH:
- XAI: EXPLORING THE BOUNDARIES OF INTERPRETABLE MACHINE LEARNING SYSTEMS. Focused on transparency in black-box models using SHAP and LIME architectures. Peer-reviewed and published.

EXPERIENCE:
- AWS VIRTUAL INTERNSHIP (2023 / MAY - JUL): Architected ML pipelines using AWS SageMaker. Improved drift detection by 15%.
- AMAZON ML SCHOOL (2023 / SUM): Studied transformer architectures and large-scale data systems. Finalist in Kaggle challenge.

GENERAL INFO:
- Name: Ashish T
- Focus: Data Science, AI, ML, DL, Gen AI, and Full-stack Development.
- Design: Apple-inspired minimalist aesthetic.
"""


def _normalize(text: str) -> str:
    return re.sub(r"\s+", " ", text or "").strip().lower()


def get_portfolio_response(message: str, knowledge_text: str = "") -> str:
    normalized = _normalize(message)
    knowledge = (knowledge_text or DEFAULT_KNOWLEDGE).strip()

    if not normalized:
        return (
            "I can help you explore Ashish's background, featured projects, research work, certifications, and experience. "
            "Try asking about projects, capabilities, or contact details."
        )

    if any(token in normalized for token in ["what can you do", "capabilities", "help me", "help"]):
        return (
            "I can summarize Ashish's profile, walk through selected projects, explain research and experience, "
            "and highlight certifications and technical strengths. I am especially useful for questions about AI, data science, and full-stack product work."
        )

    if any(token in normalized for token in ["tell me about ashish", "who is ashish", "about ashish", "who are you"]):
        return (
            "Ashish T is a data-science and AI-focused builder with experience in machine learning, generative AI, cloud-native systems, "
            "and full-stack development. He is known for combining research-driven thinking with practical product execution."
        )

    if any(token in normalized for token in ["project", "portfolio"]):
        return (
            "Ashish's featured projects include LMS Platform, PrePro AI, and Sales Analytics. These span academic systems, AI interview tooling, "
            "and business intelligence dashboards."
        )

    if any(token in normalized for token in ["certif", "credential", "achievement"]):
        return (
            "Key certifications include Google TensorFlow, Alteryx Designer Core, Oracle GenAI, LinkedIn HTML Expert, and Oracle Data Science."
        )

    if any(token in normalized for token in ["research", "paper", "xai"]):
        return (
            "Ashish's research focus includes interpretable machine learning, with work around SHAP and LIME to improve transparency in black-box models."
        )

    if any(token in normalized for token in ["experience", "intern", "work", "career"]):
        return (
            "His experience includes an AWS Virtual Internship and participation in Amazon ML School, where he worked on machine learning pipelines and modern transformer-based systems."
        )

    if any(token in normalized for token in ["skill", "stack", "tech", "technology", "tool"]):
        return (
            "Core strengths include AI/ML, deep learning, generative AI, Python, Django, SQL, Tableau, AWS, and data visualization."
        )

    if any(token in normalized for token in ["contact", "reach", "email", "linkedin", "github"]):
        return (
            "You can reach out through the contact section on this site, which includes email, LinkedIn, and GitHub links for Ashish."
        )

    if "summary" in normalized or "overview" in normalized:
        return (
            "Ashish T is building a portfolio that blends AI, data science, and product development. The site highlights his projects, research, certifications, and professional experience."
        )

    return (
        f"I can answer questions about Ashish's work and background. A few strong topics are projects, research, experience, certifications, and capabilities. "
        f"Right now, the portfolio emphasizes AI and data science work with a strong focus on practical impact."
    )
