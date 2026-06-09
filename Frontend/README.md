# Animated Event Management Frontend

## Project Overview
This folder is now a React frontend built with Vite, Tailwind CSS, PostCSS, AOS, and GSAP. It replaces the previous static HTML structure so you can develop modern React components and animated UI faster.

## Project Structure

```
Frontend/
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── .gitignore
└── README.md
```

## Core Features
- React component-based UI
- Tailwind CSS utility styling
- PostCSS build pipeline
- AOS for scroll reveal animations
- GSAP for timeline and motion effects
- Responsive layout using React + Tailwind

## Setup Instructions

1. Open a terminal in `Frontend`
2. Run `npm install`
3. Run `npm run dev`
4. Open the local Vite URL shown in the terminal

## Development Notes
- Add pages and UI in `src/App.jsx` or create new components in `src/`
- Style with Tailwind utility classes in JSX
- Use AOS attributes like `data-aos="fade-up"`
- Use GSAP inside React `useEffect` for entrance animations
- Use `src/index.css` for Tailwind directives and global styles

## Available Scripts
- `npm run dev` — start the development server
- `npm run build` — build the production bundle
- `npm run preview` — preview the production build locally

## Packages Installed
- `react`
- `react-dom`
- `vite`
- `@vitejs/plugin-react`
- `tailwindcss`
- `postcss`
- `autoprefixer`
- `aos`
- `gsap`

## Notes
- Tailwind is configured via `tailwind.config.js`
- PostCSS is configured via `postcss.config.js`
- The app entry is `src/main.jsx`
- The root component is `src/App.jsx`
