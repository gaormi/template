export default function Select({
  label,
  error,
  id,
  options,
  placeholder,
  className = "",
  ...props
}: {
  label: string;
  error?: string;
  id: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children">) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {label}
        {props.required && <span className="text-red-500"> *</span>}
      </label>
      <select
        id={id}
        className={`block w-full rounded-lg border px-3 py-2 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-800 dark:text-neutral-100 ${
          error
            ? "border-red-300 focus:ring-red-500 focus:border-red-500"
            : "border-neutral-300 dark:border-neutral-600"
        }`}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
