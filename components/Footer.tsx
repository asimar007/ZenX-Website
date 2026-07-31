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
    <footer className="border-t border-[#e5e5e0] px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/ZenX.png"
            alt="ZenX"
            width={80}
            height={32}
            className="object-contain shrink-0 mix-blend-multiply"
          />
          <span className="text-[12px] text-[#9ca3af] ml-2">
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
              className="text-[12px] text-[#9ca3af] hover:text-[#6b7280] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
