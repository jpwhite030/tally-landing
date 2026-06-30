import Image from "next/image";

function Phone({
  src,
  alt,
  featured = false,
  className = "",
}: {
  src: string;
  alt: string;
  featured?: boolean;
  className?: string;
}) {
  return (
    <div className={`${className} ${featured ? "z-10 md:-translate-y-8" : ""}`}>
      <div className="rounded-[2rem] bg-[#1a1a2e] p-1.5 shadow-2xl ring-1 ring-black/10">
        <div className="relative aspect-[776/1530] overflow-hidden rounded-[1.6rem] bg-white">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 280px, 240px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

export function Showcase() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">See it in action</h2>
          <p className="mt-4 text-lg font-semibold text-ink-soft">
            Your dashboard, deductions and tax tools — all in your pocket.
          </p>
        </div>

        <div className="mt-16 flex items-end justify-center gap-4 md:gap-8">
          <Phone
            src="/screens/explore.png"
            alt="Explore screen: missions, weekly check-in and spending tracker"
            className="hidden w-[200px] sm:block md:w-[240px]"
          />
          <Phone
            src="/screens/home.png"
            alt="Tally home dashboard with tax-readiness, streak and daily tip"
            featured
            className="w-[230px] md:w-[280px]"
          />
          <Phone
            src="/screens/profile.png"
            alt="Profile screen with tax-profile completion"
            className="hidden w-[200px] sm:block md:w-[240px]"
          />
        </div>
      </div>
    </section>
  );
}
