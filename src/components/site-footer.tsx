import Link from "next/link";
import { Logo } from "@/components/logo";
import { workOffers } from "@/lib/content";
import { nav, site } from "@/lib/site";

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            We build websites and applications that make the next step obvious.
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Company
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink/80 hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink/80 hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Work
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {workOffers.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-ink/80 hover:text-ink"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Email
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email.sales}`} className="text-ink/80 hover:text-ink">
                {site.email.sales}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email.support}`} className="text-ink/80 hover:text-ink">
                {site.email.support}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted sm:px-6">
          © {new Date().getFullYear()} {site.name}. Made in India.
        </p>
      </div>
    </footer>
  );
}
