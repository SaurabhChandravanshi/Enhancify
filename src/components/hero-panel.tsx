export function HeroPanel() {
  return (
    <div
      className="relative overflow-hidden rounded-[2rem] bg-ink shadow-[0_24px_80px_-32px_rgba(12,13,18,0.55)]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 480 480" className="h-auto w-full" fill="none">
        <defs>
          <radialGradient id="hero-glow" cx="72%" cy="30%" r="52%">
            <stop offset="0%" stopColor="#4C46E8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4C46E8" stopOpacity="0" />
          </radialGradient>
          <pattern
            id="hero-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 0H0V40"
              stroke="#F3F4F8"
              strokeOpacity="0.055"
              strokeWidth="1"
            />
          </pattern>
          <clipPath id="hero-site">
            <rect x="40" y="56" width="268" height="348" rx="22" />
          </clipPath>
          <clipPath id="hero-app">
            <rect x="188" y="132" width="252" height="292" rx="22" />
          </clipPath>
        </defs>

        <rect width="480" height="480" rx="32" fill="#0C0D12" />
        <rect width="480" height="480" rx="32" fill="url(#hero-glow)" />
        <rect
          x="24"
          y="24"
          width="432"
          height="432"
          rx="8"
          fill="url(#hero-grid)"
        />

        {/* Public website */}
        <g clipPath="url(#hero-site)">
          <rect x="40" y="56" width="268" height="348" fill="#F3F4F8" fillOpacity="0.07" />
          <rect x="40" y="56" width="268" height="44" fill="#F3F4F8" fillOpacity="0.08" />
          <circle cx="64" cy="78" r="5" fill="#F3F4F8" fillOpacity="0.22" />
          <circle cx="82" cy="78" r="5" fill="#F3F4F8" fillOpacity="0.16" />
          <circle cx="100" cy="78" r="5" fill="#F3F4F8" fillOpacity="0.12" />
          <rect x="124" y="70" width="152" height="16" rx="8" fill="#F3F4F8" fillOpacity="0.1" />

          <rect x="64" y="124" width="168" height="12" rx="6" fill="#F3F4F8" fillOpacity="0.28" />
          <rect x="64" y="148" width="220" height="8" rx="4" fill="#F3F4F8" fillOpacity="0.12" />
          <rect x="64" y="164" width="176" height="8" rx="4" fill="#F3F4F8" fillOpacity="0.1" />
          <rect x="64" y="188" width="96" height="32" rx="8" fill="#4C46E8" />

          <rect x="64" y="244" width="88" height="72" rx="12" fill="#F3F4F8" fillOpacity="0.08" />
          <rect x="164" y="244" width="88" height="72" rx="12" fill="#F3F4F8" fillOpacity="0.08" />
          <rect x="64" y="328" width="188" height="8" rx="4" fill="#F3F4F8" fillOpacity="0.1" />
          <rect x="64" y="348" width="140" height="8" rx="4" fill="#F3F4F8" fillOpacity="0.08" />
        </g>
        <rect
          x="40"
          y="56"
          width="268"
          height="348"
          rx="22"
          stroke="#F3F4F8"
          strokeOpacity="0.14"
        />

        {/* Application people use */}
        <g clipPath="url(#hero-app)">
          <rect x="188" y="132" width="252" height="292" fill="#12131A" />
          <rect x="188" y="132" width="56" height="292" fill="#4C46E8" />
          <rect x="204" y="156" width="24" height="24" rx="7" fill="#F3F4F8" fillOpacity="0.9" />
          <rect x="208" y="204" width="16" height="16" rx="4" fill="#F3F4F8" fillOpacity="0.28" />
          <rect x="208" y="236" width="16" height="16" rx="4" fill="#F3F4F8" fillOpacity="0.18" />
          <rect x="208" y="268" width="16" height="16" rx="4" fill="#F3F4F8" fillOpacity="0.18" />

          <rect x="264" y="156" width="132" height="10" rx="5" fill="#F3F4F8" fillOpacity="0.22" />
          <rect x="264" y="176" width="88" height="8" rx="4" fill="#F3F4F8" fillOpacity="0.1" />

          <rect x="260" y="208" width="156" height="48" rx="12" fill="#4C46E8" fillOpacity="0.95" />
          <rect x="276" y="224" width="72" height="8" rx="4" fill="#F3F4F8" fillOpacity="0.85" />
          <rect x="276" y="238" width="44" height="6" rx="3" fill="#F3F4F8" fillOpacity="0.4" />

          <rect x="260" y="268" width="156" height="40" rx="12" fill="#F3F4F8" fillOpacity="0.06" />
          <rect x="276" y="282" width="96" height="6" rx="3" fill="#F3F4F8" fillOpacity="0.16" />
          <rect x="260" y="320" width="156" height="40" rx="12" fill="#F3F4F8" fillOpacity="0.06" />
          <rect x="276" y="334" width="80" height="6" rx="3" fill="#F3F4F8" fillOpacity="0.16" />
        </g>
        <rect
          x="188"
          y="132"
          width="252"
          height="292"
          rx="22"
          stroke="#F3F4F8"
          strokeOpacity="0.16"
        />
      </svg>
    </div>
  );
}
