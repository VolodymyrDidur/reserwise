# Reserwise

## Primary technologies:

1. React (v17)
2. npm (latest)
3. Vite (latest)

---

## Contributing

For contributing instructions, check [Contributing](./docs/Contributing.md)

## Code conventions

For code conventions, check [CodeConventions](./docs/CodeConventions.md)

---

## Important CLI commands

1. `npm run dev` default dev server start
2. `npm run build` build application

## High level folder structure

`src` folder

```
  index.html - HTML template for base page
  src
    └─ App.jsx - React entry point
    └─ main.tsx - TS entry point
    └─ index.scss - SCSS entry point(globals, reset, etc.)
    └─ assets - all static assets
    |   └─ icons - SVG icons as React components
    |   └─ images - PNG,JPEG images
    └─ components - shared common components
    └─ constants - all shared constant values
    └─ helpers - shared common helpers
    └─ hooks - shared common hook
    └─ pages - common pages(e.g. Login page)
    └─ routes
    |  └─ Routes.jsx - routes entry point
    └─ services - base implemetation of API interactions and common API services (e.g. Auth)
    └─ types - common types
    └─ styles - common styles/mixins/variables

```
