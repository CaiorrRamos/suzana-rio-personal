import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Star } from "lucide-react";
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

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-30">
      <Container className="relative flex min-h-[calc(100vh-5rem)] max-w-[1280px] flex-col justify-start pb-0">
        <div className="relative mx-auto flex min-h-[700px] w-full flex-col items-center sm:min-h-[750px] lg:min-h-[725px]">
          <motion.div
            variants={titleContainer}
            initial="hidden"
            animate="visible"
            className="relative z-20 mx-auto w-full text-center"
          >
            <h1 className="relative mx-auto max-w-[1120px] leading-none">
              <motion.span
                variants={titleLine}
                className="block text-[clamp(3.25rem,5.85vw,6.25rem)] font-bold tracking-[-0.04em] text-[#FFD400]"
              >
                Suzana Rio,
              </motion.span>
              <motion.span
                variants={titleLine}
                className="relative z-10 -mt-1 block text-[clamp(3.1rem,6.25vw,6.75rem)] font-extrabold tracking-[-0.055em] text-[#111111] sm:-mt-3 lg:-mt-5"
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
            className="absolute bottom-[-325px] left-1/2 z-0 h-[620px] w-[94vw] max-w-[1080px] -translate-x-1/2 rounded-t-[999px] bg-[radial-gradient(circle_at_54%_17%,#1f6dff_0%,#0261ce_38%,#05288f_100%)] shadow-[0_26px_38px_rgba(17,24,53,0.22)] sm:bottom-[-365px] sm:h-[755px] lg:bottom-[-430px] lg:h-[915px]"
          />

          <motion.img
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            style={{ y: imageY }}
            src={suzana}
            alt="Suzana Rio Personal Trainer"
            loading="eager"
            className="absolute left-1/2 top-[108px] z-30 w-[min(350vw,1080px)] -translate-x-1/2 object-contain drop-shadow-[0_16px_24px_rgba(17,24,53,0.13)] sm:top-[98px] sm:w-[min(94vw,845px)] lg:top-[86px] lg:w-[900px]"
          />

          <motion.aside
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            className="absolute left-0 top-[45%] z-40 hidden max-w-[218px] text-left text-[#111835] md:block lg:-left-8 xl:-left-14"
          >
            <Quote className="mb-5 fill-[#111835] text-[#111835]" size={42} strokeWidth={2.5} />
            <p className="text-[1rem] font-semibold leading-[1.34] tracking-[-0.015em] lg:text-[1.08rem]">
              Meu trabalho é ajudar pessoas a desenvolverem força, funcionalidade e confiança para viverem melhor em todas as fases da vida.
            </p>
          </motion.aside>

          <motion.aside
            variants={slideRight}
            initial="hidden"
            animate="visible"
            className="absolute right-0 top-[46%] z-40 hidden min-w-[280px] text-right text-[#111835] md:block lg:-right-8 xl:-right-14"
          >
            <div className="mb-4 flex justify-end gap-1.5 text-[#FFD400]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={27} fill="currentColor" strokeWidth={2.5} />
              ))}
            </div>
            <p className="text-[3rem] font-extrabold leading-none tracking-[-0.04em] lg:text-[3.35rem]">+20 Anos</p>
            <p className="mt-2 text-xl font-medium leading-none">de Experiência</p>
          </motion.aside>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="absolute left-1/2 top-[62%] z-50 flex w-[min(88vw,390px)] -translate-x-1/2 flex-col items-stretch gap-2 rounded-[2rem] border border-white/45 bg-white/20 p-2 shadow-[inset_0_1px_18px_rgba(255,255,255,0.44),0_16px_36px_rgba(17,24,53,0.16)] backdrop-blur-xl sm:top-[61%] sm:w-auto sm:flex-row sm:items-center sm:rounded-full"
          >
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0261CE] px-7 py-3 text-lg font-bold text-white transition duration-300 hover:scale-[1.04] hover:bg-[#0255b5] sm:text-xl"
            >
              Conversar <span className="text-3xl leading-none">→</span>
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-lg font-medium text-white transition duration-300 hover:scale-[1.04] hover:bg-white/12 sm:text-xl"
            >
              Sobre mim
            </a>
          </motion.div>
        </div>

        <motion.div variants={titleContainer} initial="hidden" animate="visible" className="relative z-40 grid gap-4 pb-10 md:hidden">
          <motion.div variants={fadeUp} className="rounded-3xl bg-[#FBFCFC] px-5 py-5 text-left shadow-[0_18px_40px_rgba(17,24,53,0.08)]">
            <Quote className="mb-3 fill-[#111835] text-[#111835]" size={34} />
            <p className="text-base font-semibold leading-7 text-[#111835]">
              Meu trabalho é ajudar pessoas a desenvolverem força, funcionalidade e confiança para viverem melhor.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-3xl bg-[#FBFCFC] px-5 py-5 text-center shadow-[0_18px_40px_rgba(17,24,53,0.08)]">
            <div className="mb-3 flex justify-center gap-1.5 text-[#FFD400]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={23} fill="currentColor" />
              ))}
            </div>
            <p className="text-4xl font-extrabold text-[#111835]">+20 Anos</p>
            <p className="text-base font-medium text-[#111835]">de Experiência</p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
