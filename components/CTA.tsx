import { InstallButton } from "./InstallButton";

export function CTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
      <div className="max-w-[1440px] mx-auto bg-sage-mist rounded-xl px-7 py-17.5 md:py-24.75 text-center">
        <h2 className="font-serif text-forest-ink text-heading md:text-heading-lg">
          Ready for a calmer timeline?
        </h2>
        <p className="mt-3.5 mb-8.75 text-subheading font-light text-charcoal">
          Free, open source, and always will be.
          <br />
          Your feed, your rules.
        </p>

        <InstallButton size="lg" />

        <p className="mt-3.5 text-[12px] text-charcoal">
          Works on Chrome · Brave · Microsoft Edge
        </p>
      </div>
    </section>
  );
}
