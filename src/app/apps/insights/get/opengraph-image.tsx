import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

const app = site.apps.insights;

/**
 * Open Graph / social-preview image for the `insightsapp.in/get` shortlink.
 *
 * The shortlink server-redirects real visitors to the Play Store
 * (`app/apps/insights/get/page.tsx`), but social crawlers
 * (WhatsApp, Telegram, Slack, Twitter, …) receive the page's `<head>`
 * with this branded card instead of the Play Store's generic preview.
 *
 * `twitter-image.tsx` in this folder re-exports this file so the Twitter
 * `summary_large_image` card uses the same artwork.
 */
export const alt = `${app.name} — ${app.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Metadata image routes run on the Node runtime so we can read the app
// logo straight off the filesystem and inline it as a data URL.
export const runtime = "nodejs";

async function logoDataUrl(): Promise<string | null> {
  try {
    const bytes = await readFile(
      join(process.cwd(), "public/apps/insights/logo-mark.png"),
    );
    return `data:image/png;base64,${bytes.toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function GetOpengraphImage() {
  const logo = await logoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          color: "#FFFFFF",
          background:
            "linear-gradient(135deg, #4F46E5 0%, #4338CA 55%, #3730A3 100%)",
        }}
      >
        {/* Brand lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          {logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logo}
              alt=""
              width={84}
              height={84}
              style={{
                width: "84px",
                height: "84px",
                borderRadius: "20px",
                boxShadow: "0 8px 24px rgba(15, 23, 42, 0.35)",
              }}
            />
          ) : (
            <div
              style={{
                width: "84px",
                height: "84px",
                borderRadius: "20px",
                background: "#FFFFFF",
                color: "#4338CA",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "50px",
                fontWeight: 800,
              }}
            >
              I
            </div>
          )}
          <div
            style={{
              fontSize: "40px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            {app.name}
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "104px",
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
            }}
          >
            News, in short.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "36px",
              lineHeight: 1.25,
              maxWidth: "900px",
              color: "rgba(255, 255, 255, 0.86)",
            }}
          >
            Quick reads of the day&apos;s important stories — made for India.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "30px",
              fontWeight: 600,
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            insightsapp.in
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "#FFFFFF",
              color: "#4338CA",
              padding: "16px 28px",
              borderRadius: "9999px",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            Get it on Google Play
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
