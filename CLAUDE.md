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
- **UI components:** none — plain Tailwind markup. Radix UI is used directly for the one drawer (`Dialog` in `Navbar.tsx`).
- **Icons:** Lucide React
- **Fonts:** Geist (sans), Instrument Serif (serif) via `next/font/google`

## Project Structure

```text
app/
  layout.tsx        # Root layout — site-wide metadata (metadataBase, title.template, robots, google verification)
  page.tsx          # Home page — composes the sections, no metadata of its own
  sitemap.ts        # Auto-generates /sitemap.xml
  robots.ts         # Auto-generates /robots.txt
  globals.css       # Global styles

components/
  Navbar.tsx        # Fixed top nav + mobile drawer (Radix Dialog, inlined)
  Hero.tsx          # Hero section — headline, CTA buttons, ProductHunt badge, stats
  FeedMockup.tsx    # Visual demo of filtered feed
  Features.tsx      # 6-feature grid
  Filters.tsx       # Filter categories showcase
  HowItWorks.tsx    # 3-step install flow
  CTA.tsx           # Bottom call-to-action
  Footer.tsx        # Footer with logo, copyright, links
  InstallButton.tsx # Browser-aware install button (Chrome/Brave/Edge/other)
  icons/            # Chrome, Brave, Edge, Github SVGs — all take SVGProps<SVGSVGElement>

lib/
  useBrowser.ts     # Detects Chrome / Brave / Edge / other at runtime

public/
  ZenX.png          # Logo (black on white — use mix-blend-multiply in CSS to hide white bg)
  ZenXMeta.png      # OG/social share image (1200×630)
  favicon.ico
```

## Key Decisions

- **Logo background:** `ZenX.png` has a white background. Use Tailwind `mix-blend-multiply` on the `<Image>` instead of editing the file — works on light backgrounds.
- **Install button:** Points to the GitHub release zip (not Chrome Web Store — not published there yet). When published, update `DOWNLOAD_URL` in `components/InstallButton.tsx` and the `LINKS` "Download" entry in `components/Footer.tsx`.
- **Browser detection:** `useBrowser` server-renders as `"chrome"` (the common case) so the install button doesn't visibly change label on hydration. Brave needs an async probe and reports a Chrome UA until it answers.
- **ProductHunt badge:** plain `<img>`, not `next/image`. It's a remote SVG and next/image refuses to optimize SVG without `dangerouslyAllowSVG`. There is no `next.config.ts`.
- **No dark mode:** Site uses a single light theme (`bg-[#fafaf8]`). `mix-blend-multiply` on the logo would break on dark backgrounds. `globals.css` carries no `.dark` block — don't reintroduce one without fixing the logo.
- **Section nav:** plain `#anchor` links plus `scroll-behavior` / `scroll-padding-top` in `globals.css` (the padding clears the fixed navbar). No JS scroll handlers.
- **Drawer animation:** four keyframes in `globals.css` driven off Radix's `data-state` via `data-[state=open]:animate-[...]`. Deliberately not `tw-animate-css`.
- **Colors:** section styling uses literal hex (`#fafaf8`, `#e5e5e0`, `#6b7280`, `#9ca3af`). `globals.css` only defines the handful of theme tokens actually referenced — add a token only when something uses it.

## SEO Checklist (already implemented)

- [x] Full `metadata` export in `app/layout.tsx` (title/template, description, keywords, OG, twitter card, robots, canonical, google verification). `app/page.tsx` has none.
- [x] `app/sitemap.ts` → `/sitemap.xml`
- [x] `app/robots.ts` → `/robots.txt`
- [x] Google Search Console verified (`p146AyuDsOE7YNi3hhCChmOGvua-T_6g6R2z1q_TFnE`)
- [x] Canonical URL set
- [x] OG image: `/ZenXMeta.png` (1200×630)
- [x] Twitter card: `summary_large_image`
- [ ] JSON-LD structured data (`SoftwareApplication` schema) — not yet added
- [ ] `app/icon.png` / `app/apple-icon.png` for Apple touch icon
- [ ] `app/manifest.ts` for PWA manifest
