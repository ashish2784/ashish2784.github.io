# Implementation Plan - Swiss Portfolio Redesign

Redesigning the portfolio to follow the **International Typographic Style (Swiss Design)**. This style emphasizes cleanliness, readability, and objectivity using a strict grid system and sans-serif typography.

## Step 1: Current State Analysis
- **Framework**: SvelteKit with Tailwind CSS 4.0.
- **Components**: `Nav`, `Hero`, `About`, `Certifications`, `Research`, `Projects`, `Experience`.
- **Current Issues**: 
    - Inconsistent styling (mix of Tailwind and embedded `<style>` blocks).
    - Styling logic split between `app.html` and components.
    - Lacks a unified grid-driven layout.

## Step 2: Strategic Planning (Swiss Design Principles)
- **Typography**: Primary font will be a bold Sans-Serif (e.g., **Inter** or **Helvetica Neue**). Large, high-contrast headings.
- **Grid**: Implementation of a 12-column grid system for absolute alignment.
- **Color Palette**: 
    - Primary: High-contrast Black (`#000000`) and White (`#FFFFFF`).
    - Accent: Red (`#E63946`) or Blue (`#007AFF`) for highlights and status.
- **Layout**: Large whitespace, asymmetrical balance, and clear hierarchy.
- **Animations**: Subtle, precise transitions (0.2s - 0.4s) for hover states.

## Step 3: Execution (Building the App)
### 3.1 Global Design System
- Refactor `app.css` to define the Swiss Typography and Grid variables.
- Update `app.html` to clean up old styles and global variables.

### 3.2 Component Overhaul
- **Nav**: Minimalist, fixed, with distinct grid alignment.
- **Hero**: Use massive typography for the name/role.
- **Sections**: Use consistent grid gutters and "Swiss Cards" (clean borders, no shadows, strict spacing).
- **Responsive**: Mobile-first grid collapsing.

### 3.3 Dynamic Features
- Interactive hover effects on project cards.
- "Reveal" animations on scroll.

## Step 4: Documentation & Git
- Initialize/Verify Git repository.
- Commit modular changes.

## Step 5: AI Integration (Portfolio LLM)
- Develop a "Chat with Ashish" component.
- **Backend/Logic**: Use a SvelteKit server route to interact with Google Gemini API.
- **Context**: Feed it a structured JSON representing the portfolio data (Experience, Projects, Skills) to provide accurate answers.

---
**Next Action**: Start by setting up the global CSS variables and typography in `src/app.css`.
