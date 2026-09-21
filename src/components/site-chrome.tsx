import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";

/**
 * Site chrome (header + footer + floating WhatsApp CTA) rendered by the
 * root layout around every page.
 *
 * `<main>` lives here so there is exactly one main landmark per page
 * (screen readers rely on it for skip-to-content).
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
