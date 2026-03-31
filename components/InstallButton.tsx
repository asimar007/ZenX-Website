"use client";
import { useBrowser, type BrowserName } from "@/lib/useBrowser";
import { Button } from "@/components/ui/button";
import BraveIcon from "./icons/Brave";
import ChromeIcon from "./icons/Chrome";
import EdgeIcon from "./icons/Edge";
import { Download } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  size?: "sm" | "lg";
  className?: string;
}

interface BrowserMeta {
  label: string;
  icon: ReactNode;
  href: string;
  bg: string;
  hover: string;
}

const CHROME_STORE_URL = "https://chrome.google.com/webstore";

const BROWSER_META: Record<BrowserName, BrowserMeta> = {
  chrome: {
    label: "Add to Chrome",
    icon: <ChromeIcon width={16} height={16} />,
    href: CHROME_STORE_URL,
    bg: "bg-[#4285F4]",
    hover: "hover:bg-[#3367d6]",
  },
  brave: {
    label: "Add to Brave",
    icon: <BraveIcon width={16} height={16} />,
    href: CHROME_STORE_URL,
    bg: "bg-[#FF5500]",
    hover: "hover:bg-[#e04d00]",
  },
  edge: {
    label: "Add to Microsoft Edge",
    icon: <EdgeIcon width={16} height={16} />,
    href: CHROME_STORE_URL,
    bg: "bg-[#0A76D5]",
    hover: "hover:bg-[#0866b8]",
  },
  other: {
    label: "Add to Browser",
    icon: <Download size={16} />,
    href: CHROME_STORE_URL,
    bg: "bg-[#1a1a18]",
    hover: "hover:bg-[#2d2d2b]",
  },
};

export function InstallButton({ size = "lg", className = "" }: Props) {
  const browser = useBrowser();

  const sizeClasses =
    size === "sm"
      ? "px-4 py-1.5 h-auto text-[13px] rounded-lg"
      : "px-6 py-3 h-auto text-[14px] rounded-xl";

  if (!browser) {
    return (
      <div
        className={`inline-flex items-center gap-2 ${sizeClasses} ${className} bg-[#e5e5e0] animate-pulse`}
        aria-hidden="true"
      >
        {/* icon placeholder — matches 16×16 icon */}
        <span className="w-4 h-4 shrink-0 rounded bg-[#d1d1cc]" />
        {/* label placeholder */}
        <span
          className={`bg-[#d1d1cc] rounded ${
            size === "sm" ? "w-[72px] h-[13px]" : "w-[88px] h-[14px]"
          }`}
        />
        {/* "— Free" placeholder */}
        <span
          className={`bg-[#d1d1cc] rounded ${
            size === "sm" ? "w-7 h-[11px]" : "w-8 h-3"
          }`}
        />
      </div>
    );
  }

  const meta = BROWSER_META[browser] ?? BROWSER_META.other;

  return (
    <Button
      asChild
      className={`font-medium text-white active:scale-[0.98] ${meta.bg} ${meta.hover} ${sizeClasses} ${className}`}
    >
      <a href={meta.href} target="_blank" rel="noopener noreferrer">
        {meta.icon}
        <span>{meta.label}</span>
        <span className="opacity-50 font-normal text-[12px]">— Free</span>
      </a>
    </Button>
  );
}
