import {
  Camera,
  Tags,
  Gauge,
  Flame,
  FileDown,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  Icon: LucideIcon;
  title: string;
  body: string;
  tint: string;
  fg: string;
};

const FEATURES: Feature[] = [
  {
    Icon: Camera,
    title: "Snap & scan",
    body: "Photograph a receipt and Tally reads the merchant, date and amount automatically.",
    tint: "bg-sky/15",
    fg: "text-sky",
  },
  {
    Icon: Tags,
    title: "Auto-sorted deductions",
    body: "Expenses are categorised and matched to what your occupation can actually claim.",
    tint: "bg-brand/15",
    fg: "text-brand-dark",
  },
  {
    Icon: Gauge,
    title: "Tax-readiness score",
    body: "A simple percentage shows how prepared you are — and what to do next.",
    tint: "bg-[#f3e6ff]",
    fg: "text-[#a23df0]",
  },
  {
    Icon: Flame,
    title: "Streaks that stick",
    body: "Friendly nudges and weekly streaks turn receipt-wrangling into a 10-second habit.",
    tint: "bg-sun/15",
    fg: "text-[#e07b00]",
  },
  {
    Icon: FileDown,
    title: "myTax-ready export",
    body: "Get a clean summary by category, ready to enter at tax time or hand to your accountant.",
    tint: "bg-brand/15",
    fg: "text-brand-dark",
  },
  {
    Icon: ShieldCheck,
    title: "Private by default",
    body: "Your receipts are yours. Export or delete your data anytime — no surprises.",
    tint: "bg-sky/15",
    fg: "text-sky",
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
              className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${f.tint}`}
            >
              <f.Icon className={`h-7 w-7 ${f.fg}`} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-extrabold">{f.title}</h3>
            <p className="mt-2 font-semibold leading-relaxed text-ink-soft">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
