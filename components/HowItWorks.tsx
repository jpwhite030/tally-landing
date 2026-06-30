const STEPS = [
  {
    n: "1",
    title: "Snap",
    body: "Take a photo of any work receipt — coffee with a client, tools, a laptop, your phone bill.",
  },
  {
    n: "2",
    title: "Sort",
    body: "Tally reads it, categorises it, and estimates what you can claim based on your job.",
  },
  {
    n: "3",
    title: "Save",
    body: "At tax time, export a tidy summary and claim with confidence. Bigger refund, zero panic.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Three steps. That&apos;s it.
          </h2>
          <p className="mt-4 text-lg font-semibold text-ink-soft">
            From receipt to refund without the spreadsheet headache.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="card text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-2xl font-black text-white">
                {s.n}
              </div>
              <h3 className="text-xl font-extrabold">{s.title}</h3>
              <p className="mt-2 font-semibold leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
