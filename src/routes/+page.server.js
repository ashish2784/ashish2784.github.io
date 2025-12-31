import { research, experience } from '$lib/data';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        research,
        experience
    };
}
