# Portfolio-Template

A fast, modern developer portfolio template built with React, Vite, and Tailwind CSS. Structured for easy customization with typed data sources and modular components.

## Tech Stack
- React + Vite
- Tailwind CSS
- TypeScript (for data/types), JavaScript (for UI components)

## Features
- Responsive layout with clean sections (Hero, About, Projects, Experience, Contact)
- Centralized typed data in `src/data` for easy editing
- Fast local dev with Vite and production-optimized builds

## Getting Started
```bash
# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview local production build
npm run preview
```

## Project Structure
```text
src/
  components/      # UI sections (Hero, Header, About, Projects, Experience, Contact, Footer)
  data/            # Typed data: personal info, experience, education, skills, projects
  types/           # Shared TypeScript types
  App.jsx          # App composition
  main.jsx         # Vite entry
  index.css        # Tailwind entry
```

## Customize Content
Update the data files to personalize your portfolio:
- `src/data/personalInfo.ts`
- `src/data/experience.ts`
- `src/data/education.ts`
- `src/data/skills.ts`
- `src/data/projects.ts`

Adjust layout/branding in components under `src/components` (e.g., `Hero.jsx`, `Header.jsx`). Styling is done with Tailwind utility classes in JSX and `index.css`.

## Tailwind
Tailwind is configured via `tailwind.config.js` and `postcss.config.js`. Ensure your editor has Tailwind IntelliSense for best DX.

## Deployment
You can deploy the `dist` output to any static host:
- Vercel: Import repo, set framework to Vite (build: `npm run build`, output: `dist`)
- Netlify: Drag-and-drop `dist` or connect repo (build: `npm run build`)
- GitHub Pages: Build locally and publish `dist` to `gh-pages` branch or use an action

## Scripts
- `dev`: Start Vite dev server
- `build`: Production build
- `preview`: Preview production build locally

## License
MIT

