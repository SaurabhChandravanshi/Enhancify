import { BrandMark } from "@/components/brand-mark";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <BrandMark className="size-9 shrink-0" />
      <span className="text-[15px] font-semibold tracking-[-0.04em] text-ink">
        Enhancify
      </span>
    </span>
  );
}
