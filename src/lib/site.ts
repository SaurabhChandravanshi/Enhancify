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
