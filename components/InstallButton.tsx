"use client";
import type { ComponentType, SVGProps } from "react";
import { ArrowRight, Download } from "lucide-react";
import { useBrowser, type BrowserName } from "@/lib/useBrowser";
import BraveIcon from "./icons/Brave";
import ChromeIcon from "./icons/Chrome";
import EdgeIcon from "./icons/Edge";

const DOWNLOAD_URL = "https://github.com/asimar007/ZenX/releases/tag/v1.0.0";

const BROWSERS: Record<
  BrowserName,
  { label: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }
> = {
  chrome: { label: "Add to Chrome", Icon: ChromeIcon },
  brave: { label: "Add to Brave", Icon: BraveIcon },
  edge: { label: "Add to Microsoft Edge", Icon: EdgeIcon },
  other: { label: "Add to Browser", Icon: Download },
};

export function InstallButton({ size = "lg" }: { size?: "sm" | "lg" }) {
  const { label, Icon } = BROWSERS[useBrowser()];

  return (
    <a
      href={DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-forest-ink text-cream-paper text-body hover:bg-forest-shadow transition-colors ${
        size === "sm" ? "px-3.5 py-1.75" : "px-7 py-4.5"
      }`}
    >
      <Icon width={16} height={16} className="shrink-0" />
      <span>{label}</span>
      {size === "lg" && <ArrowRight className="size-4 shrink-0" />}
    </a>
  );
}
