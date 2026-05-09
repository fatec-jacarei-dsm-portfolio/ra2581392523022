# Project Guidelines

## Stack

- Vite + React (JavaScript + JSX)
- Tailwind CSS (PostCSS)
- React Router (HashRouter for GitHub Pages)
- GSAP + ScrollTrigger

## Structure

- Use src/pages for route-level screens (Home, ProjectDetail)
- Use src/sections for Home sections (Intro, About, Projects, Recognition, Skills)
- Use src/components for shared UI
- Use src/data for data sources (projects, recognition, skills)
- Use src/i18n for en.json and pt.json

## Content and i18n

- English is default
- Fixed top language toggle for English/Portuguese
- Simple JSON dictionaries only, no i18n library unless requested

## Routing

- Routes: "/" and "/projects/:slug"
- Use HashRouter to avoid 404 on GitHub Pages

## Animations

- Use GSAP with ScrollTrigger
- Prefer timelines and reusable hooks, clean up on unmount

## Deploy

- GitHub Pages base path: /Portfolio_LucasCecon/
- See PROJECT_GUIDE.md for detailed steps
