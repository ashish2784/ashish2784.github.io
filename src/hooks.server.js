const rateLimitMap = new Map();

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    // Basic Rate Limiting for API
    if (event.url.pathname.startsWith('/api')) {
        // try-catch because getClientAddress() can throw in some environments
        try {
            const ip = event.getClientAddress() || 'unknown';
            const now = Date.now();
            const limit = 100; // 100 requests
            const window = 60000; // 1 minute

            const userRequests = rateLimitMap.get(ip) || [];
            const recentRequests = userRequests.filter((/** @type {number} */ timestamp) => now - timestamp < window);

            if (recentRequests.length >= limit) {
                return new Response('Too Many Requests', { status: 429 });
            }

            recentRequests.push(now);
            rateLimitMap.set(ip, recentRequests);
        } catch (e) {
            console.error('Rate limit check failed:', e);
        }
    }

    const response = await resolve(event);

    // Security: Standard security headers
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

    return response;
}
