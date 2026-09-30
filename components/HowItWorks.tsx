const STEPS = [
  {
    n: "Step 01",
    title: "Download the release",
    desc: "Grab the latest zip from GitHub and unzip it anywhere. No account, no sign-up.",
  },
  {
    n: "Step 02",
    title: "Load it in your browser",
    desc: "Open chrome://extensions, turn on Developer mode, then choose Load unpacked and pick the folder.",
  },
  {
    n: "Step 03",
    title: "Choose your filters and scroll",
    desc: "Click the ZenX icon in your toolbar. All 5 categories are on by default — toggle any off, then visit X.com.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-forest-ink">
          How it works
        </p>
        <h2 className="mt-3.5 mb-10.5 font-serif text-heading text-forest-ink">
          Up and running in a minute.
        </h2>

        {/* Serif step left, sans detail right — the FAQ-row pairing. */}
        <div className="border-b">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="grid md:grid-cols-2 gap-3.5 md:gap-10.5 py-8.75 border-t"
            >
              <div>
                <p className="text-body text-charcoal">{step.n}</p>
                <h3 className="mt-1.75 font-serif text-heading text-forest-ink">
                  {step.title}
                </h3>
              </div>
              <p className="text-body text-charcoal md:pt-8.75">{step.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8.75 max-w-xl text-body text-charcoal">
          ZenX isn&apos;t on the Chrome Web Store yet — a listing is on the way.
          Until then this is the install, and it&apos;s the same one you&apos;d
          use for any unpacked extension.
        </p>
      </div>
    </section>
  );
}
