import { motion } from "framer-motion";
import servicesBackground from "../../assets/services-background.png";
import { services } from "../../data/services";
import { BackgroundPattern } from "../BackgroundPattern/BackgroundPattern";
import { Container } from "../Container/Container";
import { ServiceCard } from "../ServiceCard/ServiceCard";
import { staggerContainer } from "../../utils/animations";

interface GoldenBoltProps {
  className: string;
}

function GoldenBolt({ className }: GoldenBoltProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 170 260"
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="boltGold" x1="26" y1="11" x2="146" y2="234" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFF6A5" />
          <stop offset="0.34" stopColor="#F8D613" />
          <stop offset="0.62" stopColor="#FFB400" />
          <stop offset="1" stopColor="#FFF5A0" />
        </linearGradient>
        <linearGradient id="boltEdge" x1="37" y1="28" x2="123" y2="217" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="0.58" stopColor="#FFFFFF" stopOpacity="0.15" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.55" />
        </linearGradient>
        <filter id="boltGlow" x="-35%" y="-25%" width="170%" height="150%" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 1 0 0.75 0 0 0.67 0 0 0.05 0 0 0 0 0 0.7 0" />
          <feBlend in="SourceGraphic" mode="screen" />
        </filter>
      </defs>
      <path
        d="M98 5 18 121h54l-22 134 103-160H94L98 5Z"
        fill="url(#boltGold)"
        filter="url(#boltGlow)"
      />
      <path
        d="M88 28 36 111h51L68 214l62-104H79L88 28Z"
        fill="url(#boltEdge)"
        opacity="0.68"
      />
      <path
        d="M98 5 18 121h54l-22 134 103-160H94L98 5Z"
        stroke="#FFF7B8"
        strokeWidth="3"
        strokeLinejoin="round"
        opacity="0.72"
      />
    </svg>
  );
}

export function Services() {
  return (
    <section id="servicos" className="relative z-40 -mt-24 px-0 pb-16 sm:-mt-28 sm:pb-20 lg:-mt-36">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-primary px-5 py-12 shadow-[0_26px_70px_rgba(17,24,53,0.24)] sm:rounded-[36px] sm:px-10 sm:py-16 lg:rounded-[40px] lg:px-12">
          <img
            src={servicesBackground}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-95"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-primary/30" />
          <BackgroundPattern />
          <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-secondary/14 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-secondary/12 blur-3xl" />
          <GoldenBolt className="pointer-events-none absolute -left-16 top-[31%] z-[1] h-36 w-24 -rotate-[24deg] opacity-70 sm:-left-8 sm:h-56 sm:w-36 sm:opacity-95" />
          <GoldenBolt className="pointer-events-none absolute left-[47%] top-[16%] z-[1] hidden h-28 w-20 rotate-[6deg] opacity-90 md:block" />
          <GoldenBolt className="pointer-events-none absolute -right-16 bottom-[19%] z-[1] h-40 w-24 rotate-[18deg] opacity-75 sm:-right-10 sm:h-60 sm:w-36 sm:opacity-95" />
          <div className="relative z-10 mb-10 grid gap-5 sm:mb-14 md:grid-cols-[1fr_1fr] md:items-start">
            <h2 className="text-3xl font-normal text-white sm:text-4xl md:text-5xl">Meus Serviços</h2>
            <p className="max-w-xl justify-self-start text-sm font-medium leading-6 text-white sm:text-base md:justify-self-end md:text-lg">
              Minha missão é mostrar que atividade física não precisa ser sofrimento. Ela pode ser um caminho possível, sustentável e transformador.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative z-10 -mx-3 flex snap-x items-stretch gap-6 overflow-x-auto px-3 pb-10 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service) => <ServiceCard key={service.id} service={service} />)}
          </motion.div>
          <div className="relative z-10 mx-auto mt-2 flex w-max gap-2">
            <span className="h-2 w-12 rounded-full bg-secondary" />
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="h-2 w-2 rounded-full bg-white" />
          </div>
        </div>
      </Container>
    </section>
  );
}
