const FEATURES = [
  {
    icon: "⚡",
    title: "Instant filtering",
    desc: "Tweets are analyzed locally the moment they load. Zero latency, zero API calls.",
  },
  {
    icon: "🔒",
    title: "100% private",
    desc: "Everything runs in your browser. Your data never leaves your device.",
  },
  {
    icon: "✏️",
    title: "Custom keywords",
    desc: "Add your own words or phrases on top of the built-in keyword library.",
  },
  {
    icon: "👁️",
    title: "Reveal anytime",
    desc: "Hidden tweets are collapsed, not deleted. One click to peek at any of them.",
  },
  {
    icon: "📊",
    title: "Live stats",
    desc: "See exactly how many tweets have been filtered in real-time.",
  },
  {
    icon: "🎛️",
    title: "Per-category control",
    desc: "Toggle politics but keep religion. Full granular control over every category.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 border-t border-[#e5e5e0]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-[11px] font-medium uppercase tracking-widest text-[#9ca3af] mb-3">
            Why ZenX
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl tracking-tight"
          >
            Built for your peace of mind.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#e5e5e0] border border-[#e5e5e0] rounded-2xl overflow-hidden">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="p-8 bg-[#fafaf8] hover:bg-white transition-colors"
            >
              <span className="text-2xl mb-4 block">{f.icon}</span>
              <h3 className="text-[14px] font-semibold mb-2 tracking-tight">
                {f.title}
              </h3>
              <p className="text-[13px] text-[#6b7280] leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
