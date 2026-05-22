import Container from "~/components/layout/Container";

export default function Section({
  heading,
  subheading,
  children,
  className = "",
  bg = "white",
}: {
  heading?: string;
  subheading?: string;
  children: React.ReactNode;
  className?: string;
  bg?: "white" | "gray" | "primary";
}) {
  const bgStyles = {
    white: "bg-white dark:bg-neutral-900",
    gray: "bg-neutral-50 dark:bg-neutral-950",
    primary: "bg-primary-50 dark:bg-primary-900/20",
  };

  return (
    <section className={`py-16 sm:py-20 ${bgStyles[bg]} ${className}`}>
      <Container>
        {(heading || subheading) && (
          <div className="mb-12 text-center">
            {heading && (
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                {subheading}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
