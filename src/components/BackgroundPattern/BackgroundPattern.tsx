import { clsx } from "clsx";

interface BackgroundPatternProps {
  className?: string;
}

export function BackgroundPattern({ className }: BackgroundPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        "pointer-events-none absolute inset-0 opacity-60",
        "bg-[radial-gradient(circle_at_20%_20%,rgba(255,210,0,0.18),transparent_22%),radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.26),transparent_18%),linear-gradient(135deg,rgba(255,255,255,0.12)_0_1px,transparent_1px_12px)]",
        className,
      )}
    />
  );
}
