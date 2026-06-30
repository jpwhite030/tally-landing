"use client";

import { useState } from "react";

type Tone = "onLight" | "onBrand";

export function WaitlistForm({ tone = "onLight" }: { tone?: Tone }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("ok");
        setMessage("You're on the list! We'll email you at launch. 🎉");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data?.error ?? "Something went wrong — please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error — please try again.");
    }
  }

  if (status === "ok") {
    return (
      <p
        className={`rounded-2xl px-5 py-4 font-extrabold ${
          tone === "onBrand" ? "bg-white text-brand-dark" : "bg-brand/15 text-brand-dark"
        }`}
      >
        {message}
      </p>
    );
  }

  const inputClasses =
    tone === "onBrand"
      ? "bg-white text-ink placeholder:text-ink-muted border-transparent"
      : "bg-white text-ink placeholder:text-ink-muted border-line";

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          aria-label="Email address"
          className={`flex-1 rounded-2xl border-2 px-4 py-3.5 text-base font-semibold outline-none focus:border-brand ${inputClasses}`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`${tone === "onBrand" ? "btn-3d bg-ink text-white border-black/40 hover:brightness-110" : "btn-green"} disabled:opacity-70`}
        >
          {status === "loading" ? "Joining…" : "Join the waitlist"}
        </button>
      </div>
      {status === "error" && (
        <p className={`mt-2 text-sm font-bold ${tone === "onBrand" ? "text-white" : "text-[#d33]"}`}>
          {message}
        </p>
      )}
      <p
        className={`mt-2 text-xs font-semibold ${
          tone === "onBrand" ? "text-white/80" : "text-ink-muted"
        }`}
      >
        No spam — just a heads-up when we launch.
      </p>
    </form>
  );
}
