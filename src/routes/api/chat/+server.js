import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, fetch }) {
    try {
        const { message } = await request.json();

        // Forward to our Python FastAPI backend
        const response = await fetch('http://127.0.0.1:8000/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });

        if (!response.ok) {
            return json({ error: 'Failed to communicate with RAG model' }, { status: 500 });
        }

        const data = await response.json();
        return json(data);

    } catch (error) {
        console.error('Chat API Error Details:', error);
        return json({ error: `Internal Server Error: ${error.message}` }, { status: 500 });
    }
}
