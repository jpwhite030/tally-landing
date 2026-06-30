import { Wordmark } from "./Wordmark";

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b-2 border-line bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Wordmark />
        <a href="#waitlist" className="btn-green !px-5 !py-2.5 !text-sm">
          Join waitlist
        </a>
      </nav>
    </header>
  );
}
