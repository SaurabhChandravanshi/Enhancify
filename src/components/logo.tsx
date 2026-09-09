export function Logo({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill={onDark ? "#F3F4F8" : "#0C0D12"} />
        <rect
          x="7"
          y="7"
          width="13"
          height="13"
          rx="3"
          fill="#4C46E8"
        />
        <rect
          x="12"
          y="12"
          width="13"
          height="13"
          rx="3"
          fill={onDark ? "#0C0D12" : "#F3F4F8"}
          fillOpacity="0.92"
        />
      </svg>
      <span
        className={`text-[15px] font-semibold tracking-[-0.04em] ${onDark ? "text-paper" : "text-ink"}`}
      >
        Enhancify
      </span>
    </span>
  );
}
