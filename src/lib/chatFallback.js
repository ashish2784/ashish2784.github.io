import { capabilities, certifications, experience, projects, research } from './data.js';

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
