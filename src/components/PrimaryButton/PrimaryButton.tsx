import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";
import { clsx } from "clsx";
import { ArrowUpRight } from "lucide-react";

type ButtonVariant = "primary" | "ghost" | "light";

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  showIcon?: boolean;
}

type PrimaryButtonProps = PropsWithChildren<BaseProps> &
  (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export function PrimaryButton({
  children,
  variant = "primary",
  className,
  showIcon = true,
  ...props
}: PrimaryButtonProps) {
  const classes = clsx(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:scale-[1.04] focus:outline-none focus:ring-4 focus:ring-secondary/40",
    variant === "primary" && "bg-primary text-white shadow-[0_18px_40px_rgba(13,45,187,0.28)] hover:bg-[#08249c]",
    variant === "ghost" && "border border-dark/10 bg-white/60 text-dark backdrop-blur hover:border-primary/30 hover:text-primary",
    variant === "light" && "bg-white text-primary shadow-[0_18px_40px_rgba(255,255,255,0.2)] hover:bg-secondary",
    className,
  );

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
        {showIcon && <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {showIcon && <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </button>
  );
}
