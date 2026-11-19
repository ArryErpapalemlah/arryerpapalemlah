# Arry Erpapalemlah — Portfolio

Personal portfolio built with [Astro](https://astro.build) and Tailwind CSS, deployed to GitHub Pages.

**Live:** https://arryerpapalemlah.github.io/arryerpapalemlah/

## Editing content

All text — profile, tech stack, projects, experience, education — lives in
[`src/data/profile.ts`](src/data/profile.ts). The resume download is
`public/Arry-Erpapalemlah-CV.pdf`.

## Commands

| Command           | Action                                   |
| :---------------- | :--------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`   |
| `npm run preview` | Preview the build locally                |

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. In the repository settings, set
**Pages → Build and deployment → Source** to **GitHub Actions** (one-time).

If you rename the repository, update `base` in `astro.config.mjs` to match.
