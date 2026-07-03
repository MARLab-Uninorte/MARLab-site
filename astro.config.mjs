// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// ─────────────────────────────────────────────────────────────────────────
// GitHub Pages config
// Once the lab's repo exists, update these two lines (edit this file directly
// on GitHub.com -- pencil icon on the file page):
//   site: 'https://<org-or-username>.github.io'
//   base: '/<repo-name>'
// If deploying to a USER/ORG page (repo named exactly <name>.github.io), set base to '/'.
// ─────────────────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://MARLab-Uninorte.github.io',
  base: '/MARLab-site',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
