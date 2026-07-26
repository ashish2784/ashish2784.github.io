export const projects = [
    {
        slug: 'lms-platform',
        title: 'LMS PLATFORM',
        tag: 'DJANGO / SQL',
        short: 'Comprehensive full-stack system for academic management.',
        description: 'A robust learning management system built to handle faculty-student interactions, grade tracking, and course material delivery.',
        tech: ['Django', 'PostgreSQL', 'Tailwind CSS', 'Alpine.js'],
        year: '2023',
        role: 'Full-stack Builder',
        context: 'Academic Operations',
        timeline: 'Q4 2023',
        story: 'This platform was designed to simplify faculty-student coordination by combining a reliable backend with a clean interface for daily academic workflows.',
        highlights: [
            'Built role-aware workflows for students, faculty, and admins',
            'Simplified grade tracking and communication channels',
            'Delivered a modular, maintainable architecture for future growth'
        ],
        impact: 'Improved the clarity and reliability of academic operations for a campus-style environment.',
        links: {
            github: 'https://github.com',
            demo: 'https://example.com'
        }
    },
    {
        slug: 'prepro-ai',
        title: 'PREPRO AI',
        tag: 'GEN AI / PYTHON',
        short: 'Mock interview platform utilizing LLMs for assessments.',
        description: 'An AI-powered platform that simulates technical interviews, providing real-time feedback and performance analytics using Google Gemini API.',
        tech: ['Python', 'Gemini API', 'Streamlit', 'LangChain'],
        year: '2024',
        role: 'AI Engineer',
        context: 'Interview Simulation',
        timeline: 'Q2 2024',
        story: 'PrePro AI explored how generative AI can make interview preparation more interactive, adaptive, and feedback-driven.',
        highlights: [
            'Used LLMs to generate realistic interview prompts and feedback',
            'Created a lightweight experience for guided practice and self-assessment',
            'Focused on making AI-assisted evaluation more explainable and useful'
        ],
        impact: 'Showcased a practical path for using AI in learning and assessment experiences.',
        links: {
            github: 'https://github.com',
            article: 'https://example.com'
        }
    },
    {
        slug: 'civix',
        title: 'CIVIX',
        tag: 'REACT / NEWS AI',
        short: 'UPSC prep companion for trusted current-affairs updates, highlights, and quizzes.',
        description: 'A React-based learning platform for UPSC aspirants that fetches curated news from a small set of trusted providers, delivers concise highlights, and runs quizzes tied to current affairs and important topics.',
        tech: ['React', 'JavaScript', 'News APIs', 'Tailwind CSS', 'Firebase'],
        year: '2025',
        role: 'Product & Frontend Builder',
        context: 'Civic Learning',
        timeline: 'Q1 2025',
        story: 'Civix was designed to make daily current-affairs preparation more focused and less overwhelming by combining dependable news intake with lightweight learning loops.',
        highlights: [
            'Curates updates from a trusted set of news sources',
            'Provides digestible news highlights for fast revision',
            'Includes quiz flows aligned to current affairs and prep topics'
        ],
        impact: 'Helped create a clearer, more structured daily study experience for UPSC preparation.',
        links: {
            demo: 'https://example.com'
        }
    },
    {
        slug: 'summarise',
        title: 'SUMMARISE',
        tag: 'AI / PDF / DOCS',
        short: 'A summarization tool for long text, PDFs, documents, and messages.',
        description: 'An AI-powered summarization app that transforms long paragraphs, documents, PDFs, and messages into compact 2–3 line summaries while preserving sentiment and core meaning, with recent summaries stored for quick review.',
        tech: ['React', 'Python', 'Gemini API', 'File Handling', 'Local Storage'],
        year: '2025',
        role: 'AI Product Builder',
        context: 'Knowledge Summarization',
        timeline: 'Q2 2025',
        story: 'Summarise focused on making long-form information easier to consume by turning dense content into concise, semantically rich outputs.',
        highlights: [
            'Summarizes long text, documents, PDFs, and messages',
            'Preserves sentiment and semantics in concise outputs',
            'Stores recent summaries for revisit and continuity'
        ],
        impact: 'Made information digestion faster and more practical for busy users and learners.',
        links: {
            demo: 'https://example.com'
        }
    },
    {
        slug: 'sales-analytics',
        title: 'SALES ANALYTICS',
        tag: 'TABLEAU / DATA',
        short: 'Strategic business intelligence dashboards.',
        description: 'Bespoke analytics dashboards designed to track multi-dimensional sales data, identifying key market trends and revenue growth opportunities.',
        tech: ['Tableau', 'Looker Studio', 'SQL', 'BigQuery'],
        year: '2023',
        role: 'Data & BI Builder',
        context: 'Business Intelligence',
        timeline: 'Q3 2023',
        story: 'This work focused on turning real sales data into clear decision-making views that highlight growth patterns and market signals.',
        highlights: [
            'Designed multi-layered dashboards for different stakeholder needs',
            'Connected data modeling with business-friendly visual storytelling',
            'Made trend analysis easier to interpret and act on'
        ],
        impact: 'Helped translate raw sales data into clearer strategic insight and opportunity detection.',
        links: {
            demo: 'https://example.com'
        }
    }
];

