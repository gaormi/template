import Link from "next/link";

export default function Card({
  title,
  description,
  href,
  children,
  className = "",
}: {
  title?: string;
  description?: string;
  href?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const Wrapper = href ? Link : "div";
  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={`block rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 ${className}`}
    >
      {title && (
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>
      )}
      {description && (
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      )}
      {children}
    </Wrapper>
  );
}
