import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useState } from "react";
import suzana from "../../assets/suzana-rio.webp";
import { Container } from "../Container/Container";

const easeOut = [0.16, 1, 0.3, 1] as const;

const titleContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const titleLine = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeOut } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -34 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
};

const slideRight = {
  hidden: { opacity: 0, x: 34 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

function YellowStroke({ className, variant = "short" }: { className: string; variant?: "short" | "arc" }) {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 120 90"
      className={className}
      animate={{ y: [0, -7, 0], rotate: [0, 1.5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      fill="none"
    >
      {variant === "short" ? (
        <>
          <path d="M23 49C38 23 62 14 93 18" stroke="#FFD400" strokeWidth="8" strokeLinecap="round" />
          <path d="M54 73C55 49 65 31 84 20" stroke="#FFD400" strokeWidth="8" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M31 56C43 29 63 17 91 19" stroke="#FFD400" strokeWidth="8" strokeLinecap="round" />
          <path d="M76 10C57 23 50 39 53 62" stroke="#FFD400" strokeWidth="8" strokeLinecap="round" />
          <path d="M96 36C105 35 112 38 117 44" stroke="#FFD400" strokeWidth="8" strokeLinecap="round" />
        </>
      )}
    </motion.svg>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, 26]);
  const [activeAction, setActiveAction] = useState(0);

  return (
    <section id="inicio" className="relative min-h-[740px] overflow-hidden bg-white pt-22 transition-colors duration-300 dark:bg-[#070b1a] sm:min-h-[760px] sm:pt-28 lg:min-h-screen lg:pt-30">
      <Container className="relative flex min-h-[calc(100vh-5rem)] max-w-[1280px] flex-col justify-start pb-0 max-lg:min-h-[650px] max-sm:min-h-[620px]">
        <div className="relative mx-auto flex min-h-[650px] w-full flex-col items-center sm:min-h-[650px] lg:min-h-[725px]">
          <motion.div
            variants={titleContainer}
            initial="hidden"
            animate="visible"
            className="relative z-20 mx-auto w-full text-center"
          >
            <h1 className="relative mx-auto max-w-[22rem] leading-none sm:max-w-[1120px]">
              <motion.span
                variants={titleLine}
                className="block text-[clamp(2.65rem,11.4vw,3.9rem)] font-bold text-[#FFD400] sm:text-[clamp(4.35rem,9vw,6.25rem)] lg:text-[clamp(4.8rem,5.85vw,6.25rem)]"
              >
                Suzana Rio,
              </motion.span>
              <motion.span
                variants={titleLine}
                className="relative z-10 -mt-1 block text-[clamp(2.45rem,10.4vw,3.55rem)] font-extrabold text-[#111835] transition-colors duration-300 dark:text-[#FBFCFC] sm:-mt-3 sm:text-[clamp(4.2rem,9.5vw,6.75rem)] lg:-mt-5 lg:text-[clamp(5rem,6.25vw,6.75rem)]"
              >
                Personal Trainer
              </motion.span>
              <YellowStroke className="absolute right-[12%] top-[-12%] hidden h-20 w-24 lg:block" variant="arc" />
              <YellowStroke className="absolute left-[20%] top-[60%] hidden h-24 w-28 -rotate-12 lg:block" />
            </h1>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            style={{ y: imageY }}
            className="absolute bottom-[-155px] left-1/2 z-0 h-[455px] w-[116vw] max-w-[590px] -translate-x-1/2 rounded-t-[999px] bg-[radial-gradient(circle_at_50%_17%,#1f6dff_0%,#0261ce_38%,#05288f_100%)] shadow-[0_24px_34px_rgba(17,24,53,0.2)] sm:bottom-[-270px] sm:h-[610px] sm:max-w-[760px] sm:bg-[radial-gradient(circle_at_54%_17%,#1f6dff_0%,#0261ce_38%,#05288f_100%)] md:w-[86vw] lg:bottom-[-380px] lg:h-[800px] lg:max-w-[900px]"
          />

          <motion.img
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            style={{ y: imageY }}
            src={suzana}
            alt="Suzana Rio Personal Trainer"
            loading="eager"
            className="absolute left-1/2 top-[72px] z-30 h-[610px] w-auto max-w-none -translate-x-1/2 object-contain object-center drop-shadow-[0_16px_24px_rgba(17,24,53,0.13)] sm:top-[118px] sm:h-[760px] lg:top-[88px] lg:h-[900px]"
          />

          <motion.aside
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            className="absolute left-0 top-[45%] z-40 hidden max-w-[218px] text-left text-[#111835] transition-colors duration-300 dark:text-[#FBFCFC] lg:block lg:-left-14 xl:-left-24"
          >
            <Quote className="mb-5 fill-current text-current" size={42} strokeWidth={2.5} />
            <p className="text-[1.08rem] font-semibold leading-[1.34]">
              Meu trabalho é ajudar pessoas a desenvolverem força, funcionalidade e confiança para viverem melhor em todas as fases da vida.
            </p>
          </motion.aside>

          <motion.aside
            variants={slideRight}
            initial="hidden"
            animate="visible"
            className="absolute right-0 top-[46%] z-40 hidden min-w-[280px] text-right text-[#111835] transition-colors duration-300 dark:text-[#FBFCFC] lg:block lg:-right-14 xl:-right-24"
          >
            <div className="mb-4 flex justify-end gap-1.5 text-[#FFD400]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={27} fill="currentColor" strokeWidth={2.5} />
              ))}
            </div>
            <p className="text-[3.35rem] font-extrabold leading-none">+20 Anos</p>
            <p className="mt-2 text-xl font-medium leading-none">de Experiência</p>
          </motion.aside>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="absolute left-1/2 top-[78%] z-[45] grid w-[min(92vw,360px)] -translate-x-1/2 grid-cols-2 rounded-full border border-white/45 bg-white/20 p-1.5 shadow-[inset_0_1px_18px_rgba(255,255,255,0.44),0_16px_36px_rgba(17,24,53,0.16)] backdrop-blur-xl sm:top-[81%] sm:w-[390px] lg:top-[84%]"
          >
            <motion.span
              aria-hidden="true"
              animate={{ x: `${activeAction * 100}%` }}
              transition={{ type: "spring", stiffness: 380, damping: 34 }}
              className="absolute left-1.5 top-1.5 h-[calc(100%-0.75rem)] w-[calc(50%-0.375rem)] rounded-full bg-[#FFD400] shadow-[0_10px_22px_rgba(17,24,53,0.18)]"
            />
            <a
              href="#contato"
              onMouseEnter={() => setActiveAction(0)}
              onFocus={() => setActiveAction(0)}
              className={`relative z-10 inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-sm font-bold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400]/70 sm:min-h-12 sm:px-4 sm:text-lg ${
                activeAction === 0 ? "text-[#111835]" : "text-white hover:text-[#111835]"
              }`}
            >
              Conversar <span className="text-xl leading-none sm:text-2xl">→</span>
            </a>
            <a
              href="#sobre"
              onMouseEnter={() => setActiveAction(1)}
              onFocus={() => setActiveAction(1)}
              className={`relative z-10 inline-flex min-h-11 items-center justify-center rounded-full px-3 py-2.5 text-sm font-bold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400]/70 sm:min-h-12 sm:px-4 sm:text-lg ${
                activeAction === 1 ? "text-[#111835]" : "text-white hover:text-[#111835]"
              }`}
            >
              Sobre mim
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
