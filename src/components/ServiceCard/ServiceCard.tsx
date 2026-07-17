import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "../../data/services";
import { staggerItem } from "../../utils/animations";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = memo(function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -4 }}
      className="group relative flex h-[390px] min-w-[260px] shrink-0 basis-[84%] flex-col overflow-visible rounded-[24px] sm:h-[430px] sm:min-w-[292px] sm:rounded-[28px] md:basis-[calc((100%_-_48px)/3)]"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/42 bg-white/8 shadow-[0_22px_60px_rgba(0,0,0,0.16)] backdrop-blur transition duration-300 group-hover:border-white/58 group-hover:bg-white/12 group-hover:shadow-[0_28px_70px_rgba(0,0,0,0.22)] sm:rounded-[28px]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/12 to-transparent opacity-70" />
        <div className="flex h-[104px] shrink-0 items-center border-b border-white/28 px-6 py-5 sm:h-[116px] sm:px-8">
          <h3 className="max-w-[12ch] text-[1.35rem] font-semibold leading-[1.12] text-white sm:text-[1.55rem] md:text-[1.65rem]">{service.title}</h3>
        </div>

        <div className="relative mt-auto flex h-[286px] shrink-0 items-end px-0 pb-0 pt-16 sm:h-[314px]">
          <div className="absolute left-10 right-10 top-[50px] h-[86px] rounded-t-[24px] bg-white/18 shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] transition duration-300 group-hover:-translate-y-3 group-hover:bg-white/26" />
          <div className="absolute left-7 right-7 top-[66px] h-[96px] rounded-t-[26px] bg-[#b8c7f4]/56 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition duration-300 group-hover:-translate-y-2 group-hover:bg-[#cbd6fb]/70" />
          <div className="absolute left-4 right-4 top-[82px] h-[106px] rounded-t-[28px] bg-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] transition duration-300 group-hover:-translate-y-1 group-hover:bg-white/25" />

          <div className="relative z-10 h-[235px] w-full overflow-hidden rounded-t-[30px] rounded-bl-[28px] rounded-br-[78px] bg-white/10 shadow-[0_-12px_30px_rgba(255,255,255,0.08)] transition duration-500 group-hover:-translate-y-1">
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/28 via-primary/0 to-white/8 transition duration-500 group-hover:from-primary/38" />
          </div>

          <button
            aria-label={`Ver ${service.title}`}
            className="absolute bottom-0 right-0 z-20 grid h-20 w-20 place-items-center rounded-full border border-white/10 bg-dark text-white shadow-[0_18px_40px_rgba(0,0,0,0.26)] transition duration-300 group-hover:scale-[1.04] group-hover:border-secondary/50 group-hover:bg-secondary group-hover:text-dark sm:h-[88px] sm:w-[88px] md:h-24 md:w-24"
          >
            <ArrowUpRight size={40} strokeWidth={1.8} className="sm:h-[46px] sm:w-[46px]" />
          </button>
        </div>
      </div>
    </motion.article>
  );
});
