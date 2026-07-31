"use client";
import { useEffect, useState, useSyncExternalStore } from "react";

export type BrowserName = "chrome" | "brave" | "edge" | "other";

const noSubscribe = () => () => {};

function fromUserAgent(): BrowserName {
  const ua = navigator.userAgent;
  if (!ua.includes("Chrome/")) return "other";
  return ua.includes("Edg/") ? "edge" : "chrome";
}

/**
 * The user agent is enough for Chrome/Edge/other; Brave hides behind an async
 * probe and reports a Chrome UA until it answers.
 *
 * Server-renders as "chrome" — the common case — so the install button doesn't
 * visibly change label for most visitors on hydration.
 */
export function useBrowser(): BrowserName {
  const detected = useSyncExternalStore<BrowserName>(
    noSubscribe,
    fromUserAgent,
    () => "chrome",
  );
  const [isBrave, setIsBrave] = useState(false);

  useEffect(() => {
    const nav = navigator as Navigator & {
      brave?: { isBrave: () => Promise<boolean> };
    };
    nav.brave?.isBrave().then(setIsBrave, () => {});
  }, []);

  return isBrave ? "brave" : detected;
}
