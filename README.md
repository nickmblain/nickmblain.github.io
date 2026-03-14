# nickmblain.github.io

Personal portfolio and resume site for Nick Blain — a frontend developer with 12+ years of experience. Built as a Vue 3 SPA and deployed via GitHub Pages.

## About the Project

This site serves as a living resume: work history, projects, and recommendations all in one place. It's intentionally simple — no backend, no SSR, just a client-side Vue app.

**A note on Tailwind CSS:** Tailwind was used here purely out of curiosity to see how it felt in a real project. The verdict: it's not something I'd recommend or reach for again. The utility-class approach trades readability and maintainability for speed of prototyping in a way that doesn't hold up well at scale or in team environments.

## Stack

- **Vue 3** — Composition API, `<script setup>`
- **Vue Router** — client-side routing
- **Tailwind CSS** — used as an experiment (see note above)
- **SCSS** — for anything Tailwind made awkward
- **Vite** — build tooling
- **GitHub Actions** — CI/CD to GitHub Pages

## Getting Started

```bash
git clone https://github.com/nickmblain/nickmblain.github.io.git
cd nickmblain.github.io
npm install
```

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Directory Structure

```
src/
  assets/         Static assets (images, fonts, icons)
  components/     Feature components (navbar, experience, projects, etc.)
  pages/          Top-level page views
  App.vue         Root component
public/           Public static files
```

## License

MIT
