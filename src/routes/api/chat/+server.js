import { json } from '@sveltejs/kit';
import { capabilities, certifications, experience, projects, research } from '$lib/data.js';

/**
 * @param {string} message
 */
function getLocalPortfolioResponse(message) {
    const text = (message || '').toLowerCase();

    if (/(project|portfolio|work|build|built|case study|case-study)/.test(text)) {
        const featured = projects.slice(0, 3).map((project) => `${project.title} — ${project.short}`).join(' • ');
        return `I’ve built several portfolio projects, including ${featured}. I can summarize any of them in more detail if you want.`;
    }

    if (/(experience|career|job|role|background|history)/.test(text)) {
        const timeline = experience.map((item) => `${item.title} (${item.duration})`).join(' • ');
        return `My background includes ${timeline}. I can also describe my experience in more depth.`;
    }

    if (/(research|xai|paper|study)/.test(text)) {
        return `My research focus includes ${research[0].title}. I can share the main idea, methods, and impact behind it.`;
    }

    if (/(cert|certificate|certification|credential)/.test(text)) {
        const certs = certifications.map((item) => item.title).join(', ');
        return `I’ve earned certifications including ${certs}. I can tell you more about the most relevant ones.`;
    }

    if (/(skill|capability|tech|stack|python|ai|data|frontend)/.test(text)) {
        const topics = capabilities.map((item) => item.title).join(', ');
        return `My core capabilities span ${topics}. I can explain the approach behind any of them.`;
    }

    return 'I can help with Ashish’s projects, experience, research, certifications, and capabilities. Ask me about a specific topic and I’ll respond with portfolio-focused details.';
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, fetch }) {
    try {
        const { message } = await request.json();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });

            if (response.ok) {
                const data = await response.json();
                return json({ response: data.response || 'I’m here to help with the portfolio.' });
            }
        } catch (backendError) {
            console.warn('Python backend unavailable, using local portfolio response.', backendError);
        }

        return json({ response: getLocalPortfolioResponse(message) });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.error('Chat API Error Details:', error);
        return json({ response: `I hit a small issue: ${message}` }, { status: 500 });
    }
}
