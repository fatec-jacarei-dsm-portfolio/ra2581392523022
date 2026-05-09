# Project Guide - Portfolio

## Goals

- Single-page landing with sections: Intro (entry screen), About, Projects, Recognition, Skills
- Projects preview grid and detail pages
- Scroll and section animations
- English default with fixed top language toggle for English/Portuguese
- Local images and fonts

## Stack

- Vite + React
- Tailwind CSS
- React Router
- GSAP + ScrollTrigger

## Folder layout (planned)

/public
/img
/font
/src
/components
/sections
/pages
/data
/hooks
/i18n

Note: after Vite init, move the existing font/ and img/ folders into /public/font and /public/img.

## Setup (first time)

1. Initialize the project in the current folder:

```bash
npm create vite@latest . -- --template react
npm install
```

2. Install dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-router-dom gsap
```

3. Tailwind config (tailwind.config.js or .cjs):

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

4. Add Tailwind directives to src/index.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Routing (GitHub Pages safe)

Use HashRouter to avoid 404s on deep links.

main.jsx:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
```

App.jsx:

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}
```

## Data structure (placeholders)

Create files like src/data/projects.js and src/data/recognition.js.

Example project shape:

```js
export const projects = [
  {
    slug: "project-one",
    title: "Project One",
    summary: "Short description for cards.",
    description: "Longer text for the detail page.",
    stack: ["React", "Tailwind"],
    cover: "/img/project-one.jpg",
    gallery: ["/img/project-one-1.jpg", "/img/project-one-2.jpg"],
    links: { live: "", repo: "" },
  },
];
```

## i18n (simple JSON)

Create src/i18n/en.json and src/i18n/pt.json and a tiny helper.

Example helper (src/i18n/i18n.js):

```js
import en from "./en.json";
import pt from "./pt.json";

const dict = { en, pt };

export function t(lang, key) {
  return dict[lang]?.[key] ?? key;
}
```

Keep a top fixed toggle that updates the `lang` state at the app root.

## GSAP + ScrollTrigger

Install and register:

```js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
```

Use `useLayoutEffect` with refs and clean up on unmount.

## Intro screen behavior

Create a full screen entry section with a clear scroll hint or button. On click, smooth scroll to the next section using GSAP or `window.scrollTo`.

## Deploy (GitHub Pages)

1. Set base in vite.config.js:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portfolio_LucasCecon/",
  plugins: [react()],
});
```

2. Optional: add gh-pages for easy publish:

```bash
npm install -D gh-pages
```

package.json scripts:

```json
{
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Run:

```bash
npm run deploy
```

## Future scope (not MVP)

- Add a minigame easter egg section later after the core landing is stable.
