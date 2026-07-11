import { motion } from "framer-motion";
import { Mail, Medal, ShieldCheck, Users } from "lucide-react";
import { Container } from "../Container/Container";
import { fadeUp } from "../../utils/animations";

export function CTA() {
  return (
    <section className="bg-white py-18 transition-colors duration-300 dark:bg-[#070b1a]">
      <Container>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold leading-tight text-dark dark:text-[#FBFCFC] md:text-5xl">
            Pronto(a) para <br /><span className="text-primary">Transformar sua Vida?</span>
          </h2>
          <form className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full border border-slate-200 bg-white p-2 shadow-[0_18px_45px_rgba(17,24,39,0.08)] dark:border-white/12 dark:bg-white/10">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary"><Mail size={18} /></span>
            <input type="email" placeholder="Informe seu Email" className="min-w-0 flex-1 bg-transparent px-2 text-sm font-medium text-dark outline-none placeholder:text-slate-400 dark:text-white" />
            <button type="submit" className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:scale-[1.04] hover:bg-[#08249c]">Enviar</button>
          </form>
          <div className="mt-6 flex flex-wrap justify-center gap-5 text-xs font-semibold text-slate-600 dark:text-white/65">
            <span className="inline-flex items-center gap-1"><Medal size={14} /> 4.9/5 Avaliações</span>
            <span className="inline-flex items-center gap-1"><Users size={14} /> 100+ Corpos transformados</span>
            <span className="inline-flex items-center gap-1"><ShieldCheck size={14} /> Metodologia confirmada</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
