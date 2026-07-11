import { memo } from "react";
import { Star } from "lucide-react";
import type { Review } from "../../data/reviews";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = memo(function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="min-w-[300px] rounded-[28px] border border-white/18 bg-white/12 p-5 text-white shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 md:min-w-[380px]">
      <div className="mb-5 flex items-center gap-3">
        <img src={review.image} alt={review.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
        <div>
          <h3 className="text-sm font-bold">{review.name}</h3>
          <p className="text-xs text-white/62">{review.role}</p>
        </div>
      </div>
      <div className="mb-4 flex items-center gap-1 text-secondary">
        {Array.from({ length: review.rating }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}
        <span className="ml-1 text-sm font-semibold text-white">{review.rating}.0</span>
      </div>
      <p className="text-sm leading-7 text-white/80">{review.text}</p>
    </article>
  );
});
