# Centurion Restoration

Marketing site for Centurion Restoration — 24/7 water, fire, mold, and asbestos
restoration. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

Migrated from a single design-tool export (`Centurion Restoration - Site.dc.html`)
into a component-based Astro project: content lives in `src/data/site.ts`, the
palette and type scale are design tokens in `src/styles/global.css`, and each
page section is its own `.astro` component.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321/centurion/
```

## Build

```sh
npm run build    # outputs static site to ./dist
npm run preview  # serve the production build locally
```

## Project structure

```
src/
  data/site.ts          # all copy + config toggles (single source of truth)
  styles/global.css     # design tokens + shared primitives
  layouts/Layout.astro  # <head>, fonts, favicon
  components/            # Nav, Hero, Services, WhyUs, Process, Reviews, …
  pages/index.astro     # composes the page
public/favicon.svg      # crest favicon
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with
`withastro/action` and publishes to GitHub Pages via `actions/deploy-pages`.

The site is served from a project sub-path, so `astro.config.mjs` sets:

```js
site: 'https://doomspork.github.io',
base: '/centurion',
```

If you move to a custom domain or a user page (`doomspork.github.io`), drop
`base` and update `site`.
