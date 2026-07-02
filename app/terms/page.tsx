import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { TERMS } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service — Tally Tax",
  description:
    "The terms for using Tally Tax. Tally is a record-keeping tool, not tax advice.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage doc={TERMS} />;
}
