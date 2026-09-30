"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Dialog } from "radix-ui";
import { InstallButton } from "./InstallButton";

const NAV_LINKS = ["Features", "Filters", "How it works"];
const anchor = (item: string) => `#${item.toLowerCase().replace(/ /g, "-")}`;

const LINK =
  "text-body text-charcoal hover:text-forest-ink hover:bg-keylime-wash rounded-lg transition-colors";

export function Navbar() {
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

          <Dialog.Root>
            <Dialog.Trigger className={`md:hidden inline-flex items-center justify-center -mr-2 size-11 ${LINK}`}>
              <Menu className="size-4" />
              <span className="sr-only">Open menu</span>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-charcoal/20 data-[state=open]:animate-[fade-in_150ms_ease-out] data-[state=closed]:animate-[fade-out_150ms_ease-in]" />

              <Dialog.Content
                aria-describedby={undefined}
                className="fixed inset-y-0 right-0 z-50 w-72 bg-cream-paper data-[state=open]:animate-[drawer-in_200ms_ease-out] data-[state=closed]:animate-[drawer-out_200ms_ease-in]"
              >
                <Dialog.Title className="flex items-center px-5 py-4 border-b">
                  <Image
                    src="/ZenX.png"
                    alt="ZenX"
                    width={658}
                    height={426}
                    className="h-12 w-auto mix-blend-multiply"
                  />
                </Dialog.Title>

                <Dialog.Close className={`absolute top-2.5 right-2.5 inline-flex items-center justify-center size-11 ${LINK}`}>
                  <X className="size-4" />
                  <span className="sr-only">Close menu</span>
                </Dialog.Close>

                <nav className="flex flex-col gap-1 px-3 py-3">
                  {NAV_LINKS.map((item) => (
                    <Dialog.Close asChild key={item}>
                      <a href={anchor(item)} className={`${LINK} px-3.5 py-2.75`}>
                        {item}
                      </a>
                    </Dialog.Close>
                  ))}
                  <div className="mt-3 px-1">
                    <InstallButton size="sm" />
                  </div>
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </nav>
    </header>
  );
}
