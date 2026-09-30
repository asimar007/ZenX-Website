@AGENTS.md

# ZenX Website

Marketing/landing site for **ZenX** — a browser extension that filters political arguments, hate speech, war news, and controversy from X (Twitter) feeds.

- **Live URL:** [zenx.asimsk.site](https://zenx.asimsk.site)
- **Extension repo:** [github.com/asimar007/ZenX](https://github.com/asimar007/ZenX)
- **Extension download:** [v1.0.0 release](https://github.com/asimar007/ZenX/releases/tag/v1.0.0)
- **ProductHunt:** [ZenX on ProductHunt](https://www.producthunt.com/products/zenx)

## Tech Stack

- **Framework:** Next.js 16.2.1 (App Router) — read `node_modules/next/dist/docs/` before writing any Next.js code
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI components:** none — plain Tailwind markup. The mobile drawer is a native `<dialog>` (no Radix).
- **Icons:** Lucide React
- **Fonts:** Inter (sans, stands in for Suisse Intl), Cormorant Garamond 300 (serif, stands in for Faire Octave) via `next/font/google`

## Project Structure

```text
app/
  layout.tsx        # Root layout — site-wide metadata (metadataBase, title.template, robots, google verification)
  page.tsx          # Home page — composes the sections, no metadata of its own
  sitemap.ts        # Auto-generates /sitemap.xml
  robots.ts         # Auto-generates /robots.txt
  globals.css       # Global styles
  favicon.ico, icon.png  # Site icons (file conventions)

components/
  Navbar.tsx        # Static top nav + mobile drawer (native <dialog>)
  Hero.tsx          # Keylime copy panel + slate product panel (FeedMockup), stats strip
  FeedMockup.tsx    # Interactive filtered-feed demo, rendered inside Hero
  Features.tsx      # 6-feature grid
  Filters.tsx       # Filter categories showcase
  HowItWorks.tsx    # 3-step install flow
  CTA.tsx           # Bottom call-to-action
  Footer.tsx        # Footer with logo, copyright, links
  InstallButton.tsx # Browser-aware install button (Chrome/Brave/Edge/other)
  icons/Github.tsx  # Inline SVG (uses currentColor, so it stays a component)

lib/
  useBrowser.ts     # Detects Chrome / Brave / Edge / other at runtime

public/
  ZenX.png          # Logo (black on white — use mix-blend-multiply in CSS to hide white bg)
  ZenXMeta.png      # OG/social share image (1200×630)
  chrome.svg, brave.svg, edge.svg  # Install-button browser logos
```

## Key Decisions

- **Logo background:** `ZenX.png` has a white background. Use Tailwind `mix-blend-multiply` on the `<Image>` instead of editing the file — works on light backgrounds.
- **Install button:** Points to the GitHub release zip (not Chrome Web Store — not published there yet). When published, update `DOWNLOAD_URL` in `components/InstallButton.tsx` and the `LINKS` "Download" entry in `components/Footer.tsx`.
- **Browser detection:** `useBrowser` server-renders as `"chrome"` (the common case) so the install button doesn't visibly change label on hydration. Brave needs an async probe and reports a Chrome UA until it answers.
- **ProductHunt badge:** plain `<img>`, not `next/image`. It's a remote SVG and next/image refuses to optimize SVG without `dangerouslyAllowSVG`. There is no `next.config.ts`.
- **No dark mode:** Site uses a single light theme (cream paper `#fffefc`). `mix-blend-multiply` on the logo would break on dark backgrounds. `globals.css` carries no `.dark` block — don't reintroduce one without fixing the logo.
- **Section nav:** plain `#anchor` links plus `scroll-behavior` in `globals.css`. Navbar is not sticky (design system). No JS scroll handlers.
- **Drawer:** native modal `<dialog>` in `Navbar.tsx` — Esc, focus trap and top layer come free; a click on the dialog element itself is the backdrop. Slide/fade is the `.drawer` rule in `globals.css` (`@starting-style` + `transition-behavior: allow-discrete`); scroll lock is `html:has(dialog[open])`. Deliberately not `tw-animate-css`.
- **Design system ("botanical greenhouse on cream paper"):** tokens live in `@theme` in `globals.css` — `forest-ink` (every CTA/heading/link), `forest-shadow` (hover), surfaces `cream-paper` → `keylime-wash` → `mint-veil` → `sage-mist` → `slate-hush`, text `charcoal`, hairlines `border-mist`. Rules: no box-shadows, no colored card borders, no hues outside the palette, serif headings weight 300 only (never bold), `rounded-xl` (14px) cards/buttons, `rounded-lg` (7px) nav items, `rounded-full` badges, 11px/600 uppercase 0.08em only for eyebrows. Slate panel is reserved for the product mockup.
- **Browser icons on install button:** static `public/{chrome,brave,edge}.svg`, named after `BrowserName` so `InstallButton` builds the path; kept in brand colours (owner's call) on the forest button.
- **Page width:** containers are `max-w-[1440px]` so desktop gutters stay tight; sections pad `px-4 sm:px-6 lg:px-8`.

## SEO Checklist (already implemented)

- [x] Full `metadata` export in `app/layout.tsx` (title/template, description, OG, twitter card, googleBot image preview, canonical, google verification). No `keywords` — Google ignores them. `app/page.tsx` has none.
- [x] `app/sitemap.ts` → `/sitemap.xml`
- [x] `app/robots.ts` → `/robots.txt`
- [x] Google Search Console verified (`p146AyuDsOE7YNi3hhCChmOGvua-T_6g6R2z1q_TFnE`)
- [x] Canonical URL set
- [x] OG image: `/ZenXMeta.png` (1200×630)
- [x] Twitter card: `summary_large_image` (title/description/image fall back to the og: tags)
- [ ] JSON-LD structured data (`SoftwareApplication` schema) — not yet added
- [x] `app/icon.png` (site icon, alongside `app/favicon.ico`)
- [ ] `app/apple-icon.png` for Apple touch icon
- [ ] `app/manifest.ts` for PWA manifest
