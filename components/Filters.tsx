import { Ban, Church, Landmark, PenLine, Swords, Zap } from "lucide-react";

const PILL = "inline-flex rounded-full bg-cream-paper text-forest-ink text-[12px] px-2.75 py-1";

const CATEGORIES = [
  {
    Icon: Landmark,
    name: "Political Content",
    count: 38,
    samples: ["trump", "election", "maga", "gop", "liberal"],
  },
  {
    Icon: Ban,
    name: "Racism & Hate",
    count: 11,
    samples: ["racist", "supremacist", "hate crime"],
  },
  {
    Icon: Church,
    name: "Religious Debates",
    count: 16,
    samples: ["sharia", "evangelical", "jihad"],
  },
  {
    Icon: Swords,
    name: "War & Conflict",
    count: 70,
    samples: ["ceasefire", "airstrike", "ww3", "hamas"],
  },
  {
    Icon: Zap,
    name: "Controversial",
    count: 24,
    samples: ["cancel culture", "anti-vax", "crt"],
  },
  {
    Icon: PenLine,
    name: "Custom Keywords",
    count: null,
    samples: [],
  },
];

export function Filters() {
  return (
    <section id="filters" className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-forest-ink">
          Filters
        </p>
        <h2 className="mt-3.5 mb-10.5 font-serif text-heading text-forest-ink">
          5 categories. 200+ keywords.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {CATEGORIES.map(({ Icon, name, count, samples }) => (
            <div key={name} className="bg-sage-mist rounded-xl p-7 sm:p-10.5">
              <div className="flex items-start justify-between">
                <Icon className="size-5 text-forest-ink" strokeWidth={1.5} />
                <span className="text-[12px] text-charcoal">
                  {count !== null ? `${count}+ keywords` : "you decide"}
                </span>
              </div>

              <h3 className="mt-5.25 mb-3.5 text-subheading text-forest-ink">{name}</h3>

              {count === null ? (
                <p className="text-body text-charcoal">
                  Add any word or phrase. Perfect for blocking specific people,
                  topics, or anything you&apos;re tired of.
                </p>
              ) : (
                <div className="flex flex-wrap gap-1.75">
                  {samples.map((kw) => (
                    <span key={kw} className={PILL}>
                      {kw}
                    </span>
                  ))}
                  <span className={PILL}>+{count - samples.length} more</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
