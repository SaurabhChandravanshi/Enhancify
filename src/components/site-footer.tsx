import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-5 py-12 sm:px-6">
        <div>
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            {site.legalName}. We build{" "}
            <a
              href={site.productUrl}
              className="text-ink underline decoration-line underline-offset-3 hover:decoration-ink"
              target="_blank"
              rel="noopener noreferrer"
            >
              EnhanceTube
            </a>
            . {site.city}, {site.country}.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-ink/80 hover:text-ink">
              {item.label}
            </Link>
          ))}
          {legal.map((item) => (
            <Link key={item.href} href={item.href} className="text-ink/80 hover:text-ink">
              {item.label}
            </Link>
          ))}
          <a href={`mailto:${site.email.sales}`} className="text-ink/80 hover:text-ink">
            {site.email.sales}
          </a>
          <a href={`mailto:${site.email.support}`} className="text-ink/80 hover:text-ink">
            {site.email.support}
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-3xl px-5 py-5 text-xs text-muted sm:px-6">
          © {new Date().getFullYear()} {site.legalName}. Made in India.
        </p>
      </div>
    </footer>
  );
}
