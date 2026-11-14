# Devinda Kulatunge | Engineering Portfolio

A custom Astro portfolio for robotics, embedded systems, and computer engineering. Black background, red accents, locally bundled fonts, a project gallery, and Markdown project pages.

The primary website address is `https://devinda.io`. The source is hosted in the `devindakulatunge.github.io` repository, and the site is published through GitHub Pages. Canonical and social sharing URLs use the custom domain.

## Run locally

Use Node.js 24 and npm.

```bash
npm ci
npm run dev
```

Open the local address printed by Astro. The `--ignore-lock` flag keeps the development server in the foreground when run by an editor or preview supervisor.

```bash
npm run build
npm run preview
```

## Where to edit

| Content                                            | File                                  |
| -------------------------------------------------- | ------------------------------------- |
| Email, links, and shared metadata                  | `src/data/profile.ts`                 |
| Compact introduction, background, and experience   | `src/pages/index.astro`               |
| Colors, typography, spacing, and responsive layout | `src/styles/global.css`               |
| Project summaries and writeups                     | `src/content/projects/*.md`           |
| Images and videos                                  | `public/images/` and `public/videos/` |
| Project page layout                                | `src/pages/work/[id].astro`           |
| GitHub Pages publishing                            | `.github/workflows/deploy.yml`        |

## Add a project

Create `src/content/projects/your-project.md`. Its filename becomes the URL, such as `/work/your-project/`.

```markdown
---
title: Your Project Name
shortTitle: A clear title for the gallery
description: One sentence explaining what the project does.
category: Robotics
status: In development
year: '2026'
order: 4
image: /images/your-project.jpg
imageAlt: A useful description of the image.
tags: [C++, Python]
role: Explain what you personally contributed.
contribution: A short version of your contribution for the project card.
progress: What has actually been built or tested, and what is still ongoing.
context: Personal project
---

## The problem

Explain the goal and the constraints.

## My contribution

Describe your work and the important decisions.

## Results

Include evidence and state the limits of what was tested.
```

Categories currently supported by the schema are `Robotics`, `Embedded systems`, and `Digital design`. Update `src/content.config.ts` to add a category. The homepage shows every project directly, without filters. Each card includes its stage and a short personal contribution; the project page adds a fuller contribution and progress summary before the illustration.

Optional frontmatter fields:

- `repository`: a real repository URL, shown as a link on the project page.
- `video`: an MP4 or WebM path, used as a muted, looping gallery preview with the image as its poster.

Keep videos short and compressed. Use an image as the poster so the preview remains useful before the video loads.

## Publish to GitHub Pages

1. In the GitHub repository, open **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Merge the portfolio source into `main`. The included workflow builds and publishes it. Pull requests run the build without publishing.
4. Open the deployment link from the completed workflow.

## Custom domain

1. Add `devinda.io` as the custom domain in **Settings → Pages**.
2. Follow GitHub's current DNS instructions at your domain provider: <https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site>.
3. Enable **Enforce HTTPS** after GitHub has issued the certificate.

The build defaults to `https://devinda.io` for canonical and social sharing URLs. A repository Actions variable named `SITE_URL` can override this address for another deployment.

## Content notes

The project writeups describe ongoing work and coursework. No benchmark or clinical validation results are invented. The SVG project illustrations are architecture concepts, not photographs, simulator screenshots, or measured waveform captures.

The initial profile uses the supplied university email. Update `src/data/profile.ts` if you prefer another public contact address. There is no inactive résumé button; add a link once you have supplied the PDF you want to share.

The layout takes inspiration from the project presentation of Conor Wood Hayes. A compact introduction leads directly into the work, with the full personal background below it. Content is visible without JavaScript; the navigation remains available while scrolling. The implementation and illustrations are original.
