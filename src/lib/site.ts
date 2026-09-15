export const site = {
  name: "Enhancify",
  legalName: "Enhancify Private Limited",
  tagline: "An Indian software company",
  description:
    "Enhancify is an Indian software company. We design and ship websites and applications that make the next step obvious.",
  url: "https://enhancify.in",
  email: {
    sales: "sales@enhancify.in",
    support: "support@enhancify.in",
  },
  whatsapp: {
    number: "918317335494",
    display: "+91 83173 35494",
  },
  social: {
    instagram: {
      handle: "enhancify.in",
      url: "https://instagram.com/enhancify.in",
    },
    facebook: {
      handle: "Enhancify.in",
      url: "https://facebook.com/Enhancify.in",
    },
    x: {
      handle: "Enhancifyin",
      url: "https://x.com/Enhancifyin",
    },
  },
  country: "India",
  /**
   * Per-product metadata surfaced on product-scoped routes such as
   * `/apps/<slug>/policies/*`. Each product has its own policy documents
   * because Google Play requires the privacy policy URL to speak specifically
   * about the app (data types, processors, retention) — the company-wide
   * `/privacy` page is not sufficient.
   */
  apps: {
    insights: {
      name: "Insights",
      // Short, concrete positioning. Keeps the marketing hero, mobile
      // auth screen, and OG/Twitter cards aligned on the same "short
      // news" promise. Deliberately avoids brand-y abstractions
      // ("your signal, not the noise") and implementation-speak
      // ("bilingual", "AI-generated") — end users just want to know
      // what the app does.
      tagline: "News, in short",
      /** Android applicationId — Play Console listing */
      androidPackage: "in.insightsapp",
      /** iOS bundle identifier — App Store listing (when we ship) */
      iosBundleId: "in.insightsapp",
      contactEmail: "support@enhancify.in",
      /**
       * Play Store requires a dedicated URL for "Data safety → Account
       * deletion" for any app that allows account creation. It must be
       * accessible without signing in and must speak specifically about
       * this app. We host it at the path below.
       *
       * Moved from `/apps/insights/policies/delete-account` on
       * 2026-09-15 so the URL reads like a discoverable top-level
       * action ("delete my account") rather than a policy sub-page.
       * The old path is 308-redirected in `next.config.ts` so existing
       * inbound links (Play Console, cached emails, released mobile
       * builds) keep working.
       */
      accountDeletionPath: "/apps/insights/account-deletion",
      /**
       * Public help page for the Insights mobile app. Hosts the FAQ
       * mirrored from in-app Help, an in-page contact form, and topic
       * routing so the message we receive is Insights-scoped
       * (`[Insights] Support: <topic>`) rather than colliding with the
       * generic sales inbox at `/contact`.
       *
       * Referenced from the mobile app (`constants/legal-urls.ts` →
       * HELP_CENTER_URL) so the "Account → Help → Help center" row
       * lands on the same URL Play Console links to.
       */
      helpPath: "/apps/insights/help",
      /** Human-readable date shown at the top of each policy document. */
      policiesLastUpdated: "September 14, 2026",
    },
  },
} as const;

export const whatsappLink = (
  message = "Hi Enhancify, I'd like to talk about a project.",
) => `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;

export const nav = [
  { href: "/websites", label: "Websites" },
  { href: "/applications", label: "Applications" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
