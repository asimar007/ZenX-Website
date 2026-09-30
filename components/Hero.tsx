import { InstallButton } from "./InstallButton";
import { FeedMockup } from "./FeedMockup";
import GithubIcon from "./icons/Github";

const STATS = [
  ["200+", "keywords blocked"],
  ["5+", "filter categories"],
  ["0", "data collected"],
  ["100%", "local processing"],
];

export function Hero() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-2 pb-16 md:pb-24">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-3.5">
        {/* Copy panel */}
        <div className="bg-keylime-wash rounded-xl p-7 sm:p-10.5 flex flex-col justify-center">
          <span className="self-start rounded-full bg-cream-paper text-forest-ink text-body px-3.5 py-2.25 mb-7">
            Free &amp; open source · v1.0.0
          </span>

          <h1 className="font-serif text-forest-ink text-[44px] leading-[1.05] tracking-[-0.03em] sm:text-heading-lg xl:text-display">
            Your Twitter feed, finally peaceful.
          </h1>
          <p className="mt-5.25 text-subheading font-light text-charcoal max-w-md">
            Automatically hides political arguments, hate speech, war news, and
            controversy — so you can enjoy social media again.
          </p>

          <div className="mt-8.75 flex flex-col sm:flex-row gap-3.5">
            <InstallButton size="lg" />
            <a
              href="https://github.com/asimar007/ZenX.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-cream-paper text-forest-ink text-body px-7 py-4.5 hover:bg-mint-veil transition-colors"
            >
              <GithubIcon width={16} height={16} />
              <span>View on GitHub</span>
            </a>
          </div>
          <p className="mt-3.5 text-[12px] text-charcoal">
            No account · No data collected · 100% local
          </p>

          <a
            href="https://www.producthunt.com/products/zenx?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-zenx"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 self-start"
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

        {/* Product panel */}
        <div className="bg-slate-hush rounded-xl p-3.5 sm:p-10.5 flex flex-col justify-center">
          <FeedMockup />
        </div>
      </div>

      {/* Stats strip */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-7 pt-14 md:pt-19">
        {STATS.map(([num, label]) => (
          <div key={label} className="text-center">
            <div className="font-serif text-heading text-forest-ink leading-none">
              {num}
            </div>
            <div className="mt-1.75 text-body text-charcoal">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
