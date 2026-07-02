/**
 * Public-facing legal content for tallytax.app/privacy and /terms.
 * These URLs are what App Store Connect links to. Plain-language, written for
 * an Australian audience. Have a professional review before scaling up.
 */

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDoc {
  slug: "privacy" | "terms";
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

const UPDATED = "2 July 2026";
const CONTACT = "support@tallytax.app";

export const PRIVACY: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  updated: UPDATED,
  intro:
    "Tally Tax (“Tally”, “we”, “us”) helps you track work-related expenses for your Australian tax return. This policy explains what we collect, how we use it, how it’s protected, and the choices you have. We handle personal information in line with the Australian Privacy Principles under the Privacy Act 1988 (Cth).",
  sections: [
    {
      heading: "What we collect",
      body: [
        "Account details: your email address and authentication information.",
        "Tax-profile answers you choose to give us, such as your occupation, employment type, and yes/no eligibility questions.",
        "The receipts you scan and the expenses you create, including images, merchant names, amounts, dates, and categories.",
        "Basic, de-identified usage events (for example, that a receipt was scanned or an expense confirmed) so we can understand and improve the app.",
      ],
    },
    {
      heading: "How we use your information",
      body: [
        "To provide the core service: storing your receipts and expenses, suggesting categories and deductibility, and calculating your tax-readiness and estimates.",
        "To keep your account secure and to operate, maintain, and improve the app.",
        "We do not sell your personal information, and we do not use your receipts or financial figures for advertising.",
      ],
    },
    {
      heading: "How your receipts are stored",
      body: [
        "Receipt images and expense data are stored in secure cloud infrastructure provided by Supabase and are linked only to your account.",
        "Your data is protected by row-level security, meaning no other user can access it. You can delete any receipt at any time, which removes the image from storage.",
      ],
    },
    {
      heading: "AI and automated processing",
      body: [
        "When you scan a receipt, on-device text recognition reads the text and a rules-based engine suggests a category and whether the expense may be deductible. These are suggestions only — you review and confirm everything.",
        "We do not send your receipt images, merchant names, or financial figures to third-party AI services.",
      ],
    },
    {
      heading: "Camera and photos",
      body: [
        "Tally only accesses your camera or photo library when you choose to scan or upload a receipt. Photos stay on your device until you tap save. We never browse your library in the background.",
      ],
    },
    {
      heading: "Third parties",
      body: [
        "We use Supabase for authentication, database, and file storage. Your data may be processed on their infrastructure to deliver the service.",
        "We do not share your personal information with any other third party except where required by law.",
      ],
    },
    {
      heading: "Data retention",
      body: [
        "We keep your information for as long as your account is active. When you delete your account, your personal data and stored receipts are permanently removed.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "You can export a full copy of your data, or permanently delete your account and all associated data, at any time from Profile → Data & Privacy inside the app.",
        "You may also request access to or correction of your personal information by contacting us.",
      ],
    },
    {
      heading: "Children",
      body: [
        "Tally is not directed at children and is intended for users of working age who lodge Australian tax returns.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "We may update this policy from time to time. Material changes will be reflected by the “last updated” date at the top of this page.",
      ],
    },
    {
      heading: "Contact",
      body: [`Questions about your privacy? Email ${CONTACT}.`],
    },
  ],
};

export const TERMS: LegalDoc = {
  slug: "terms",
  title: "Terms of Service",
  updated: UPDATED,
  intro:
    "By downloading or using Tally Tax you agree to these terms. Please read them carefully.",
  sections: [
    {
      heading: "What Tally is",
      body: [
        "Tally is a record-keeping and organisation tool for work-related expenses. It is not a tax agent, accountant, or lodgement service, and it does not lodge your return with the ATO.",
      ],
    },
    {
      heading: "Not tax advice",
      body: [
        "Any categories, deductibility suggestions, readiness scores, and estimated figures are general information generated by automated rules based on what you enter. They are not personal tax advice and may be wrong for your situation.",
        "Eligibility for deductions depends on your individual circumstances and current ATO rules. Before lodging, confirm your claims with a registered tax agent or the ATO (ato.gov.au). You are responsible for the accuracy of your tax return.",
      ],
    },
    {
      heading: "Your responsibilities",
      body: [
        "You agree to provide accurate information, to keep your login secure, and to use Tally only for lawful purposes.",
        "You are responsible for keeping your own copies of important records.",
      ],
    },
    {
      heading: "Availability",
      body: [
        "We aim to keep Tally running smoothly but provide it on an “as is” basis without warranties. We may update, suspend, or discontinue features at any time.",
      ],
    },
    {
      heading: "Liability",
      body: [
        "To the extent permitted by law, Tally is not liable for any loss arising from your use of the app, including any tax outcome, penalty, or missed deduction. Nothing in these terms excludes rights you have under the Australian Consumer Law.",
      ],
    },
    {
      heading: "Changes to these terms",
      body: [
        "We may update these terms from time to time. Continued use of Tally after an update means you accept the revised terms.",
      ],
    },
    {
      heading: "Contact",
      body: [`Questions about these terms? Email ${CONTACT}.`],
    },
  ],
};

export const LEGAL_DOCS: Record<string, LegalDoc> = {
  privacy: PRIVACY,
  terms: TERMS,
};
