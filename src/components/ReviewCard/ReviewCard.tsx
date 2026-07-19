import { memo } from "react";
import { Star } from "lucide-react";
import type { Review } from "../../data/reviews";
import { services } from "../../data/services";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = memo(function ReviewCard({ review }: ReviewCardProps) {
  const backgroundImage = services[(review.id - 1) % services.length]?.image;

  return (
    <article className="relative min-w-[300px] overflow-hidden rounded-[28px] border border-white/18 bg-white/12 p-5 text-white shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-2 md:min-w-[380px]">
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-34 transition duration-500 hover:scale-[1.04]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-primary/88 via-primary/72 to-dark/88" />
      <div aria-hidden="true" className="absolute inset-0 bg-black/18 backdrop-blur-[2px]" />

      <div className="relative z-10 mb-5 flex items-center gap-3">
        <img src={review.image} alt={review.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
        <div>
          <h3 className="text-sm font-bold">{review.name}</h3>
          <p className="text-xs text-white/62">{review.role}</p>
        </div>
      </div>
      <div className="relative z-10 mb-4 flex items-center gap-1 text-secondary">
        {Array.from({ length: review.rating }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}
        <span className="ml-1 text-sm font-semibold text-white">{review.rating}.0</span>
      </div>
      <p className="relative z-10 text-sm leading-7 text-white/84">{review.text}</p>
    </article>
  );
});
