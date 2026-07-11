import { clsx } from "clsx";

interface DecorativeStrokeProps {
  className?: string;
}

export function DecorativeStroke({ className }: DecorativeStrokeProps) {
  return (
    <span
      aria-hidden="true"
      className={clsx(
        "absolute block h-12 w-16 rounded-[80%] border-t-[5px] border-l-[5px] border-secondary",
        className,
      )}
    />
  );
}
