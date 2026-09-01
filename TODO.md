# TODO — Portfolio Website

## Build (this session)
- [x] Next.js + TypeScript + Tailwind v4 scaffold
- [x] Content pulled from resume: `src/data/resume.ts`, `src/data/skillIcons.tsx`
- [x] Hero, About, Experience, Projects, Skills, Contact sections
- [x] Three.js constellation background in the hero, scroll-fading
- [x] Scroll-triggered reveal animations (`IntersectionObserver`, no library)
- [x] Verified visually: desktop above-the-fold, full page, mobile (390px)
- [x] `npx tsc --noEmit` and `npx eslint src/` both clean

- [x] Deploy to Vercel: **https://portfolio-website-ten-virid-48.vercel.app**
      (production, publicly accessible — the auto-assigned
      `*-panta3s-projects.vercel.app` alias requires Vercel SSO login,
      so that one isn't the one to share). Resume's Portfolio link
      updated to point here.

## Next
- [ ] `aaravpant.com`: registered via Hostinger (2024-01-12, expires
      2027-01-12) but currently parked with no DNS configured — log
      into Hostinger (check email from around Jan 2024 for the
      account) and point it at this Vercel deployment once access is
      recovered. Not urgent — the `.vercel.app` URL works fine as-is.
- [ ] Mobile nav menu, if the page grows enough that scroll-to-section
      alone stops being enough
- [ ] Fill in the McMaster AI Society experience bullets once available
      (LinkedIn shows no description for that role yet)
- [ ] Resume screenshot / OG image for link previews
