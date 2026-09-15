"use client";

import { useEffect, useState } from "react";
import { PhoneShell } from "@/components/phone-frame";

/**
 * Auto-cycling hero visual for the Insights landing page.
 *
 * Wraps `PhoneShell` (dark bezel + rectangular untrimmed inner screen)
 * so the carousel matches the tour-strip mockups visually. All four
 * onboarding screenshots stack absolutely inside the same inner
 * screen; only opacity animates, so there's no layout thrash and no
 * horizontal reflow on narrow viewports.
 *
 * Design goals:
 *
 *   • **One phone**, not a row of four — keeps the hero visually calm
 *     and matches how the app is actually used (one screen at a time).
 *   • **Cross-fade** rather than slide/marquee — reads as "the app is
 *     alive" rather than "this is a video ad".
 *   • **Preload all four** images at mount so mid-cycle transitions
 *     don't flash the empty phone. Only 4 images at ~80 KB each; the
 *     bandwidth cost is trivial compared to the visual jank of
 *     late-loading frames.
 *   • **`prefers-reduced-motion` aware** — if the user opts out of
 *     motion, we pin to the first frame instead of running the timer.
 *
 * If any individual image 404s, that layer hides itself via `onError`
 * and the bezel's neutral matte shows through for that frame's slot
 * only; the cycle keeps running.
 */

const DEFAULT_ROTATION_MS = 2800;
const FADE_MS = 500;

type Slide = { src: string; alt: string };

export function HeroPhoneCarousel({
  slides,
  // `startIndex` lets callers stagger multiple carousels on the same
  // page so the phones aren't all fading in lockstep (feels
  // choreographed / marching). Modulo'd against `slides.length` so
  // out-of-range values are safe.
  startIndex = 0,
  // `rotationMs` per-slide dwell time. Defaults to the hero pace but
  // the tour strip uses a slower value so 3 carousels on one section
  // don't overload the eye.
  rotationMs = DEFAULT_ROTATION_MS,
}: {
  slides: Slide[];
  startIndex?: number;
  rotationMs?: number;
}) {
  // `active` is the index currently at 100% opacity. All other slides
  // sit stacked underneath at 0%; on tick we bump `active` and the
  // inline `transition-opacity` handles the cross-fade.
  const [active, setActive] = useState(
    slides.length > 0 ? ((startIndex % slides.length) + slides.length) % slides.length : 0,
  );
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Read the motion preference once at mount. Browsers don't fire
    // change events consistently enough on all platforms to justify
    // the extra listener bookkeeping for a decorative hero animation.
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (reducedMotion || slides.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, rotationMs);
    return () => window.clearInterval(id);
  }, [reducedMotion, slides.length, rotationMs]);

  return (
    <PhoneShell>
      {/* Absolutely-stacked slides inside the shell's inner rectangle.
          `absolute inset-0` fills the screen; each `<img>` sits at the
          same rectangle so cross-fade never causes layout shift. */}
      <div
        className="relative h-full w-full"
        role="group"
        aria-roledescription="carousel"
        aria-label="Onboarding preview"
      >
        {slides.map((s, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            // First slide loads eagerly (LCP candidate for the hero
            // column); rest lazy-load but are cheap enough to be
            // resident well before their turn.
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={i === 0 ? "high" : "auto"}
            className="absolute inset-0 h-full w-full object-cover object-top transition-opacity ease-out"
            style={{
              opacity: i === active ? 1 : 0,
              transitionDuration: `${FADE_MS}ms`,
            }}
            aria-hidden={i !== active}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        ))}
      </div>
    </PhoneShell>
  );
}
