import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { Footer } from "./Footer";
import type { LegalDoc } from "@/lib/legal";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      {/* Header */}
      <header className="border-b-2 border-line bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <Link href="/" aria-label="Back to home">
            <Wordmark />
          </Link>
          <Link
            href="/"
            className="text-sm font-bold text-ink-soft hover:text-ink"
          >
            ← Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-10 sm:py-14">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {doc.title}
        </h1>
        <p className="mt-2 text-sm font-bold text-ink-muted">
          Last updated {doc.updated}
        </p>

        <p className="mt-6 text-base leading-relaxed text-ink-soft">
          {doc.intro}
        </p>

        <div className="mt-10 space-y-9">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-extrabold text-ink">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((para, i) => (
                  <p key={i} className="text-base leading-relaxed text-ink-soft">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4 text-sm font-bold text-ink-soft">
          <Link href="/privacy" className="hover:text-ink">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-ink">
            Terms of Service
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
