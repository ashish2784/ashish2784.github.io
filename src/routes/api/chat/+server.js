import { json } from '@sveltejs/kit';
import { getLocalPortfolioResponse, normalizeChatResponse } from '$lib/chatFallback.js';

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
                return json({ response: normalizeChatResponse(data.response) });
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
