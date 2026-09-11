export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <rect width="512" height="512" rx="114" fill="#4C46E8" />
      <rect x="150" y="158" width="214" height="46" rx="23" fill="#F3F4F8" />
      <rect x="150" y="234" width="162" height="46" rx="23" fill="#F3F4F8" />
      <rect x="150" y="310" width="214" height="46" rx="23" fill="#F3F4F8" />
    </svg>
  );
}
