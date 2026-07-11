import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionTitle({ eyebrow, title, highlight, description, align = "center", light = false }: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}
    >
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-secondary">{eyebrow}</p>}
      <h2 className={light ? "text-4xl font-bold leading-tight text-white md:text-5xl" : "text-4xl font-bold leading-tight text-dark md:text-5xl"}>
        {title} {highlight && <span className="text-secondary">{highlight}</span>}
      </h2>
      {description && <p className={light ? "mt-5 text-sm leading-7 text-white/74 md:text-base" : "mt-5 text-sm leading-7 text-slate-500 md:text-base"}>{description}</p>}
    </motion.div>
  );
}
