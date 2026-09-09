export const site = {
  name: "Enhancify",
  legalName: "Enhancify Private Limited",
  tagline: "An Indian software company",
  description:
    "Enhancify is an Indian software company. We design and ship products that help people improve how they create and grow online.",
  url: "https://enhancify.in",
  email: {
    sales: "sales@enhancify.in",
    support: "support@enhancify.in",
  },
  country: "India",
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
