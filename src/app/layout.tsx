import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Enhancify — The company behind EnhanceTube",
    template: "%s · Enhancify",
  },
  description: site.description,
  applicationName: site.name,
  keywords: ["Enhancify", "EnhanceTube", "YouTube", "Indian SaaS", "Bengaluru"],
  authors: [{ name: site.legalName }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Enhancify — The company behind EnhanceTube",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Enhancify — The company behind EnhanceTube",
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0d12",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-canvas font-sans text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
