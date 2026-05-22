type Variant = "primary" | "accent" | "neutral";

const styles: Record<Variant, string> = {
  primary: "bg-primary-100 text-primary-800 dark:bg-primary-900/40 dark:text-primary-300",
  accent: "bg-accent-100 text-accent-800 dark:bg-accent-900/40 dark:text-accent-300",
  neutral: "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
};

export default function Badge({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
}
