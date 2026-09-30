"use client";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { useBrowser, type BrowserName } from "@/lib/useBrowser";

const DOWNLOAD_URL = "https://github.com/asimar007/ZenX/releases/tag/v1.0.0";

const LABELS: Record<BrowserName, string> = {
  chrome: "Add to Chrome",
  brave: "Add to Brave",
  edge: "Add to Microsoft Edge",
  other: "Add to Browser",
};

export function InstallButton({ size = "lg" }: { size?: "sm" | "lg" }) {
  const browser = useBrowser();

  return (
    <a
      href={DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-forest-ink text-cream-paper text-body hover:bg-forest-shadow transition-colors ${
        size === "sm" ? "px-3.5 py-1.75" : "px-7 py-4.5"
      }`}
    >
      {browser === "other" ? (
        <Download className="size-4 shrink-0" />
      ) : (
        // public/{chrome,brave,edge}.svg — named after BrowserName.
        // size-4 pins both sides: preflight's `height: auto` would otherwise stretch
        // the non-square Brave logo and trip next/image's aspect-ratio warning.
        <Image src={`/${browser}.svg`} alt="" width={16} height={16} className="size-4 shrink-0" />
      )}
      <span>{LABELS[browser]}</span>
      {size === "lg" && <ArrowRight className="size-4 shrink-0" />}
    </a>
  );
}
