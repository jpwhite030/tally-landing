import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email = "";
  try {
    const body = await request.json();
    email = String(body?.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const endpoint = process.env.WAITLIST_ENDPOINT;

  if (endpoint) {
    // Forward to a form provider (e.g. Formspree) or your own webhook.
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        return NextResponse.json(
          { error: "Could not save your email — please try again." },
          { status: 502 },
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Could not save your email — please try again." },
        { status: 502 },
      );
    }
  } else {
    // No provider configured yet: log so the form still works end-to-end.
    console.log(`[waitlist] (no WAITLIST_ENDPOINT set) signup: ${email}`);
  }

  return NextResponse.json({ ok: true });
}
