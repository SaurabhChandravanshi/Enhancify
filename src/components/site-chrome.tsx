"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";

/**
 * Route-aware chrome switcher rendered by the root layout.
 *
 * Why this exists:
 *   The root `app/layout.tsx` used to render `<SiteHeader />`,
 *   `<SiteFooter />`, and `<WhatsAppButton />` unconditionally around
 *   every page. That's the right default for the Enhancify marketing
 *   site — but the per-app subtree at `/apps/<slug>/*` needs its own
 *   product branding (own header, own footer, own colors), and stacking
 *   Enhancify chrome on top of app chrome would look broken and confuse
 *   users who arrived from Play Console expecting the Insights brand.
 *
 * How it works:
 *   1. Root layout wraps its `{children}` in `<SiteChrome>`.
 *   2. This component checks the pathname at render time and:
 *      - On `/apps/insights/*` (and any future `/apps/*` subtree): renders
 *        ONLY the `<main>`, letting the per-app layout supply header/footer.
 *      - Everywhere else: renders the marketing chrome around `<main>`,
 *        identical to the previous behaviour.
 *
 * Why not Route Groups instead:
 *   Next.js Route Groups (`(marketing)`) could isolate layouts cleanly,
 *   but that would require moving 7 existing top-level route folders
 *   under a group directory — a big diff for a small architectural win.
 *   This component keeps the change surgical: one new file + one
 *   root-layout edit, no file moves.
 *
 * Adding a new app:
 *   Extend `hideChromePrefixes` below. Keep the list ordered by app
 *   launch date so it's obvious which slug corresponds to which product.
 */
const hideChromePrefixes = [
  "/apps/insights", // Insights mobile app — Sept 2026
];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = hideChromePrefixes.some((p) => pathname.startsWith(p));

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
