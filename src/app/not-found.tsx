import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <div className="px-5 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">404</p>
        <h1 className="mt-4 max-w-lg text-4xl font-semibold tracking-tight">
          That page does not exist.
        </h1>
        <p className="mt-4 max-w-md text-muted">
          The link is stale, or the route never existed. Head home or write to us.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
