export const site = {
  name: "Enhancify",
  legalName: "Enhancify Private Limited",
  tagline: "The company behind EnhanceTube",
  description:
    "Enhancify is an Indian software company. We build EnhanceTube, a YouTube workspace for creators.",
  url: "https://enhancify.in",
  productName: "EnhanceTube",
  productUrl: "https://enhancetube.com",
  email: {
    sales: "sales@enhancify.in",
    support: "support@enhancify.in",
  },
  city: "Bengaluru",
  country: "India",
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
