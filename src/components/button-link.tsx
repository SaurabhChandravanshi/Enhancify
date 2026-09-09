import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

const styles: Record<Variant, string> = {
  primary: "bg-accent text-paper hover:bg-accent-dark",
  secondary: "bg-paper text-ink ring-1 ring-line hover:bg-fog",
  ghost: "text-ink hover:bg-mist",
  onDark: "bg-transparent text-paper ring-1 ring-white/20 hover:bg-white/10",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const classNameFull = `inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold tracking-tight transition ${styles[variant]} ${className}`;
  const external = href.startsWith("http");

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classNameFull}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classNameFull}>
      {children}
    </Link>
  );
}

