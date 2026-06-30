import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="border-t-2 border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
        <Wordmark />
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-bold text-ink-soft">
          <a href="#features" className="hover:text-ink">
            Features
          </a>
          <a href="#waitlist" className="hover:text-ink">
            Waitlist
          </a>
          <a href="#" className="hover:text-ink">
            Privacy
          </a>
          <a href="#" className="hover:text-ink">
            Terms
          </a>
        </nav>
        <p className="text-sm font-semibold text-ink-muted">
          © {new Date().getFullYear()} Tally Tax
        </p>
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-8 text-center text-xs font-semibold text-ink-muted sm:text-left">
        Tally helps you organise records and estimate deductions. It is not tax,
        accounting, or financial advice.
      </p>
    </footer>
  );
}
