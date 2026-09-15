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
       * The Insights app has its own domain. `src/proxy.ts` serves the
       * pages (physically implemented under `/apps/insights/*`) at the
       * root of this host, and 308-redirects `enhancify.in/apps/insights/*`
       * here so this domain is the single canonical home for the app.
       */
      url: "https://insightsapp.in",
      /**
       * Clean, public-facing paths as seen on `insightsapp.in`. The pages
       * live under `/apps/insights/*` and are mapped by the proxy; always
       * link to these (not the internal `/apps/insights/*` paths) so the
       * address bar stays clean on the app's own domain.
       *
       * External references use the full URLs, e.g. Play Store's "Data
       * safety → Account deletion" field (`${url}${paths.deleteAccount}`)
       * and the mobile app's Help center link (`${url}${paths.help}`).
       * The old `enhancify.in/apps/insights/*` URLs keep working via the
       * proxy redirect and the 308 in `next.config.ts`, so previously
       * submitted URLs and released mobile builds don't break.
       */
      paths: {
        home: "/",
        help: "/help",
        privacy: "/policies/privacy",
        terms: "/policies/terms",
        deleteAccount: "/account-deletion",
      },
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
