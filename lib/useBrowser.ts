"use client";
import { useEffect, useState } from "react";

export type BrowserName = "chrome" | "brave" | "other";

export function useBrowser(): BrowserName | null {
  const [browser, setBrowser] = useState<BrowserName | null>(null);

  useEffect(() => {
    const detect = async (): Promise<BrowserName> => {
      if (typeof navigator === "undefined") return "other";
      if (!navigator.userAgent.includes("Chrome/")) return "other";

      const nav = navigator as Navigator & {
        brave?: { isBrave: () => Promise<boolean> };
      };
      if (!nav.brave) return "chrome";

      try {
        return (await nav.brave.isBrave()) ? "brave" : "chrome";
      } catch {
        return "chrome";
      }
    };

    detect().then(setBrowser);
  }, []);

  return browser;
}
