export function GradientBar({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`gradient-bg relative w-full rounded-[0px_20px_20px_20px] ${className}`}
    >
      {children}
    </div>
  );
}
