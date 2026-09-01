# 🚀 Aarav Pant — Portfolio

Personal portfolio site — career summary, experience, and the three
shipped projects (Cloud Security Posture Scanner, Security RAG
Assistant, Job Application Tracker), pulled from the resume so there's
one source of truth for the content, not three copies to keep in sync.

**Status:** ✅ built locally, not yet deployed.

---

## 🎨 Design
Dark, single-committed theme rather than a light/dark toggle — a
"futuristic" personal-brand identity, not a utility app. One accent
color (cyan) carries all the boldness; everything else stays quiet.

- **Type** — [Chakra Petch](https://fonts.google.com/specimen/Chakra+Petch)
  for display headings (angular, technical, distinct from the generic
  Inter/Space Grotesk look), [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans)
  for body copy, [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)
  for labels/data — the same family used in the accompanying interview-prep
  PDF, for a consistent personal brand across documents.
- **3D background** — a Three.js constellation/particle field in the
  hero, rotating slowly, reacting to mouse position, and fading out as
  the viewer scrolls past the hero instead of persisting behind dense
  text lower on the page.
- **Scroll reveals** — sections and cards fade/slide into view via
  `IntersectionObserver`, not an animation library.

## 🧱 Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Three.js (hero background)
- react-icons (skill logos — Simple Icons + Font Awesome, with a
  Tabler-icon fallback for the handful of skills without a real brand
  mark, e.g. C#, CI/CD)

## ✅ Sections
- [x] 🏠 Hero — name, role, tagline, CTAs
- [x] 📝 About — career summary + certification progress
- [x] 💼 Experience — full timeline, including two roles not on the
      1-page resume (space-constrained there; the site has room)
- [x] 🗂️ Projects — all 3 shipped projects, GitHub + live demo links
- [x] 🛠️ Skills — grouped, icon-labeled, pulled straight from the resume
- [x] 📬 Contact — email / LinkedIn / GitHub

## 🚫 Explicitly out of scope for v1
- Mobile nav menu (nav links hide below `sm:`; the page is short enough
  that scrolling covers it)
- Blog / long-form writing section
- CMS-backed content — data lives in `src/data/resume.ts`, edited directly

## 🚀 Setup
```bash
npm install
npm run dev
```

Content lives in `src/data/resume.ts` (experience, projects, skills) and
`src/data/skillIcons.tsx` (skill → icon mapping) — edit those rather than
the components to update what's shown.

## 📌 Status
Built and visually verified locally (desktop + mobile viewports). Not
yet deployed — Vercel is the natural target given the stack. See `TODO.md`.
