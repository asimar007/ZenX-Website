"use client";
import type { ComponentType, SVGProps } from "react";
import { Download } from "lucide-react";
import { useBrowser, type BrowserName } from "@/lib/useBrowser";
import BraveIcon from "./icons/Brave";
import ChromeIcon from "./icons/Chrome";
import EdgeIcon from "./icons/Edge";

const DOWNLOAD_URL = "https://github.com/asimar007/ZenX/releases/tag/v1.0.0";

const BROWSERS: Record<
  BrowserName,
  { label: string; Icon: ComponentType<SVGProps<SVGSVGElement>>; bg: string }
> = {
  chrome: {
    label: "Add to Chrome",
    Icon: ChromeIcon,
    bg: "bg-[#4285F4] hover:bg-[#3367d6]",
  },
  brave: {
    label: "Add to Brave",
    Icon: BraveIcon,
    bg: "bg-[#FF5500] hover:bg-[#e04d00]",
  },
  edge: {
    label: "Add to Microsoft Edge",
    Icon: EdgeIcon,
    bg: "bg-[#0A76D5] hover:bg-[#0866b8]",
  },
  other: {
    label: "Add to Browser",
    Icon: Download,
    bg: "bg-[#1a1a18] hover:bg-[#2d2d2b]",
  },
};

export function InstallButton({ size = "lg" }: { size?: "sm" | "lg" }) {
  const { label, Icon, bg } = BROWSERS[useBrowser()];

  return (
    <a
      href={DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 font-medium text-white transition-colors active:scale-[0.98] ${bg} ${
        size === "sm"
          ? "px-4 py-1.5 text-[13px] rounded-lg"
          : "px-6 py-3 text-[14px] rounded-xl"
      }`}
    >
      <Icon width={16} height={16} />
      <span>{label}</span>
      <span className="opacity-50 font-normal text-[12px]">— Free</span>
    </a>
  );
}
