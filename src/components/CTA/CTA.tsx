import { motion } from "framer-motion";
import { Mail, Medal, ShieldCheck, Users } from "lucide-react";
import { Container } from "../Container/Container";
import { fadeUp } from "../../utils/animations";

export function CTA() {
  return (
    <section className="bg-white py-14 transition-colors duration-300 dark:bg-[#070b1a] sm:py-18">
      <Container>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-dark dark:text-[#FBFCFC] sm:text-4xl md:text-5xl">
            Pronto(a) para <span className="text-primary sm:block">Transformar sua Vida?</span>
          </h2>
          <form className="mx-auto mt-8 grid max-w-xl grid-cols-[auto_1fr] items-center gap-2 rounded-[1.5rem] border border-slate-200 bg-white p-2 shadow-[0_18px_45px_rgba(17,24,39,0.08)] dark:border-white/12 dark:bg-white/10 sm:flex sm:rounded-full">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary"><Mail size={18} /></span>
            <input type="email" placeholder="Informe seu Email" className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm font-medium text-dark outline-none placeholder:text-slate-400 dark:text-white sm:py-0" />
            <button type="submit" className="col-span-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:scale-[1.04] hover:bg-[#08249c] sm:col-span-1">Enviar</button>
          </form>
          <div className="mt-6 grid gap-3 text-xs font-semibold text-slate-600 dark:text-white/65 sm:flex sm:flex-wrap sm:justify-center sm:gap-5">
            <span className="inline-flex items-center gap-1"><Medal size={14} /> 4.9/5 Avaliações</span>
            <span className="inline-flex items-center gap-1"><Users size={14} /> 100+ Corpos transformados</span>
            <span className="inline-flex items-center gap-1"><ShieldCheck size={14} /> Metodologia confirmada</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
