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
      tagline: "Your signal, not the noise",
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
       */
      accountDeletionPath: "/apps/insights/policies/delete-account",
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
