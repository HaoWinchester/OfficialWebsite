# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI Security company official website built with Next.js (Pages Router). The site showcases AI security solutions, research findings, resources, and company information with a dark tech-themed design.

## Common Commands

```bash
# Install dependencies
npm install

# Development server (runs on port 3001 by default)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture

### Framework & Routing
- **Next.js 14 with Pages Router** - Uses the `pages/` directory for file-based routing
- **Dynamic Routes** - `pages/details/[id].js` uses `getServerSideProps` for server-side rendering with dynamic content
- All pages include inline `<Header />` component and inline `<footer />` sections (no shared Footer component exists)

### Theme System
- **Dual Theme Architecture** - Supports dark (default) and light themes via CSS custom properties
- **Theme Persistence** - Theme preference stored in `localStorage` and initialized in `pages/_app.js`
- **Theme Toggle** - Fixed button in top-right corner via `Header.js` component
- Theme switching changes CSS variables defined in `styles/globals.css`:root and :root[data-theme="light"]

### Styling Architecture
- **CSS Modules** - Each page has a corresponding module in `styles/[PageName].module.css`
- **Design Tokens** - CSS custom properties for colors, backgrounds, borders, shadows, and gradients
- **Gradient Backgrounds** - Primary backgrounds use linear gradients for depth
- **Glassmorphism** - Cards use `backdrop-filter: blur(10px)` with semi-transparent backgrounds

### Component Structure
```
components/
├── Header.js           # Main navigation with theme toggle
└── Header.module.css   # Header styles

pages/
├── _app.js            # App wrapper, initializes theme from localStorage
├── index.js           # Homepage
├── about.js           # About us page
├── solutions.js       # Solutions showcase
├── research.js        # Research publications
├── findings.js        # Research findings
├── resources.js       # Resource center
├── news.js            # News and updates
├── contact.js         # Contact form
├── test.js            # Test page
└── details/
    └── [id].js        # Dynamic detail pages with SSR
```

### Content Management
- **Static Data** - Most content is hardcoded in page components (e.g., `solutions.js` has solution array)
- **Dynamic Detail Pages** - `pages/details/[id].js` uses a `detailsData` object with IDs as keys
- Server-side rendering via `getServerSideProps` for detail pages
- No external CMS or API - content lives in component files

### Design Patterns
- Each page is self-contained with its own Header import and footer markup
- Repeated footer sections across all pages (opportunity for component extraction)
- No shared components folder besides Header
- No state management library - uses React useState only for theme
- No API routes defined

## Adding New Features

### Adding a New Page
1. Create file in `pages/[pagename].js`
2. Create corresponding `styles/[PageName].module.css`
3. Import Header component at the top of your page
4. Include inline footer markup (copy from existing pages)
5. Add navigation link in `components/Header.js` nav section

### Adding Dynamic Routes
Follow pattern in `pages/details/[id].js`:
- Create `pages/[category]/[id].js`
- Export `getServerSideProps` to fetch data based on context.params
- Return props to page component

### Modifying Theme
Edit CSS variables in `styles/globals.css`:
- `:root` for dark theme (default)
- `:root[data-theme="light"]` for light theme
- Variables include: `--background-*`, `--text-*`, `--border-*`, `--shadow-*`, `--gradient-*`
