import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tallytax.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tally Tax — Tax, without the panic.",
  description:
    "Snap a receipt and Tally sorts your work deductions, tracks your tax readiness, and gets you myTax-ready. Built for Aussie taxpayers.",
  keywords: [
    "tax",
    "deductions",
    "receipts",
    "Australia",
    "myTax",
    "expense tracker",
    "tax return",
  ],
  openGraph: {
    title: "Tally Tax — Tax, without the panic.",
    description:
      "Snap a receipt and Tally sorts your work deductions, tracks your tax readiness, and gets you myTax-ready.",
    url: SITE_URL,
    siteName: "Tally Tax",
    type: "website",
    images: [{ url: "/tally-mascot.png", width: 1254, height: 1254, alt: "Tally mascot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tally Tax — Tax, without the panic.",
    description:
      "Snap a receipt and Tally sorts your work deductions and gets you myTax-ready.",
    images: ["/tally-mascot.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white text-ink">{children}</body>
    </html>
  );
}
