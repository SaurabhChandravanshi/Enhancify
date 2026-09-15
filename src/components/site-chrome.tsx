import { headers } from "next/headers";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";

/**
 * Zone-aware chrome switcher rendered by the root layout.
 *
 * Why this exists:
 *   The root `app/layout.tsx` wraps every page. That's the right default
 *   for the Enhancify marketing site — but the per-app subtree at
 *   `/apps/<slug>/*` (served on its own domain, e.g. `insightsapp.in`)
 *   ships its own header/footer from a nested layout, and stacking the
 *   Enhancify chrome on top would look broken.
 *
 * Why not `usePathname`:
 *   On the app's own domain the proxy rewrites `insightsapp.in/help` →
 *   `/apps/insights/help`, but the address bar stays `/help`, so
 *   `usePathname()` reports `/help` and can't distinguish the zone. The
 *   host is the real signal, and hosts are only knowable server-side.
 *
 * How it works:
 *   `src/proxy.ts` tags every app-zone request (by host or by
 *   `/apps/*` path) with an `x-app-zone: insights` header. We read it
 *   here with `headers()` and render the marketing chrome only outside
 *   the app zone. (Reading a header makes this render dynamic, which is
 *   fine — the proxy already runs per request.)
 *
 * Adding a new app:
 *   The proxy sets the zone header for any `/apps/*` subtree, so new
 *   apps that follow the same convention are covered automatically.
 */
export async function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const zone = (await headers()).get("x-app-zone");
  const hideChrome = zone === "insights";

  return (
    <>
      {hideChrome ? null : <SiteHeader />}
      {/* `<main>` must be present in every layout for accessibility
          (screen readers rely on it for skip-to-content). We render it
          here so both branches — with and without chrome — get exactly
          one <main>. */}
      <main className="flex-1">{children}</main>
      {hideChrome ? null : <SiteFooter />}
      {hideChrome ? null : <WhatsAppButton />}
    </>
  );
}
