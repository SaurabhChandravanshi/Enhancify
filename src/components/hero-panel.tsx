export function HeroPanel() {
  return (
    <div
      className="relative overflow-hidden rounded-[2rem] bg-ink shadow-[0_24px_80px_-32px_rgba(12,13,18,0.55)]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 480 480" className="h-auto w-full" fill="none">
        <defs>
          <radialGradient id="hero-glow" cx="76%" cy="26%" r="48%">
            <stop offset="0%" stopColor="#4C46E8" stopOpacity="0.42" />
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

        {/* Vanity noise — unordered marks that do not help you decide */}
        <g fill="#F3F4F8">
          <rect x="44" y="318" width="11" height="11" rx="3" opacity="0.14" />
          <rect x="68" y="352" width="8" height="8" rx="2" opacity="0.2" />
          <rect x="38" y="378" width="14" height="8" rx="2" opacity="0.12" />
          <rect x="86" y="334" width="9" height="9" rx="2" opacity="0.16" />
          <rect x="54" y="398" width="12" height="7" rx="2" opacity="0.1" />
          <rect x="102" y="368" width="7" height="14" rx="2" opacity="0.18" />
          <rect x="78" y="392" width="16" height="7" rx="2" opacity="0.11" />
          <rect x="118" y="348" width="8" height="8" rx="2" opacity="0.14" />
          <rect x="46" y="346" width="6" height="6" rx="2" opacity="0.22" />
          <rect x="96" y="312" width="10" height="6" rx="2" opacity="0.13" />
        </g>

        {/* Compounding performance — one column is the obvious read */}
        <rect x="148" y="320" width="44" height="72" rx="10" fill="#F3F4F8" fillOpacity="0.14" />
        <rect x="214" y="274" width="44" height="118" rx="10" fill="#F3F4F8" fillOpacity="0.22" />
        <rect x="280" y="216" width="44" height="176" rx="10" fill="#F3F4F8" fillOpacity="0.34" />
        <rect x="346" y="144" width="44" height="248" rx="10" fill="#4C46E8" />

        {/* The path from noise to a next step */}
        <path
          d="M64 372C118 348 148 328 170 320C210 300 220 282 236 274C270 248 288 228 302 216C332 188 348 160 368 144"
          stroke="#F3F4F8"
          strokeOpacity="0.18"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M64 372C118 348 148 328 170 320C210 300 220 282 236 274C270 248 288 228 302 216C332 188 348 160 368 144"
          stroke="#4C46E8"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        <circle cx="64" cy="372" r="6" fill="#F3F4F8" fillOpacity="0.35" />
        <circle cx="368" cy="144" r="26" stroke="#4C46E8" strokeOpacity="0.35" strokeWidth="3" />
        <circle cx="368" cy="144" r="12" fill="#F3F4F8" />
        <circle cx="368" cy="144" r="5" fill="#4C46E8" />

        {/* One clear reading among quieter ones */}
        <rect
          x="40"
          y="40"
          width="176"
          height="108"
          rx="16"
          fill="#F3F4F8"
          fillOpacity="0.07"
          stroke="#F3F4F8"
          strokeOpacity="0.1"
        />
        <rect x="58" y="62" width="88" height="8" rx="4" fill="#F3F4F8" fillOpacity="0.18" />
        <rect x="58" y="84" width="64" height="8" rx="4" fill="#F3F4F8" fillOpacity="0.12" />
        <rect x="58" y="106" width="120" height="8" rx="4" fill="#4C46E8" />
        <rect x="186" y="104" width="12" height="12" rx="3" fill="#4C46E8" />
      </svg>
      <p className="pointer-events-none absolute bottom-6 left-6 max-w-[11rem] text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
        From noise to a next step.
      </p>
    </div>
  );
}
