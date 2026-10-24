import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "QR Code Maker Privacy Policy",
  description:
    "How the QR Code Maker Android app handles your information. It collects no personal data and keeps your codes on your device.",
  alternates: { canonical: "/apps/qr-code-maker/privacy" },
};

export default function QrCodeMakerPrivacyPage() {
  return (
    <div className="px-5 py-16 sm:px-6 lg:py-24">
      <article className="mx-auto max-w-3xl text-sm leading-7 text-muted">
        <h1 className="text-4xl font-semibold tracking-tight text-ink">
          QR Code Maker Privacy Policy
        </h1>
        <p className="mt-4 text-xs uppercase tracking-[0.12em]">Last updated October 24, 2026</p>
        <div className="mt-8 space-y-5">
          <p>
            QR Code Maker (“the app”) is an Android app that creates QR codes. It is published by
            its developer. Questions about this policy can be sent to{" "}
            <a className="text-ink underline" href={`mailto:${site.email.support}`}>
              {site.email.support}
            </a>
            .
          </p>

          <h2 className="text-lg font-semibold text-ink">Summary</h2>
          <p>
            The app has no accounts, no advertising and no analytics. It does not connect to the
            internet and does not collect, send or share personal data. The app asks for no
            permissions. Everything you create stays on your phone.
          </p>

          <h2 className="text-lg font-semibold text-ink">What is stored on your device</h2>
          <p>
            The details you type to make a code (for example a link, text, Wi-Fi network name and
            password, or contact details), and the codes you choose to save in My codes, together
            with your theme choice. Saved codes can be deleted from inside the app. Uninstalling
            the app removes all of it from your phone.
          </p>

          <h2 className="text-lg font-semibold text-ink">Sharing and saving images</h2>
          <p>
            When you tap Share image, the app creates a picture of the code and hands it to the app
            you choose in your phone&apos;s share sheet. When you tap Save image, you choose where
            on your phone the file is saved. When another app shares text or a link to QR Code
            Maker, the app only uses it to fill in a new code. The “Share this app” option shares a
            link to the app and nothing from your codes.
          </p>

          <h2 className="text-lg font-semibold text-ink">What a QR code reveals</h2>
          <p>
            Anyone who scans a QR code can read what is inside it, including a Wi-Fi password. Do
            not put information in a code that you do not want the people who scan it to see.
          </p>

          <h2 className="text-lg font-semibold text-ink">Phone backups</h2>
          <p>
            If you have Android&apos;s automatic backup turned on in your phone settings, Android
            may include the app&apos;s data in your own Google account backup. That is handled by
            your phone and Google under your settings, and we do not receive it.
          </p>

          <h2 className="text-lg font-semibold text-ink">Children</h2>
          <p>
            The app is a general utility and does not knowingly collect information from anyone,
            including children.
          </p>

          <h2 className="text-lg font-semibold text-ink">Open source</h2>
          <p>
            QR encoding uses the ZXing library, licensed under the Apache License 2.0.
          </p>

          <h2 className="text-lg font-semibold text-ink">Changes</h2>
          <p>
            If this policy changes, the new version and its date will be posted on this page.
          </p>

          <p>
            Our website&apos;s own privacy practices are described in the{" "}
            <Link href="/privacy" className="text-ink underline">
              Enhancify Privacy Policy
            </Link>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
