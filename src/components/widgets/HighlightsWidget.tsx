import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaTag,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaBroom,
  FaClock,
  FaTimes,
} from "react-icons/fa";
import { useHighlightRotation } from "@/hooks/useHighlightRotation";
import { useScrollTop } from "@/hooks/useScrollTop";
import type { HighlightType } from "@/data/highlights";

const typeConfig: Record<
  HighlightType,
  { icon: React.ReactNode; color: string; bg: string }
> = {
  offer: { icon: <FaTag />, color: "text-cta", bg: "bg-cta/10" },
  area: { icon: <FaMapMarkerAlt />, color: "text-sky", bg: "bg-sky/10" },
  credential: { icon: <FaShieldAlt />, color: "text-navy", bg: "bg-navy/10" },
  service: { icon: <FaBroom />, color: "text-cyan", bg: "bg-cyan/10" },
  hours: { icon: <FaClock />, color: "text-sky", bg: "bg-sky/10" },
};

export default function HighlightsWidget() {
  const [dismissed, setDismissed] = useState(false);
  const item = useHighlightRotation(5000);
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
            <p className="text-sm font-bold text-navy leading-snug">
              {item.title}
            </p>
            <p className="text-sm text-muted leading-snug mt-0.5">
              {item.detail}
            </p>
            <a
              href="#contact"
              className="inline-block text-xs font-bold text-cta mt-2 hover:underline"
            >
              Get a free estimate →
            </a>
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
