# 🚀 Aarav Pant — Portfolio

**🔗 Live: https://aarav-pant.vercel.app**

Personal portfolio site — career summary, experience, and the three
shipped projects (Cloud Security Posture Scanner, Security RAG
Assistant, Job Application Tracker), pulled from the resume so there's
one source of truth for the content, not three copies to keep in sync.

**Status:** ✅ deployed and live on Vercel, under a clean `.vercel.app`
alias (not the auto-generated random-suffix one — see Deploy notes
below). `aaravpant.com` is registered (via Hostinger, doesn't expire
until Jan 2027) but currently parked with no DNS configured — worth
pointing at this deployment once registrar access is sorted out, but
not a blocker.

---

## 🎨 Design
Dark, single-committed theme rather than a light/dark toggle — a
"futuristic" personal-brand identity, not a utility app. A domain color
system (not decoration) carries the boldness: cyan tags Cloud Security
work, violet tags AI/ML, amber tags full-stack/frameworks, applied
consistently across Projects and Skills so color encodes meaning.

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

## ☁️ Deploy notes
```bash
vercel deploy --prod --yes
vercel alias set <new-deployment-url> aarav-pant.vercel.app
```
Two real gotchas found setting this up:
- **The clean alias doesn't auto-track new deploys.** Only Vercel's own
  auto-generated production alias re-points itself on every `--prod`
  deploy; a manually-set alias (`vercel alias set`) is a static pointer
  to whatever deployment it was last assigned to. Re-run the `alias set`
  command above after every deploy, or the clean URL silently serves a
  stale build.
- **New Vercel projects have SSO deployment protection on by default**
  for every URL except a real custom domain — every `.vercel.app` alias
  (including a clean custom one) 302s to a Vercel login wall until it's
  disabled: `vercel project protection disable portfolio-website --sso`.

## 📌 Status
Built, visually verified (desktop + mobile viewports), and deployed to
Vercel — see the link at the top. See `TODO.md` for what's left
(custom domain, McMaster AI Society bullets).
