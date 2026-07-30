import { capabilities, certifications, experience, projects, research } from './data.js';

/**
 * @param {unknown} response
 */
export function normalizeChatResponse(response) {
    if (typeof response === 'string') {
        return response;
    }

    if (Array.isArray(response)) {
        const text = response
            .map((item) => {
                if (typeof item === 'string') return item;
                if (item && typeof item === 'object' && 'text' in item && typeof item.text === 'string') {
                    return item.text;
                }
                if (item && typeof item === 'object' && 'content' in item && typeof item.content === 'string') {
                    return item.content;
                }
                return '';
            })
            .filter(Boolean)
            .join('\n\n');

        if (text) {
            return text;
        }
    }

    if (response && typeof response === 'object' && 'text' in response && typeof response.text === 'string') {
        return response.text;
    }

    if (response && typeof response === 'object' && 'content' in response && typeof response.content === 'string') {
        return response.content;
    }

    return 'I’m here to help with Ashish’s portfolio.';
}

/**
 * @param {string} message
 */
export function getLocalPortfolioResponse(message) {
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
