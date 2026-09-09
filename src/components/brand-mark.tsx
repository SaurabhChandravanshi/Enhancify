export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="14" fill="#4C46E8" />
      <rect x="17" y="14" width="7" height="36" rx="3.5" fill="#F3F4F8" />
      <rect x="17" y="14" width="30" height="7" rx="3.5" fill="#F3F4F8" />
      <rect x="17" y="28.5" width="22" height="7" rx="3.5" fill="#F3F4F8" />
      <rect x="17" y="43" width="30" height="7" rx="3.5" fill="#F3F4F8" />
    </svg>
  );
}
