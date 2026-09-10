import Link from "next/link";
import { IncludeList } from "@/components/include-list";
import { workOffers } from "@/lib/content";

export function OfferCards({
  variant = "card",
}: {
  variant?: "card" | "rule";
}) {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {workOffers.map((item) => (
        <article
          key={item.id}
          className={
            variant === "card"
              ? "rounded-2xl bg-paper p-6 ring-1 ring-line"
              : "border-t border-line pt-6"
          }
        >
          <h3 className="font-semibold tracking-tight text-ink">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{item.summary}</p>
          <IncludeList items={item.includes} className="mt-5" />
          <p className="mt-5">
            <Link
              href={item.href}
              className="text-sm font-semibold text-accent hover:text-accent-dark"
            >
              Full details
            </Link>
          </p>
        </article>
      ))}
    </div>
  );
}
