# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A [Slidev](https://sli.dev) slide deck for a React Norway 2026 conference talk. Content is still the
default Slidev starter template (`slides.md`) — it has not yet been customized for the actual talk.

## Commands

- `pnpm run dev` — start the dev server with live reload, opens browser (http://localhost:3030)
- `pnpm run build` — build static deck to `dist/`
- `pnpm run export` — export slides to PDF/PNG/PPTX

Package manager is pnpm (`pnpm-lock.yaml`, `pnpm-workspace.yaml`), but `package.json` scripts are also
runnable via `pnpm run <script>` since they just shell out to `slidev`.

There is no lint/test setup in this repo.

## Architecture

- `slides.md` — the deck itself. Each slide is a `---`-delimited section with YAML frontmatter
  (`theme`, `transition`, `layout`, etc.) followed by Markdown/Vue content. This is the only file to
  edit for slide content and ordering.
- `pages/*.md` — slides split out of the main file and pulled in via `src: ./pages/foo.md` in a
  slide's frontmatter (see the "Imported Slides" section of `slides.md`).
- `components/*.vue` — custom Vue components usable directly inside slide Markdown (e.g. `<Counter :count="10" />`).
- `snippets/*.ts` — external code files embedded into slides via `<<< @/snippets/file.ts#region`
  (region markers use `// #region name` / `// #endregion name` comments) or imported into
  `{monaco}` / `{monaco-run}` live-editor code blocks.
- Deploys as a static SPA: `netlify.toml` and `vercel.json` both build with `npm run build` and serve
  `dist/` with an SPA rewrite (`/*` → `/index.html`).

## Theme («Rock & React», retning A)

- `style.css` — global theme: black background with a faint diagonal texture, yellow `#ffe600`
  and pink `#ff3fa4` accents, Bebas Neue for headings, JetBrains Mono for body. CSS variables `--rr-*`.
  ALL component styling lives here (the components below use these classes rather than scoped styles).
- Components in `components/` (auto-imported by Slidev, used as `<Name />` in slides and layouts):
  `SlideFooter.vue` (title, page counter, «Presentert av» + Capgemini logo from `public/capgemini-logo.svg`),
  `CoverWedge.vue` (yellow wedge on the cover), `SectionPhoto.vue` (big round speaker photo on section slides),
  `SpeakerPhoto.vue` (small photo top-right on content slides, 25 % zoomed inside its frame; grows to match the title's height via ResizeObserver when the title wraps to 2 lines).
- `WcagDemo.vue` — the live WCAG demo on slide 5. It takes `:clicks="$clicks"` and reveals the five
  segments BACKWARDS (5→1, which is itself the "visual order ≠ reading order" point); each click fixes
  the previous point and breaks the next (contrast → focus ring → motion → missing label → no captions).
  The slide declares `clicks: 10` because the component drives the clicks itself rather than via `v-click`.
- `QrCode.vue` — `<QrCode url="…" label="…" :size="180" align="left|center|right" />`. Generates the QR locally with the `qrcode`
  package (no network at presentation time). Dark modules on a white card with a yellow frame — inverted
  QR codes are not reliably scannable. Used on the closing «Takk» slide.
- `global-top.vue` mounts `<SlideFooter>` on every slide; `layouts/rock-cover.vue` uses `<CoverWedge />`;
  `layouts/rock-section.vue` uses `<SectionPhoto />` and reads `photo`/`photoAlt` from slide frontmatter.
- View transitions: `SectionPhoto` and `SpeakerPhoto` share `view-transition-name: speaker-photo`; talk titles
  carry `.view-transition-talk-title` on both slides; section slides set `transition: view-transition`.
- Speaker photos live in `public/speakers/<slug>.jpg` (400×400, from reactnorway.com).
- Helper classes in `style.css`: `.rr-kicker`, `.rr-diamond`, `.rr-stat` (big numbers), `.rr-program` (program-slide dimming), `.rr-emoji` (bumps font-size 1.5x for emoji text, e.g. `<span class="rr-emoji">🎉</span>`).
- Language: slides are Norwegian (bokmål); use "AI", not "KI".
- This deck is plain Vue. React support (`slidev-addon-react`) was tried and reverted; old files are parked
  in `_to_delete/`. Do not reintroduce it without a reason.

## Do not format slides.md

Prettier (and most Markdown formatters) insert blank lines around `---`, which breaks Slidev's per-slide
frontmatter. `.prettierignore` excludes `slides.md`, `slides.starter.md` and `pages/*.md`, and
`.vscode/settings.json` turns off format-on-save for Markdown. Keep it that way.

## Gotchas (hard-won)

- **The footer must live in `global-top.vue`, not `global-bottom.vue`.** Slidev's "bottom"/"top" mean the
  bottom/top *layer*, not the bottom/top of the slide. `global-bottom` renders as the FIRST child of
  `.slidev-slide-content`, i.e. underneath the slide, and this theme gives `.slidev-layout` an opaque
  background — so a footer placed there is painted and then completely covered.
- **`$slidev` only exists inside `<template>`.** In `<script setup>` use `import { useNav } from '@slidev/client'`
  and read `nav.currentPage.value` / `nav.total.value`.
- **Do not format `slides.md`.** See the section above — Prettier breaks per-slide frontmatter.
- **Click-through needs the grid layout, not `layout: two-cols`.** `::right::` splits the slide before the
  click numbering, so use slide 5's `<div class="grid grid-cols-2 gap-8">` wrapper instead. All content slides
  from slide 7 onward now use this pattern (`<h3 v-click="N">` paired with `<v-clicks at="N">` for the list
  right after it, or `<p v-click="N">`/`<div v-click="N">` for a heading with a single block of prose) so every
  talk's takeaways click through one point at a time, same as slides 5 and 6. Section-divider slides
  (`layout: rock-section`) and the closing "Takk" slide have no clicks — nothing there to click through.
- **`SpeakerPhoto` must be the element right after the `h1.has-speaker` in markdown.** It measures its
  `previousElementSibling`'s rendered height to size itself, so it only grows to match a 2-line title when
  it's the very next node — don't put another element (a wrapping `<div>`, a comment) between the title and
  `<SpeakerPhoto>`. It also re-measures on a `ResizeObserver`, not just on mount, because Bebas Neue loads
  async and can swap in after first paint, changing whether the title wraps.
