import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { PRIVACY } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — Tally Tax",
  description:
    "How Tally Tax collects, uses, and protects your information. Your receipts stay private to your account.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage doc={PRIVACY} />;
}
