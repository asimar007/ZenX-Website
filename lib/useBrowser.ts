"use client";
import { useEffect, useState } from "react";

export type BrowserName = "chrome" | "brave" | "other";

export function useBrowser(): BrowserName {
  const [browser, setBrowser] = useState<BrowserName>("other");

  useEffect(() => {
    const detect = async () => {
      // @ts-expect-error brave is non-standard
      if (navigator.brave && (await navigator.brave.isBrave())) {
        setBrowser("brave");
        return;
      }
      if (navigator.userAgent.includes("Chrome/")) {
        setBrowser("chrome");
        return;
      }
      setBrowser("other");
    };

    detect().catch(() => {
      if (navigator.userAgent.includes("Chrome/")) setBrowser("chrome");
      else setBrowser("other");
    });
  }, []);

  return browser;
}
