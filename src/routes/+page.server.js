/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    try {
        const response = await fetch('/api/portfolio');
        if (response.ok) {
            const data = await response.json();
            return {
                research: data.research,
                experience: data.experience
            };
        }
    } catch (error) {
        console.error('Error fetching portfolio data:', error);
    }

    // Fallback empty arrays in case of error
    return {
        research: [],
        experience: []
    };
}
