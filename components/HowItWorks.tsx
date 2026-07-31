const STEPS = [
  {
    n: "01",
    title: "Download the release",
    desc: "Grab the latest zip from GitHub and unzip it anywhere. No account, no sign-up.",
  },
  {
    n: "02",
    title: "Load it in your browser",
    desc: "Open chrome://extensions, turn on Developer mode, then choose Load unpacked and pick the folder.",
  },
  {
    n: "03",
    title: "Choose your filters and scroll",
    desc: "Click the ZenX icon in your toolbar. All 5 categories are on by default — toggle any off, then visit X.com.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 border-t border-[#e5e5e0]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
            Up and running in a minute.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-6 left-[calc(16.66%+12px)] right-[calc(16.66%+12px)] h-px bg-[#e5e5e0]" />

          {STEPS.map((step) => (
            <div key={step.n} className="relative">
              <div className="w-12 h-12 rounded-full border border-[#e5e5e0] bg-white flex items-center justify-center mb-5 relative z-10">
                <span
                  className="font-serif text-[15px] font-semibold tracking-tight text-[#1a1a18]"
                >
                  {step.n}
                </span>
              </div>
              <h3 className="text-[15px] font-semibold mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-[13px] text-[#6b7280] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-xl text-[13px] text-[#6b7280] leading-relaxed">
          ZenX isn&apos;t on the Chrome Web Store yet — a listing is on the way.
          Until then this is the install, and it&apos;s the same one you&apos;d
          use for any unpacked extension.
        </p>
      </div>
    </section>
  );
}
