export function IncludeList({
  items,
  className = "mt-6",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={`${className} space-y-2 text-sm leading-6 text-ink`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}
