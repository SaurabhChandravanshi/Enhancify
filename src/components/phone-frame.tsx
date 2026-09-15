"use client";

/**
 * Phone mockup for the Insights marketing surface.
 *
 * Renders a dark rounded bezel with a *rectangular* inner screen area
 * that fits the screenshot at its native aspect (`9 : 18.4` for our
 * on-device captures). The inner area intentionally has NO rounding
 * because a rounded-corner clip visibly trims the app's status bar
 * and bottom-nav pixels — the whole point of a phone-frame mockup is
 * to preserve the captured UI, not to re-crop it.
 *
 * The bezel supplies the "phone-ness" (rounded outer, dark body, soft
 * drop shadow); the inner screen is a plain rectangle so every pixel
 * of the screenshot survives. A small speaker pill at the top sells
 * the illusion further without needing a notch/camera cutout that
 * would fight the flat status bar in our captures.
 *
 * We use a plain `<img>` (not `next/image`) because file existence
 * isn't guaranteed at build time (screenshots are checked in ad-hoc
 * as devices are captured). If a file is missing, `onError` hides the
 * `<img>` and the inner screen shows the neutral matte background —
 * still looks like a phone, just an empty one.
 *
 * Client Component solely because `onError` is an event handler.
 */
export function PhoneFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <PhoneShell className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="block h-full w-full object-cover object-top"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </PhoneShell>
  );
}

/**
 * Bezel + inner screen wrapper shared by `PhoneFrame` and the hero
 * carousel. Kept in this file so both surfaces stay visually
 * identical without an extra abstraction file.
 *
 * Geometry — two concentric curves:
 *
 *   Outer bezel radius R_out = 40px
 *   Bezel padding      P     = 8px  (uniform)
 *   Inner screen R_in  = R_out − P = 32px
 *
 * Making the inner radius exactly match `R_out − P` ensures the bezel
 * remains a constant-thickness ring — no square screenshot corners
 * pop out past the curved bezel (which is the bug in the previous
 * revision).
 *
 * The corner clip that this inner radius introduces on the screenshot
 * is bounded: at 260px CSS width the inner width is 244px, mapped to
 * a 501px source screenshot ⇒ scale ≈ 2.05 ⇒ clip arc ≈ 65px in
 * source pixels. Sampling all six onboarding+tour screenshots at the
 * arc's deepest point confirms every clipped pixel is background
 * (light grey/white). The one exception — the Feed hero image, which
 * extends edge-to-edge — loses a decorative fragment of the top-left
 * corner, matching how a real Android device with a curved display
 * actually renders that image. No text, buttons, or interactive UI
 * intersect the clip arc anywhere.
 *
 * Inner aspect (`501 / 1024`) matches the raw on-device capture aspect
 * so `object-cover` never has to crop vertically — the screenshot
 * lands 1:1 in the screen area.
 */
export function PhoneShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-[40px] bg-slate-900 p-2 shadow-xl shadow-indigo-900/10 ring-1 ring-slate-950/40 ${className}`}
      style={{ width: 260 }}
    >
      {/* Top speaker/mic pill — decorative bezel detail. Sits ON the
          bezel (not the screen) so it never overlaps the screenshot. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[9px] h-1 w-14 -translate-x-1/2 rounded-full bg-slate-700"
      />

      {/* Inner screen — rounded to R_out − P (see doc-comment). */}
      <div
        className="overflow-hidden rounded-[32px] bg-slate-100"
        style={{ aspectRatio: "501 / 1024" }}
      >
        {children}
      </div>
    </div>
  );
}
