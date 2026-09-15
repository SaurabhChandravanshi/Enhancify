import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  /**
   * Historical URL redirects.
   *
   * `/apps/insights/policies/delete-account` was the original path
   * submitted to Google Play Console's "Data safety → Data deletion"
   * field and baked into the mobile app's shipped `LEGAL_DELETE_ACCOUNT_URL`
   * constant. On 2026-09-15 the page moved to
   * `/apps/insights/account-deletion` (shorter, discoverable, doesn't
   * pretend to be a policy sub-page). We keep the old URL alive with a
   * 308 (permanent, method-preserving) so:
   *   1. Play Console's stored URL keeps resolving until the next
   *      Play Console update rolls in.
   *   2. Any release APK / AAB already installed on user devices with
   *      the old URL still lands users on the deletion page.
   *   3. Search engines transfer any accrued link equity to the new URL.
   *
   * Do not remove these entries without confirming (a) Play Console
   * points at the new URL and (b) no shipped mobile build still
   * references the old one.
   */
  async redirects() {
    return [
      {
        source: "/apps/insights/policies/delete-account",
        destination: "/apps/insights/account-deletion",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
