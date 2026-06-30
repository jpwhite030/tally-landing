import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Showcase } from "@/components/Showcase";
import { HowItWorks } from "@/components/HowItWorks";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Features />
        <Showcase />
        <HowItWorks />

        {/* Waitlist CTA band */}
        <section id="waitlist" className="bg-brand">
          <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-20 text-center md:py-24">
            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              Be first in line at launch
            </h2>
            <p className="mt-4 max-w-lg text-lg font-semibold text-white/90">
              Join the waitlist and we&apos;ll let you know the moment Tally Tax
              hits the App Store and Google Play.
            </p>
            <div className="mt-8 flex w-full justify-center">
              <WaitlistForm tone="onBrand" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
