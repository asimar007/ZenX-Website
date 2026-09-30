import { ChartColumn, Eye, Lock, PenLine, SlidersHorizontal, Zap } from "lucide-react";

const FEATURES = [
  {
    Icon: Zap,
    title: "Instant filtering",
    desc: "Tweets are analyzed locally the moment they load. Zero latency, zero API calls.",
  },
  {
    Icon: Lock,
    title: "100% private",
    desc: "Everything runs in your browser. Your data never leaves your device.",
  },
  {
    Icon: PenLine,
    title: "Custom keywords",
    desc: "Add your own words or phrases on top of the built-in keyword library.",
  },
  {
    Icon: Eye,
    title: "Reveal anytime",
    desc: "Hidden tweets are collapsed, not deleted. One click to peek at any of them.",
  },
  {
    Icon: ChartColumn,
    title: "Live stats",
    desc: "See exactly how many tweets have been filtered in real-time.",
  },
  {
    Icon: SlidersHorizontal,
    title: "Per-category control",
    desc: "Toggle politics but keep religion. Full granular control over every category.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-forest-ink">
          Features
        </p>
        <h2 className="mt-3.5 mb-10.5 font-serif text-heading text-forest-ink">
          Built for your peace of mind.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {FEATURES.map(({ Icon, title, desc }) => (
            <div key={title} className="bg-keylime-wash rounded-xl p-7">
              <Icon className="size-5 text-forest-ink" strokeWidth={1.5} />
              <h3 className="mt-5.25 text-subheading text-forest-ink">{title}</h3>
              <p className="mt-1.75 text-body text-charcoal">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
