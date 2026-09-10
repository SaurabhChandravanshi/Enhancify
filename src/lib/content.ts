export const pillars = [
  {
    title: "Make the next decision obvious",
    body: "We build software that turns noisy data into a clear next step — not another dashboard you ignore.",
  },
  {
    title: "Ship, then sharpen",
    body: "Products should improve after they go live. We care about iteration: tests, feedback, and small changes that compound.",
  },
  {
    title: "Stay in the operator’s hands",
    body: "Automation is useful. Unsolicited changes are not. People approve what goes out under their name.",
  },
] as const;

export const practices = [
  {
    title: "Small team, high bar",
    body: "We keep the company focused. Fewer products, finished properly, rather than a catalogue of half-built tools.",
  },
  {
    title: "Built in India",
    body: "We are an Indian company. The work is done here, and so is the conversation when you write to us.",
  },
  {
    title: "Easy to reach",
    body: "Sales and support are email and a form. If you write, a person on the team reads it.",
  },
] as const;

export const websiteOffers = [
  {
    id: "company",
    title: "Company website",
    summary:
      "The public face: Home, About, Contact, and legal pages. A clear story, fast on a phone, easy to reach.",
    body: "For startups and product companies that need a site as serious as the work. We write the structure with you, design it, and ship it on your domain — the same kind of site as this one.",
    includes: [
      "Home, About, Contact, and legal pages",
      "Mobile-first layout",
    ],
  },
  {
    id: "product",
    title: "Product or marketing site",
    summary:
      "One product, one story, one action. What it is, who it is for, and a next step — not a maze of pages.",
    body: "For a launch, a waitlist, or a product that has outgrown a landing-page template. We keep the path short: proof, clarity, and a single place to act.",
    includes: [
      "Positioning, page structure, and copy support",
      "One primary action: contact, waitlist, or demo",
      "Room to add a second page later without a rebuild",
    ],
  },
  {
    id: "rebuild",
    title: "Site rebuild",
    summary:
      "Same domain, clearer site. We replace what is dated or confusing and keep what still earns its place.",
    body: "You already have a site. Visitors bounce, the story is muddy, or it is painful to change. We rebuild it so the next step is obvious — without throwing away the name people already know.",
    includes: [
      "Audit of what to keep, cut, and rewrite",
      "New structure, design, and implementation",
      "Launch on the existing domain, with redirects if needed",
    ],
  },
] as const;

export const websiteAlwaysIncluded = [
  {
    title: "Contact that reaches a person",
    body: "A form and inboxes that a human reads. No ticket maze.",
  },
  {
    title: "SEO setup",
    body: "Titles, sitemap, sensible URLs. Enough for Google to understand the site.",
  },
  {
    title: "Analytics you can explain",
    body: "A small set of measures that answer what moved — not a wall of charts.",
  },
  {
    title: "Care after launch",
    body: "Small copy and layout fixes after you go live, so the site can sharpen.",
  },
] as const;

export function includesForOffer(offer: (typeof websiteOffers)[number]) {
  return [
    ...offer.includes,
    ...websiteAlwaysIncluded.map((item) => item.title),
  ];
}

export const applicationOffer = {
  id: "application",
  title: "Application",
  summary:
    "Custom software people use — a workspace, a tool, a product. Clear flows, and you stay in control of what ships.",
  body: "For teams that need more than a public site: an application with the work inside it, not another brochure. We shape the flows with you, build it, launch it, and sharpen it after it is live.",
  includes: [
    "Discovery, flows, and a clear build plan",
    "Design and implementation",
    "Launch you can run",
    "You approve what goes out",
    "Analytics you can explain",
    "Care after launch",
  ],
} as const;

export const workOffers = [
  ...websiteOffers.map((offer) => ({
    id: offer.id,
    title: offer.title,
    summary: offer.summary,
    href: `/websites#${offer.id}`,
    includes: includesForOffer(offer),
  })),
  {
    id: applicationOffer.id,
    title: applicationOffer.title,
    summary: applicationOffer.summary,
    href: "/applications",
    includes: [...applicationOffer.includes],
  },
];

export const websiteSteps = [
  {
    title: "Brief",
    body: "You tell us the job, the audience, and what should happen when someone visits.",
  },
  {
    title: "Build",
    body: "We design, write, and ship. You see the work as it takes shape, not only at the end.",
  },
  {
    title: "Launch",
    body: "It goes live on your domain. Fast, mobile-first, and ready to be found.",
  },
  {
    title: "Sharpen",
    body: "After launch we fix the small things. Quiet improvement beats a launch that never gets better.",
  },
] as const;

export const contactNeeds = [
  { value: "company", label: "Company website" },
  { value: "product", label: "Product or marketing site" },
  { value: "rebuild", label: "Site rebuild" },
  { value: "application", label: "Application" },
  { value: "other", label: "Something else" },
] as const;
