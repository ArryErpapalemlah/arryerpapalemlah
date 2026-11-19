// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages as a project site:
// https://arryerpapalemlah.github.io/arryerpapalemlah/
export default defineConfig({
    site: 'https://arryerpapalemlah.github.io',
    base: '/arryerpapalemlah',
    vite: {
        plugins: [tailwindcss()],
    },
});
