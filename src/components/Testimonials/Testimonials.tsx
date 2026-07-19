import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import servicesBackground from "../../assets/services-background.png";
import { reviews } from "../../data/reviews";
import { BackgroundPattern } from "../BackgroundPattern/BackgroundPattern";
import { Container } from "../Container/Container";
import { ReviewCard } from "../ReviewCard/ReviewCard";
import { fadeUp } from "../../utils/animations";

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [active, setActive] = useState(0);
  const visibleReviews = useMemo(() => [...reviews, ...reviews], []);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % reviews.length), 3200);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="avaliacoes" className="py-12">
      <Container>
        <div className="relative overflow-hidden rounded-[40px] bg-primary py-16 shadow-[0_32px_90px_rgba(13,45,187,0.24)]">
          <img
            src={servicesBackground}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-95"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-primary/34" />
          <BackgroundPattern />
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="relative z-10 mx-auto mb-12 max-w-3xl px-6 text-center">
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Resultados que <br /><span className="text-secondary">falam por si só</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/72">Conheça histórias de pessoas que redescobriram sua força, energia e qualidade de vida através do movimento com propósito.</p>
          </motion.div>
          <Quote className="absolute left-12 top-44 text-white/10" size={120} />
          <div
            className="relative z-10 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              animate={{ x: `-${active * 410}px` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex gap-6 px-6 md:px-12"
            >
              {visibleReviews.map((review, index) => <ReviewCard key={`${review.id}-${index}`} review={review} />)}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
