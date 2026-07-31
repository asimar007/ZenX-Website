import { InstallButton } from "./InstallButton";
import GithubIcon from "./icons/Github";

const STATS = [
  ["200+", "keywords blocked"],
  ["5+", "filter categories"],
  ["0", "data collected"],
  ["100%", "local processing"],
];

export function Hero() {
  return (
    <section className="pt-36 pb-24 px-6 max-w-5xl mx-auto">
      {/* Badge */}
      <div className="flex justify-center mb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#e5e5e0] bg-white/60 text-[12px] text-[#6b7280]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Free &amp; Open Source — v1.0.1
        </span>
      </div>

      {/* Headline */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.08] tracking-tight mb-6">
          Your Twitter feed,
          <br />
          <em className="not-italic text-[#6b7280]">finally peaceful.</em>
        </h1>
        <p className="text-[16px] text-[#6b7280] leading-relaxed max-w-md mx-auto font-light">
          Automatically hides political arguments, hate speech, war news, and
          controversy — so you can enjoy social media again.
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center gap-3 mt-10">
        <div className="flex items-center gap-3">
          <InstallButton size="lg" />
          <a
            href="https://github.com/asimar007/ZenX.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-medium rounded-xl border border-[#e5e5e0] text-[#6b7280] hover:text-[#1a1a18] hover:bg-white transition-colors"
          >
            <GithubIcon width={16} height={16} />
            <span>View on GitHub</span>
          </a>
        </div>
        <p className="text-[12px] text-[#9ca3af]">
          No account · No data collected · 100% local
        </p>
      </div>

      {/* ProductHunt Badge */}
      <div className="flex justify-center mt-8">
        <a
          href="https://www.producthunt.com/products/zenx?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-zenx"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Remote SVG — next/image refuses to optimize SVG, so serve it directly. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="ZenX - Your Twitter feed, finally peaceful | Product Hunt"
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1118847&theme=light&t=1776568735676"
            width={250}
            height={54}
            className="hover:opacity-80 transition-opacity"
          />
        </a>
      </div>

      {/* Social proof */}
      <div className="mt-12">
        <div className="h-px bg-[#e5e5e0]" />
        <div className="flex items-center justify-center gap-6 pt-12">
          {STATS.map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="font-serif text-xl font-semibold tracking-tight">
                {num}
              </div>
              <div className="text-[11px] text-[#9ca3af] uppercase tracking-wider mt-0.5">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
