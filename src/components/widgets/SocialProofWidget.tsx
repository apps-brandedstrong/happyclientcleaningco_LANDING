import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaPhone,
  FaStar,
  FaCalendarCheck,
  FaTag,
  FaCommentAlt,
  FaFileAlt,
  FaTimes,
} from "react-icons/fa";
import { useSocialProofRotation } from "@/hooks/useSocialProofRotation";
import { useScrollTop } from "@/hooks/useScrollTop";
import type { InteractionType } from "@/data/socialProof";

const typeConfig: Record<
  InteractionType,
  { icon: React.ReactNode; color: string; bg: string }
> = {
  call: { icon: <FaPhone />, color: "text-cta", bg: "bg-cta/10" },
  quote: { icon: <FaFileAlt />, color: "text-sky", bg: "bg-sky/10" },
  review: { icon: <FaStar />, color: "text-amber-500", bg: "bg-amber-100" },
  book: { icon: <FaCalendarCheck />, color: "text-navy", bg: "bg-navy/10" },
  promo: { icon: <FaTag />, color: "text-cyan", bg: "bg-cyan/10" },
  message: { icon: <FaCommentAlt />, color: "text-sky", bg: "bg-sky/10" },
};

export default function SocialProofWidget() {
  const [dismissed, setDismissed] = useState(false);
  const item = useSocialProofRotation(5000);
  // Recién aparece pasado el hero, para no tapar los CTAs principales.
  const pastHero = useScrollTop(600);

  if (dismissed || !pastHero) return null;

  const config = typeConfig[item.type];

  return (
    <div className="hidden sm:block fixed bottom-4 left-4 z-40 w-80 max-w-[calc(100vw-2rem)]">
      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="bg-white rounded-2xl shadow-xl border border-line p-4 flex items-start gap-3"
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${config.bg}`}
          >
            <span className={`text-base ${config.color}`}>{config.icon}</span>
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm text-ink leading-snug">
              <span className="font-bold">{item.name}</span>{" "}
              <span className="text-muted">from {item.location}</span>
            </p>
            <p className="text-sm text-muted leading-snug">
              {item.action}{" "}
              <span className="font-semibold text-navy">{item.service}</span>
            </p>
            {item.type === "review" && item.rating && (
              <div className="flex gap-0.5 mt-1">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 text-xs" />
                ))}
              </div>
            )}
            <p className="text-xs text-muted/70 mt-1">{item.timeAgo}</p>
          </div>

          <button
            onClick={() => setDismissed(true)}
            className="text-line hover:text-muted transition-colors shrink-0 mt-0.5"
            aria-label="Dismiss"
          >
            <FaTimes size={12} />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
