import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Enhancify — websites and applications, built well";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0C0D12",
          padding: "80px",
          color: "#F3F4F8",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "#4C46E8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "44px",
              fontWeight: 700,
              color: "#F3F4F8",
            }}
          >
            E
          </div>
          <div style={{ fontSize: "36px", fontWeight: 600, letterSpacing: "-0.02em" }}>
            {site.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "68px",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            maxWidth: "900px",
          }}
        >
          Websites and applications that make the next step obvious.
        </div>

        <div style={{ display: "flex", fontSize: "30px", color: "#9CA0AD" }}>
          enhancify.in
        </div>
      </div>
    ),
    { ...size },
  );
}
