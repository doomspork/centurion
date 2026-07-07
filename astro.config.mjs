// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages deployment configuration.
// - `site`  : the full origin, used for canonical URLs, sitemaps, and absolute asset paths.
// - `base`  : the repository sub-path the site is served from (project page).
//             Served at https://doomspork.github.io/centurion/
// If this ever moves to a user page (doomspork.github.io) or a custom domain,
// drop `base` and update `site` accordingly.
export default defineConfig({
  site: 'https://doomspork.github.io',
  base: '/centurion',
  // Trailing-slash "ignore" keeps both /centurion/ and /centurion work cleanly on Pages.
  trailingSlash: 'ignore',
});
