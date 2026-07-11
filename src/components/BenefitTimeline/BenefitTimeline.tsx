import { motion } from "framer-motion";
import { benefits } from "../../data/benefits";
import { Container } from "../Container/Container";
import { fadeLeft, fadeRight, fadeUp } from "../../utils/animations";

export function BenefitTimeline() {
  return (
    <section className="bg-white py-20 transition-colors duration-300 dark:bg-[#070b1a]">
      <Container>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="mb-16 text-center">
          <h2 className="text-4xl font-bold leading-tight text-dark transition-colors duration-300 dark:text-[#FBFCFC] md:text-5xl">
            Porque entrar no <span className="text-secondary">#SUZANINHATEAM</span>?
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-6 top-0 h-full border-l-2 border-dashed border-primary/35 md:left-1/2 md:-translate-x-1/2" />
          <div className="grid gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              const isLeft = benefit.side === "left";
              return (
                <motion.div
                  key={benefit.id}
                  variants={isLeft ? fadeRight : fadeLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  className="relative grid items-center gap-6 pl-20 md:grid-cols-2 md:pl-0"
                >
                  <span className="absolute left-3 top-5 z-10 grid h-7 w-7 place-items-center rounded-full border-4 border-white bg-secondary shadow-[0_0_0_2px_rgba(13,45,187,0.35)] md:left-1/2 md:-translate-x-1/2" />
                  <article className={isLeft ? "md:pr-20 md:text-right" : "md:col-start-2 md:pl-20"}>
                    <div className={isLeft ? "mb-4 flex justify-start md:justify-end" : "mb-4 flex justify-start"}>
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white shadow-[0_16px_34px_rgba(13,45,187,0.22)]">
                        <Icon size={22} />
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-dark dark:text-[#FBFCFC]">{benefit.title}</h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400 dark:text-white/58 md:ml-auto">{benefit.description}</p>
                  </article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
