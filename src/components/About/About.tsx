import { motion } from "framer-motion";
import suzanaBox from "../../assets/suzana-box.webp";
import { Container } from "../Container/Container";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { fadeLeft, fadeRight } from "../../utils/animations";

export function About() {
  return (
    <section id="sobre" className="py-10 sm:py-12">
      <Container>
        <div className="grid items-center gap-7 rounded-[28px] bg-[#dbe8ff] px-5 py-9 transition-colors duration-300 dark:bg-white/8 sm:gap-10 sm:rounded-[40px] sm:px-10 sm:py-12 lg:grid-cols-2 lg:px-16">
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="relative mx-auto flex h-[310px] w-full max-w-[390px] items-center justify-center overflow-visible sm:h-[500px] sm:max-w-[430px] lg:justify-self-center">
            <img src={suzanaBox} alt="Suzana Rio segurando celular" loading="lazy" className="h-full w-full scale-[1.08] object-contain object-center drop-shadow-[0_28px_42px_rgba(13,45,187,0.2)] sm:scale-[1.16]" />
          </motion.div>
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
            <h2 className="text-3xl font-bold text-dark dark:text-[#FBFCFC] sm:text-4xl md:text-5xl">Sobre <span className="text-primary">mim</span></h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 dark:text-white/68">
              Profissional de Educação Física há mais de 20 anos, acredito que exercício físico vai muito além da estética. Meu trabalho é ajudar pessoas a desenvolverem força, disposição, funcionalidade e confiança para viverem melhor em todas as fases da vida.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
              <div>
                <strong className="block text-2xl font-bold text-dark dark:text-[#FBFCFC]">+150 Pessoas</strong>
                <span className="text-xs text-slate-500 dark:text-white/55">Saíram do sedentarismo</span>
              </div>
              <div>
                <strong className="block text-2xl font-bold text-dark dark:text-[#FBFCFC]">+100 Corpos</strong>
                <span className="text-xs text-slate-500 dark:text-white/55">Transformados</span>
              </div>
            </div>
            <PrimaryButton href="#contato" className="mt-8 w-full sm:w-auto">Começar agora</PrimaryButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
