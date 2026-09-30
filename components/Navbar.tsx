"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { Menu, X } from "lucide-react";
import { InstallButton } from "./InstallButton";

const NAV_LINKS = ["Features", "Filters", "How it works"];
const anchor = (item: string) => `#${item.toLowerCase().replace(/ /g, "-")}`;

const LINK =
  "text-body text-charcoal hover:text-forest-ink hover:bg-keylime-wash rounded-lg transition-colors";

export function Navbar() {
  const menu = useRef<HTMLDialogElement>(null);

  return (
    <header className="px-4 sm:px-6 lg:px-8">
      <nav className="max-w-[1440px] mx-auto h-18 flex items-center justify-between gap-6">
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src="/ZenX.png"
            alt="ZenX"
            width={658}
            height={426}
            className="h-12 w-auto mix-blend-multiply"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {NAV_LINKS.map((item) => (
            <a key={item} href={anchor(item)} className={`${LINK} px-2.75 py-1.75`}>
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden md:block">
            <InstallButton size="sm" />
          </div>

          <button
            type="button"
            aria-haspopup="dialog"
            onClick={() => menu.current?.showModal()}
            className={`md:hidden inline-flex items-center justify-center -mr-2 size-11 ${LINK}`}
          >
            <Menu className="size-4" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer — native modal <dialog>: Esc, focus trap, top layer for free.
          Slide/fade lives in globals.css (.drawer). A click on the dialog itself is the backdrop. */}
      <dialog
        ref={menu}
        aria-label="Menu"
        onClick={(e) => e.target === e.currentTarget && menu.current?.close()}
        className="drawer fixed inset-y-0 right-0 left-auto m-0 h-full max-h-none w-72 max-w-none p-0 border-0 bg-cream-paper text-charcoal backdrop:bg-charcoal/20"
      >
        <div className="h-full">
          <div className="flex items-center px-5 py-4 border-b">
            <Image
              src="/ZenX.png"
              alt="ZenX"
              width={658}
              height={426}
              className="h-12 w-auto mix-blend-multiply"
            />
          </div>

          <form method="dialog">
            <button className={`absolute top-2.5 right-2.5 inline-flex items-center justify-center size-11 ${LINK}`}>
              <X className="size-4" />
              <span className="sr-only">Close menu</span>
            </button>
          </form>

          <nav className="flex flex-col gap-1 px-3 py-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href={anchor(item)}
                onClick={() => menu.current?.close()}
                className={`${LINK} px-3.5 py-2.75`}
              >
                {item}
              </a>
            ))}
            <div className="mt-3 px-1">
              <InstallButton size="sm" />
            </div>
          </nav>
        </div>
      </dialog>
    </header>
  );
}
