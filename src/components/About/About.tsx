import { motion } from "framer-motion";
import suzanaBox from "../../assets/suzana-box.webp";
import { Container } from "../Container/Container";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { fadeLeft, fadeRight } from "../../utils/animations";

export function About() {
  return (
    <section id="sobre" className="py-12">
      <Container>
        <div className="grid items-center gap-10 rounded-[40px] bg-[#dbe8ff] px-6 py-12 transition-colors duration-300 dark:bg-white/8 sm:px-10 lg:grid-cols-2 lg:px-16">
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="relative mx-auto flex w-full max-w-sm items-center justify-center">
            <div className="relative flex h-[460px] w-full items-center justify-center overflow-hidden rounded-[38px] bg-primary shadow-[0_28px_70px_rgba(13,45,187,0.18)]">
              <div className="absolute inset-6 rounded-[34px] bg-[radial-gradient(circle_at_50%_35%,#1f6dff_0%,#0261ce_48%,#03258f_100%)]" />
              <img src={suzanaBox} alt="Suzana Rio segurando celular" loading="lazy" className="relative z-10 h-full w-[92%] translate-x-1 object-contain object-center" />
            </div>
          </motion.div>
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
            <h2 className="text-4xl font-bold text-dark dark:text-[#FBFCFC] md:text-5xl">Sobre <span className="text-primary">mim</span></h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 dark:text-white/68">
              Profissional de Educação Física há mais de 20 anos, acredito que exercício físico vai muito além da estética. Meu trabalho é ajudar pessoas a desenvolverem força, disposição, funcionalidade e confiança para viverem melhor em todas as fases da vida.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <strong className="block text-2xl font-bold text-dark dark:text-[#FBFCFC]">+150 Pessoas</strong>
                <span className="text-xs text-slate-500 dark:text-white/55">Saíram do sedentarismo</span>
              </div>
              <div>
                <strong className="block text-2xl font-bold text-dark dark:text-[#FBFCFC]">+100 Corpos</strong>
                <span className="text-xs text-slate-500 dark:text-white/55">Transformados</span>
              </div>
            </div>
            <PrimaryButton href="#contato" className="mt-8">Começar agora</PrimaryButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
