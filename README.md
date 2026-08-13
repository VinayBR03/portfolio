# Vinay B R — Portfolio

Personal portfolio site built with Vite, React, TypeScript, and Tailwind CSS v4, deployed to GitHub Pages.

**Live site:** <https://VinayBR03.github.io/portfolio>

## Tech Stack

- **Build:** Vite
- **UI:** React + TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first config via `@theme`, no `tailwind.config.js`)
- **Animation:** Framer Motion
- **Icons:** `react-icons`, `@devicon/react`, `@thesvg/react`
- **Contact form:** Web3Forms
- **Deployment:** GitHub Actions → GitHub Pages

## Project Structure

```text
src/
├── assets/            # Images used in components (profile photo, project screenshots)
├── components/
│   ├── common/         # Reusable UI (Button, Card, Typewriter, ProjectIcon, etc.)
│   ├── layout/          # Navbar, Footer, ScrollProgress
│   └── sections/        # Page sections (Hero, About, Projects, Skills, Experience, Contact)
├── data/               # Content as data (projects, skills, experience, certifications, social, nav)
├── hooks/              # useTheme, useScrollSpy, useLocalStorage
├── styles/globals.css   # Tailwind import, theme tokens, dark mode variant, global CSS
├── types/              # Shared TypeScript types
└── utils/              # helpers.ts (scrollToSection, scrollToTop, openPopup), cn.ts
```

## Local Development

```bash
npm install
npm run dev -- --host
```

Visit `http://localhost:5173/portfolio` or `http://192.168.x.x:5173/portfolio`.

## Environment Variables

Create a `.env` file in the project root (never commit this file):

```text
VITE_WEB3FORMS_KEY=your_web3forms_access_key
VITE_OPEN_TO_WORK=true
```

| Variable | Purpose |
| --- | --- |
| `VITE_WEB3FORMS_KEY` | Access key for the Contact form submission (web3forms.com) |
| `VITE_OPEN_TO_WORK` | `true` / `false` — toggles the "Looking for new opportunities" banner, the Resume button (Hero + mobile nav), and swaps Hero's second CTA between Resume/Contact Me |

Restart the dev server after changing `.env` — Vite only reads it on server start, not via hot reload.

To use the Resume button, place your resume PDF at `public/Resume.pdf`.

## Deployment

Deployment is automated via `.github/workflows/deploy.yml` on every push to `main`, and can also be triggered manually from the **Actions** tab (**Run workflow**) — useful when only a secret/variable changed and no code changed, since GitHub Actions has no automatic trigger for that.

Required repo configuration (**Settings → Secrets and variables → Actions**):

- **Secrets:** `VITE_WEB3FORMS_KEY`
- **Variables:** `VITE_OPEN_TO_WORK`

Also set **Settings → Pages → Source** to **GitHub Actions**.

## Content Updates

Most content is data-driven — update these instead of touching components:

- `src/data/projects.ts` — featured project + project grid
- `src/data/skills.ts` — tech stack icons (devicon/thesvg imports)
- `src/data/experience.ts` — education + highlights
- `src/data/certifications.ts` — certifications (add Google Drive links to the `link` field to make cards clickable)
- `src/data/social.ts` — contact info and social links
