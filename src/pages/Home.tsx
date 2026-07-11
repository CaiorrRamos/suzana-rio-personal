import { Navbar } from "../components/Navbar/Navbar";
import { Hero } from "../components/Hero/Hero";
import { Services } from "../components/Services/Services";
import { BenefitTimeline } from "../components/BenefitTimeline/BenefitTimeline";
import { About } from "../components/About/About";
import { Testimonials } from "../components/Testimonials/Testimonials";
import { CTA } from "../components/CTA/CTA";
import { Footer } from "../components/Footer/Footer";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { motion } from "framer-motion";

export default function Home() {
  const { progress } = useScrollProgress();

  return (
    <main className="overflow-hidden bg-white transition-colors duration-300 dark:bg-[#070b1a]">
      <motion.div className="fixed left-0 top-0 z-[60] h-1 origin-left bg-secondary" style={{ width: progress }} />
      <Navbar />
      <Hero />
      <Services />
      <BenefitTimeline />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
