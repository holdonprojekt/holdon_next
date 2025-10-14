## Overview

Modern refactor of the HoldOn project website using the Next.js App Router and Tailwind CSS while keeping the original visual language. Content is served in Hungarian, English and Deutsch from JSON dictionaries and rendered on the server for fast loads.

## Available Scripts

Use [pnpm](https://pnpm.io) for dependency and script management:

- `pnpm dev` - start the development server at [http://localhost:3000](http://localhost:3000).
- `pnpm lint` - run ESLint with the project configuration.
- `pnpm build` - create an optimized production build (includes type checking).

## Project Highlights

- App Router structure with locale-aware routes (`/hu`, `/en` and `/de`) and automatic redirect from `/`.
- Tailwind CSS utility styling with a small layer of custom components to mirror the original layout.
- Server-rendered rich text sections fed by `src/locales/{lang}/common.json` while press content lives in `src/content/press.ts`.
- Responsive navigation with an accessible mobile menu, localized hero scroll hint, and embed support for the Instagram hashtag feed.

## Localization

- Default locale: `hu`.
- Translation dictionaries: `src/locales/hu/common.json`, `src/locales/en/common.json`.
- Shared helpers in `src/lib/i18n.ts` expose utilities for loading dictionaries and iterating supported locales.

## Deployment Notes

- Ensure `NEXT_PUBLIC_SITE_URL` (if introduced later) points to the final domain for correct metadata URLs.
- The app relies on public assets under `public/assets` and the EmbedSocial widget script loaded at runtime.
