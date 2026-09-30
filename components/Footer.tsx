import Image from "next/image";

const LINKS = [
  { label: "GitHub", href: "https://github.com/asimar007/ZenX.git" },
  {
    label: "Download",
    href: "https://github.com/asimar007/ZenX/releases/tag/v1.0.0",
  },
];

export function Footer() {
  return (
    <footer className="border-t px-4 sm:px-6 lg:px-8 py-8.75">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/ZenX.png"
            alt="ZenX"
            width={658}
            height={426}
            className="h-8 w-auto shrink-0 mix-blend-multiply"
          />
          <span className="text-[12px] text-charcoal ml-2">
            © {new Date().getFullYear()} · Made for a calmer internet
          </span>
        </div>

        <div className="flex items-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body text-forest-ink hover:text-forest-shadow underline-offset-4 hover:underline py-2"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