export const capabilities = [
    {
        title: 'AI Product Development',
        description: 'Designing practical AI experiences that blend reasoning, feedback loops, and measurable outcomes.',
        highlights: ['LLM-assisted workflows', 'Prompt and agent design', 'Evaluation-driven iteration']
    },
    {
        title: 'Data & Analytics Systems',
        description: 'Turning fragmented data into dashboards, decision layers, and reliable reporting pipelines.',
        highlights: ['SQL and BI tooling', 'Cloud-ready analytics', 'Insightful storytelling']
    },
    {
        title: 'Frontend & Product Delivery',
        description: 'Building polished interfaces and product flows that feel simple, fast, and human-centered.',
        highlights: ['Modern UI systems', 'Responsive experiences', 'End-to-end delivery']
    },
    {
        title: 'Research-to-Production Thinking',
        description: 'Bridging experimentation with deployment so ideas can be tested and scaled responsibly.',
        highlights: ['Interpretable AI', 'Model evaluation', 'Applied experimentation']
    }
];

export const profileStats = [
    { value: '3+', label: 'Featured Product Builds' },
    { value: '2+', label: 'Research & Internship Tracks' },
    { value: '5+', label: 'Certifications Earned' }
];

export const certifications = [
    {
        slug: 'google-tensorflow',
        title: 'TENSOR FLOW',
        issuer: 'GOOGLE',
        date: '2023',
        link: 'https://drive.google.com/file/d/1QWJQm1bUv14mPXt4JqImpJxgMzSK1c5z/view?usp=drive_link'
    },
    {
        slug: 'alteryx-designer',
        title: 'DESIGNER CORE',
        issuer: 'ALTERYX',
        date: '2023',
        link: 'https://drive.google.com/file/d/1MxNzhmAiklBEGPMavlpv6f0oYJlAA6Qq/view?usp=sharing'
    },
    {
        slug: 'oracle-genai',
        title: 'GEN AI',
        issuer: 'ORACLE',
        date: '2025',
        link: 'https://drive.google.com/file/d/15tuvyc8mvlOeAJyqO5BDfvZXGUjErDqj/view?usp=drive_link'
    },
    {
        slug: 'linkedin-html',
        title: 'HTML EXPERT',
        issuer: 'LINKEDIN',
        date: '2022',
        link: 'https://drive.google.com/file/d/1wMQWZ2IrPvWmGh8_nAwaA8XvRNX5tol0/view?usp=sharing'
    },
    {
        slug: 'oracle-ds',
        title: 'Data Science',
        issuer: 'ORACLE',
        date: '2025',
        link: 'https://drive.google.com/file/d/15tuvyc8mvlOeAJyqO5BDfvZXGUjErDqj/view?usp=drive_link'
    }
];

export const research = [
    {
        title: 'XAI: EXPLORING THE BOUNDARIES OF INTERPRETABLE MACHINE LEARNING SYSTEMS.',
        description: 'Research focused on improving transparency in black-box models using SHAP and LIME architectures. Published and verified by peer review.',
        link: 'https://drive.google.com/file/d/1ZdAk7c6fi8u6bAzYyL3E9DHc83eCoHwe/view?usp=sharing'
    }
];

export const experience = [
    {
        title: 'GEN AI ENGINEER',
        duration: '2026 / FEB - PRESENT',
        type: 'Full-time',
        description: 'Developing and deploying generative AI solutions for enterprise applications, focusing on natural language processing and computer vision tasks. Implemented scalable AI pipelines and optimized model performance across various platforms.'
    },
    {
        title: 'AWS VIRTUAL INTERNSHIP',
        duration: '2023 / MAY - JUL',
        type: 'Internship',
        description: 'Architected and deployed modular machine learning pipelines using AWS SageMaker. Improving model drift detection by 15%.'
    },
    {
        title: 'AMAZON ML SCHOOL',
        duration: '2023 / SUM',
        type: 'Internship',
        description: 'Intensive study of modern transformer architectures and large-scale data systems. Finalist in cohort-wide Kaggle challenge.'
    }
];
