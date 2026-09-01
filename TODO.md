# TODO — Portfolio Website

## Build (this session)
- [x] Next.js + TypeScript + Tailwind v4 scaffold
- [x] Content pulled from resume: `src/data/resume.ts`, `src/data/skillIcons.tsx`
- [x] Hero, About, Experience, Projects, Skills, Contact sections
- [x] Three.js constellation background in the hero, scroll-fading
- [x] Scroll-triggered reveal animations (`IntersectionObserver`, no library)
- [x] Verified visually: desktop above-the-fold, full page, mobile (390px)
- [x] `npx tsc --noEmit` and `npx eslint src/` both clean

- [x] Deploy to Vercel: **https://aarav-pant.vercel.app** (clean custom
      `.vercel.app` alias, publicly accessible — SSO deployment
      protection disabled project-wide since this is meant to be fully
      public; see README's "Deploy notes" for the alias/protection
      gotchas found doing this). Resume's Portfolio link updated to
      point here.
- [x] Domain color system: cyan/violet/amber tags Cloud Security/AI-ML/
      Full-Stack consistently across Projects and Skills
- [x] Resume attached as a downloadable PDF, linked from nav + footer
- [x] Relevant Coursework section added

## Next
- [ ] `aaravpant.com`: registered via Hostinger (2024-01-12, expires
      2027-01-12) but currently parked with no DNS configured — log
      into Hostinger (check email from around Jan 2024 for the
      account) and point it at this Vercel deployment once access is
      recovered. Not urgent — aarav-pant.vercel.app works fine as-is.
- [ ] Mobile nav menu, if the page grows enough that scroll-to-section
      alone stops being enough
- [ ] Fill in the McMaster AI Society experience bullets once available
      (LinkedIn shows no description for that role yet)
- [ ] Resume screenshot / OG image for link previews
