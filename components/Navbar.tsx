"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Dialog } from "radix-ui";
import { InstallButton } from "./InstallButton";

const NAV_LINKS = ["Features", "Filters", "How it works"];
const anchor = (item: string) => `#${item.toLowerCase().replace(/ /g, "-")}`;

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-white/70 backdrop-blur-xl border-b border-[#e5e5e0]/80 shadow-sm shadow-black/[0.03]">
        <nav className="max-w-5xl mx-auto px-6 h-15 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="group shrink-0 flex items-center">
            <Image
              src="/ZenX.png"
              alt="ZenX"
              width={658}
              height={426}
              className="h-12 w-auto mix-blend-multiply group-hover:opacity-80 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href={anchor(item)}
                className="px-3 py-1.5 text-[13px] text-[#6b7280] hover:text-[#1a1a18] hover:bg-[#f3f3f0] rounded-lg transition-all duration-150"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden md:block">
              <InstallButton size="sm" />
            </div>

            {/* Mobile drawer */}
            <Dialog.Root>
              <Dialog.Trigger className="md:hidden inline-flex items-center justify-center -mr-2 size-11 rounded-lg text-[#6b7280] hover:text-[#1a1a18] hover:bg-[#f3f3f0] transition-colors">
                <Menu className="size-4" />
                <span className="sr-only">Open menu</span>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/10 supports-backdrop-filter:backdrop-blur-xs data-[state=open]:animate-[fade-in_150ms_ease-out] data-[state=closed]:animate-[fade-out_150ms_ease-in]" />

                <Dialog.Content
                  aria-describedby={undefined}
                  className="fixed inset-y-0 right-0 z-50 w-72 bg-white shadow-lg data-[state=open]:animate-[drawer-in_200ms_ease-out] data-[state=closed]:animate-[drawer-out_200ms_ease-in]"
                >
                  <Dialog.Title className="flex items-center px-5 py-4 border-b border-[#e5e5e0]">
                    <Image
                      src="/ZenX.png"
                      alt="ZenX"
                      width={658}
                      height={426}
                      className="h-12 w-auto mix-blend-multiply"
                    />
                  </Dialog.Title>

                  <Dialog.Close className="absolute top-2.5 right-2.5 inline-flex items-center justify-center size-11 rounded-lg text-[#6b7280] hover:text-[#1a1a18] hover:bg-[#f3f3f0] transition-colors">
                    <X className="size-4" />
                    <span className="sr-only">Close menu</span>
                  </Dialog.Close>

                  <nav className="flex flex-col px-3 py-3">
                    {NAV_LINKS.map((item) => (
                      <Dialog.Close asChild key={item}>
                        <a
                          href={anchor(item)}
                          className="text-[14px] text-[#6b7280] hover:text-[#1a1a18] hover:bg-[#f3f3f0] px-3 py-2.5 rounded-lg transition-colors"
                        >
                          {item}
                        </a>
                      </Dialog.Close>
                    ))}
                  </nav>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </nav>
      </div>
    </header>
  );
}
