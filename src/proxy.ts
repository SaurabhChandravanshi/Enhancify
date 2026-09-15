import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Host-based rewrite so the Insights app can live on its own domain.
 *
 * We run ONE Next.js app (deployed once) but serve it under two names:
 *
 *   • enhancify.in            → the Enhancify marketing site (default)
 *   • insightsapp.in          → the Insights app, whose pages actually
 *                               live under `/apps/insights/*`
 *
 * When a request arrives on an Insights host, we transparently rewrite
 * the URL to the `/apps/insights` subtree. The visitor keeps seeing the
 * clean address (`insightsapp.in/help`) while Next renders
 * `/apps/insights/help`.
 *
 * Because the address bar stays clean, `usePathname()` on the client
 * reports `/help` (not `/apps/insights/help`), so the root layout can't
 * tell it's in the app zone from the path alone. To make that decision
 * reliable and server-side, we tag every app-zone request with an
 * `x-app-zone: insights` request header; `components/site-chrome.tsx`
 * reads it (via `headers()`) to suppress the marketing chrome.
 *
 * NOTE (Next.js 16): the file convention formerly called `middleware.ts`
 * is now `proxy.ts` with an exported `proxy` function. Same behaviour,
 * new name — see `node_modules/next/dist/docs/.../proxy.md`.
 */

// Hosts that should serve the Insights app at their root. Add the apex
// and the `www.` variant; both point at the same deployment.
const INSIGHTS_HOSTS = new Set(["insightsapp.in", "www.insightsapp.in"]);

// Hosts for the Enhancify marketing site. On these, the Insights subtree
// is not canonical — it permanently redirects to `insightsapp.in`.
const ENHANCIFY_HOSTS = new Set(["enhancify.in", "www.enhancify.in"]);

// The internal subtree the Insights pages are implemented under.
const INSIGHTS_BASE = "/apps/insights";

// Canonical public origin for the Insights app.
const INSIGHTS_ORIGIN = "https://insightsapp.in";

// Request header used to tell the app it's rendering in the Insights zone.
const ZONE_HEADER = "x-app-zone";
const INSIGHTS_ZONE = "insights";

function isInsightsPath(pathname: string) {
  return pathname === INSIGHTS_BASE || pathname.startsWith(`${INSIGHTS_BASE}/`);
}

export function proxy(request: NextRequest) {
  // Prefer the Host header (reflects the public domain behind a CDN);
  // fall back to the parsed hostname for local/dev.
  const host = (request.headers.get("host") ?? request.nextUrl.hostname)
    .split(":")[0]
    .toLowerCase();

  const { pathname } = request.nextUrl;

  // Start from a clean header set and never trust an inbound zone header
  // (a client could try to spoof it to hide/show chrome).
  const requestHeaders = new Headers(request.headers);
  requestHeaders.delete(ZONE_HEADER);

  const markInsightsZone = () => requestHeaders.set(ZONE_HEADER, INSIGHTS_ZONE);

  // Insights domain: serve the `/apps/insights` subtree at the root.
  if (INSIGHTS_HOSTS.has(host)) {
    markInsightsZone();

    // Requests that already target the subtree (e.g. absolute asset URLs
    // like `/apps/insights/screenshots/…` embedded in the pages) are
    // served as-is to avoid double-prefixing.
    if (isInsightsPath(pathname)) {
      return NextResponse.next({ request: { headers: requestHeaders } });
    }

    const url = request.nextUrl.clone();
    url.pathname =
      pathname === "/" ? INSIGHTS_BASE : `${INSIGHTS_BASE}${pathname}`;
    return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
  }

  // Enhancify domain: the Insights pages have moved to their own domain.
  // Redirect `enhancify.in/apps/insights/*` → `insightsapp.in/*` (clean),
  // keeping old inbound links (Play Console, shipped mobile builds) alive.
  // Asset requests (paths with a file extension) are excluded by the
  // matcher, so only page navigations are redirected.
  if (ENHANCIFY_HOSTS.has(host) && isInsightsPath(pathname)) {
    const cleanPath = pathname.slice(INSIGHTS_BASE.length) || "/";
    return NextResponse.redirect(new URL(cleanPath, INSIGHTS_ORIGIN), 308);
  }

  // Any other host (localhost, *.vercel.app previews): keep the app
  // directly browsable under `/apps/insights`, and mark it as the app
  // zone so the marketing chrome is hidden there too.
  if (isInsightsPath(pathname)) {
    markInsightsZone();
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  // Run on page routes only. Exclude Next internals, API routes, and any
  // path with a file extension (static assets in `/public`, favicon,
  // sitemap.xml, robots.txt) so those keep loading directly and asset
  // requests are never rewritten.
  matcher: ["/((?!_next/static|_next/image|api|.*\\..*).*)"],
};
