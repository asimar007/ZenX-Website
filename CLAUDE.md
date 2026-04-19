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
- **UI components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React
- **Fonts:** Geist (sans), Instrument Serif (serif) via `next/font/google`

## Project Structure

```text
app/
  layout.tsx        # Root layout — site-wide metadata (metadataBase, title.template, robots, google verification)
  page.tsx          # Home page — page-level metadata (title, description, OG, twitter, keywords)
  sitemap.ts        # Auto-generates /sitemap.xml
  robots.ts         # Auto-generates /robots.txt
  globals.css       # Global styles

components/
  Navbar.tsx        # Fixed top nav with mobile sheet drawer
  Hero.tsx          # Hero section — headline, CTA buttons, ProductHunt badge, stats
  FeedMockup.tsx    # Visual demo of filtered feed
  Features.tsx      # 6-feature grid
  Filters.tsx       # Filter categories showcase
  HowItWorks.tsx    # 3-step install flow
  CTA.tsx           # Bottom call-to-action
  Footer.tsx        # Footer with logo, copyright, links
  InstallButton.tsx # Browser-aware install button (Chrome/Brave/Edge/other)
  icons/            # Chrome, Brave, Edge, Github SVG icon components
  ui/               # shadcn/ui primitives (button, badge, card, separator, sheet)

lib/
  useBrowser.ts     # Hook that detects Chrome / Brave / Edge / other at runtime
  utils.ts          # cn() helper (clsx + tailwind-merge)

public/
  ZenX.png          # Logo (black on white — use mix-blend-multiply in CSS to hide white bg)
  ZenXMeta.png      # OG/social share image (1200×630)
  favicon.ico
```

## Key Decisions

- **Logo background:** `ZenX.png` has a white background. Use Tailwind `mix-blend-multiply` on the `<Image>` instead of editing the file — works on light backgrounds.
- **Install button:** Points to the GitHub release zip (not Chrome Web Store — not published there yet). When published, update `CHROME_STORE_URL` in `components/InstallButton.tsx` and the "Download" link in `components/Footer.tsx`.
- **Metadata split:** Layout holds site-wide defaults only. All page-specific SEO (title, description, OG, twitter) lives in `app/page.tsx`.
- **External images:** `api.producthunt.com` is allowlisted in `next.config.ts` `remotePatterns` for the ProductHunt badge in Hero.
- **No dark mode:** Site uses a single light theme (`bg-[#fafaf8]`). `mix-blend-multiply` on the logo would break on dark backgrounds.

## SEO Checklist (already implemented)

- [x] `metadata` export on `app/page.tsx` (title, description, keywords, OG, twitter card)
- [x] `metadataBase`, `title.template`, `robots`, `verification.google` in `app/layout.tsx`
- [x] `app/sitemap.ts` → `/sitemap.xml`
- [x] `app/robots.ts` → `/robots.txt`
- [x] Google Search Console verified (`p146AyuDsOE7YNi3hhCChmOGvua-T_6g6R2z1q_TFnE`)
- [x] Canonical URL set
- [x] OG image: `/ZenXMeta.png` (1200×630)
- [x] Twitter card: `summary_large_image`
- [ ] JSON-LD structured data (`SoftwareApplication` schema) — not yet added
- [ ] `app/icon.png` / `app/apple-icon.png` for Apple touch icon
- [ ] `app/manifest.ts` for PWA manifest
