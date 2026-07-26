import { json } from '@sveltejs/kit';
import * as data from '$lib/data.js';

/** @type {import('./$types').RequestHandler} */
export async function GET({ setHeaders }) {
    // Security: Minimize exposure by picking only required data
    const responseData = {
        projects: data.projects,
        certifications: data.certifications,
        research: data.research,
        experience: data.experience
    };

    // Performance & Security: Cache headers to reduce server load
    setHeaders({
        'cache-control': 'public, max-age=3600',
        'x-content-type-options': 'nosniff',
        'x-frame-options': 'DENY'
    });

    return json(responseData);
}
