import Image from "next/image";
import { StoreBadges } from "./StoreBadges";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#eafce0] via-[#f4fded] to-white" />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-14 md:grid-cols-2 md:items-center md:pb-28 md:pt-20">
        <div>
          <span className="mb-5 inline-block rounded-full bg-brand/15 px-3 py-1 text-sm font-extrabold text-brand-dark">
            🇦🇺 Built for Aussie taxpayers
          </span>
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-6xl">
            Tax, without the <span className="text-brand">panic.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg font-semibold text-ink-soft md:text-xl">
            Snap a receipt and Tally works out what you can claim — tracking your
            deductions and getting you myTax-ready, all year round.
          </p>

          <div id="waitlist-hero" className="mt-7">
            <WaitlistForm />
          </div>

          <div className="mt-7">
            <StoreBadges />
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-brand/10 blur-3xl" />
            <Image
              src="/tally-mascot.png"
              alt="Tally, the friendly receipt mascot"
              width={460}
              height={460}
              priority
              className="h-auto w-[260px] drop-shadow-2xl md:w-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
