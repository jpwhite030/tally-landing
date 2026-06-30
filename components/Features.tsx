const FEATURES = [
  {
    emoji: "📸",
    title: "Snap & scan",
    body: "Photograph a receipt and Tally reads the merchant, date and amount automatically.",
    accent: "bg-sky/15",
  },
  {
    emoji: "🏷️",
    title: "Auto-sorted deductions",
    body: "Expenses are categorised and matched to what your occupation can actually claim.",
    accent: "bg-brand/15",
  },
  {
    emoji: "📊",
    title: "Tax-readiness score",
    body: "A simple percentage shows how prepared you are — and what to do next.",
    accent: "bg-grape/15",
  },
  {
    emoji: "🔥",
    title: "Streaks that stick",
    body: "Friendly nudges and weekly streaks turn receipt-wrangling into a 10-second habit.",
    accent: "bg-sun/15",
  },
  {
    emoji: "📄",
    title: "myTax-ready export",
    body: "Get a clean summary by category, ready to enter at tax time or hand to your accountant.",
    accent: "bg-brand/15",
  },
  {
    emoji: "🔒",
    title: "Private by default",
    body: "Your receipts are yours. Export or delete your data anytime — no surprises.",
    accent: "bg-sky/15",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          Everything you need, none of the dread
        </h2>
        <p className="mt-4 text-lg font-semibold text-ink-soft">
          Tally turns a shoebox of receipts into a tidy, claim-ready tax return.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div key={f.title} className="card">
            <div
              className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${f.accent}`}
            >
              {f.emoji}
            </div>
            <h3 className="text-xl font-extrabold">{f.title}</h3>
            <p className="mt-2 font-semibold leading-relaxed text-ink-soft">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
