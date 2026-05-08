# Sam Casebeer — Portfolio

Personal portfolio site showcasing art (Blender 3D, Procreate, Illustration) and coding projects. Built with Next.js, Tailwind CSS, and Cloudinary.

---

## Tech Stack

- **[Next.js](https://nextjs.org/)** — React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first styling
- **[Framer Motion](https://www.framer.com/motion/)** — Animations and transitions
- **[GSAP + ScrollTrigger](https://gsap.com/)** — Scroll-driven layout behavior
- **[Zustand](https://zustand-demo.pmnd.rs/)** — Lightweight global state
- **[Cloudinary](https://cloudinary.com/)** — Image hosting and optimization
- **[Vercel](https://vercel.com/)** — Hosting and CI/CD

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [Cloudinary](https://cloudinary.com/) account (free tier works)

### Installation

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Create a `.env.local` file in the root of the project:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout, fonts, global dark background
    page.tsx            # Home — two-panel shell
    globals.css
  components/
    Sidebar.tsx         # Left panel — name, bio, nav
    Gallery.tsx         # Right panel — image grid
    GalleryFilter.tsx   # Medium tabs (Blender 3D / Procreate / etc.)
    ProjectCard.tsx     # Coding project cards
  content/
    projects/           # MDX files for coding project writeups
  lib/
    store.ts            # Zustand store (active section, active filter)
    cloudinary.ts       # Cloudinary config and helpers
  types/
    index.ts            # Shared TypeScript types
```

---

## Deployment

The site deploys automatically to [Vercel](https://vercel.com/) on every push to `main`. To set up:

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new)
2. Add the environment variables from `.env.local` in the Vercel dashboard
3. Deploy — Vercel auto-detects Next.js, no config needed

---

## Adding Content

### Art
Upload images to Cloudinary and reference them via the Cloudinary URL helpers in `src/lib/cloudinary.ts`.

### Coding Projects
Add a new `.mdx` file to `src/content/projects/`. Each file should include frontmatter:

```mdx
---
title: Project Name
description: Short description
tags: [React, TypeScript]
date: 2025-01-01
link: https://github.com/your-username/project
---

Your writeup here...
```

---

## License

MIT