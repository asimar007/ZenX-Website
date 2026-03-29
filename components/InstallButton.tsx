"use client";
import { useBrowser } from "@/lib/useBrowser";
import { Button } from "@/components/ui/button";
import BraveIcon from "./icons/Brave";
import ChromeIcon from "./icons/Chrome";
import type { ReactNode } from "react";

interface Props {
  size?: "sm" | "lg";
  className?: string;
}

interface BrowserMeta {
  label: string;
  icon: ReactNode;
  bg: string;
  hover: string;
}

const STORE_URL = "https://chrome.google.com/webstore";

const BROWSER_META: Record<string, BrowserMeta> = {
  chrome: {
    label: "Add to Chrome",
    icon: <ChromeIcon width={16} height={16} />,
    bg: "bg-[#4285F4]",
    hover: "hover:bg-[#3367d6]",
  },
  brave: {
    label: "Add to Brave",
    icon: <BraveIcon width={16} height={16} />,
    bg: "bg-[#FF5500]",
    hover: "hover:bg-[#e04d00]",
  },
  other: {
    label: "Add to Browser",
    icon: <ChromeIcon width={16} height={16} />,
    bg: "bg-[#1a1a18]",
    hover: "hover:bg-[#2d2d2b]",
  },
};

export function InstallButton({ size = "lg", className = "" }: Props) {
  const browser = useBrowser();
  const meta = BROWSER_META[browser] ?? BROWSER_META.other;

  const sizeClasses =
    size === "sm"
      ? "px-4 py-1.5 h-auto text-[13px] rounded-lg"
      : "px-6 py-3 h-auto text-[14px] rounded-xl";

  return (
    <Button
      asChild
      className={`font-medium text-white active:scale-[0.98] ${meta.bg} ${meta.hover} ${sizeClasses} ${className}`}
    >
      <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
        {meta.icon}
        <span>{meta.label}</span>
        <span className="opacity-50 font-normal text-[12px]">— Free</span>
      </a>
    </Button>
  );
}
