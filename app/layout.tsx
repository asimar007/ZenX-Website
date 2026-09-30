import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";

// Stand-ins for Suisse Intl (sans) and Faire Octave (serif, weight 300 only).
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-serif",
});

const siteUrl = "https://zenx.asimsk.site";
const siteTitle = "ZenX — Filter out the noise on X";
const siteDescription =
  "Automatically hides political arguments, hate speech, war news, and controversy from your X (Twitter) feed. Enjoy a calmer, cleaner timeline.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | ZenX",
  },
  description: siteDescription,
  keywords: [
    "ZenX",
    "X filter",
    "Twitter filter",
    "hide political content",
    "clean X feed",
    "block hate speech",
    "Twitter extension",
    "X browser extension",
    "social media filter",
    "calm Twitter",
  ],
  authors: [{ name: "Asim" }],
  creator: "Asim",
  publisher: "ZenX",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "ZenX",
    images: [
      {
        url: "/ZenXMeta.png",
        width: 1200,
        height: 630,
        alt: "ZenX — Filter out the noise on X",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/ZenXMeta.png`],
  },
  verification: {
    google: "p146AyuDsOE7YNi3hhCChmOGvua-T_6g6R2z1q_TFnE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      {/* Browser extensions (Grammarly et al.) inject attributes onto <body>
          before React hydrates; suppress that one-level diff, not real ones. */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
