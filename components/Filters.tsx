const CHIP =
  "inline-flex items-center border px-2 py-0.5 rounded-md text-[11px] font-mono";

const CATEGORIES = [
  {
    emoji: "🏛️",
    name: "Political Content",
    count: 38,
    samples: ["trump", "election", "maga", "gop", "liberal"],
    accent: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    emoji: "🚫",
    name: "Racism & Hate",
    count: 11,
    samples: ["racist", "supremacist", "hate crime"],
    accent: "text-red-600 bg-red-50 border-red-100",
  },
  {
    emoji: "⛪",
    name: "Religious Debates",
    count: 16,
    samples: ["sharia", "evangelical", "jihad"],
    accent: "text-purple-600 bg-purple-50 border-purple-100",
  },
  {
    emoji: "⚔️",
    name: "War & Conflict",
    count: 70,
    samples: ["ceasefire", "airstrike", "ww3", "hamas"],
    accent: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    emoji: "⚡",
    name: "Controversial",
    count: 24,
    samples: ["cancel culture", "anti-vax", "crt"],
    accent: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    emoji: "✏️",
    name: "Custom Keywords",
    count: null,
    samples: [],
    accent: "text-zinc-600 bg-zinc-50 border-zinc-200",
    custom: true,
  },
];

export function Filters() {
  return (
    <section
      id="filters"
      className="py-24 px-6 bg-[#f8f8f6] border-t border-[#e5e5e0]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-[11px] font-medium uppercase tracking-widest text-[#9ca3af] mb-3">
            Filter Categories
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl tracking-tight"
          >
            5 categories. <span className="text-[#9ca3af]">200+ keywords.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="p-6 bg-white border border-[#e5e5e0] rounded-2xl hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl">{cat.emoji}</span>
                <span className="text-[11px] text-[#9ca3af] font-medium">
                  {cat.count !== null ? `${cat.count}+ keywords` : "you decide"}
                </span>
              </div>

              <h3 className="text-[14px] font-semibold tracking-tight mb-3">
                {cat.name}
              </h3>

              {cat.custom ? (
                <p className="text-[12px] text-[#9ca3af] leading-relaxed">
                  Add any word or phrase. Perfect for blocking specific people,
                  topics, or anything you&apos;re tired of.
                </p>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {cat.samples.map((kw) => (
                    <span key={kw} className={`${CHIP} ${cat.accent}`}>
                      {kw}
                    </span>
                  ))}
                  <span
                    className={`${CHIP} text-[#9ca3af] bg-[#f8f8f6] border-[#e5e5e0]`}
                  >
                    +{(cat.count ?? 0) - cat.samples.length} more
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
