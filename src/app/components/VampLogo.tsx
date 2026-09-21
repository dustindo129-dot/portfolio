export default function VampLogo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display font-bold text-4xl tracking-tight leading-none ${className}`}
    >
      vamp.
    </span>
  );
}
