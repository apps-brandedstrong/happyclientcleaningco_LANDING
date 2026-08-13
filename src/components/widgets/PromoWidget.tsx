import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTag, FaTimes } from "react-icons/fa";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useScrollTop } from "@/hooks/useScrollTop";

export default function PromoWidget() {
  const [dismissed, setDismissed] = useState(false);
  // Recién aparece pasado el hero, para no tapar los CTAs principales.
  const pastHero = useScrollTop(600);

  if (dismissed || !pastHero) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="hidden sm:block fixed bottom-40 left-4 z-40 w-[230px]"
      >
        <div className="bg-navy text-white rounded-2xl shadow-2xl overflow-hidden">
          <motion.div
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-1 bg-cyan origin-left"
          />

          <div className="p-4">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="bg-cta rounded-full p-1.5 shrink-0">
                  <FaTag className="text-white text-xs" />
                </div>
                <span className="text-xs font-semibold text-white/80 uppercase tracking-wide">
                  Carpet Special ✨
                </span>
              </div>
              <button
                onClick={() => setDismissed(true)}
                className="text-white/40 hover:text-white/80 transition-colors shrink-0"
                aria-label="Dismiss"
              >
                <FaTimes size={11} />
              </button>
            </div>

            <motion.p
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="text-4xl font-display font-bold text-cyan leading-none mb-1"
            >
              {SITE_CONFIG.promo.price}
            </motion.p>
            <p className="text-xs text-white/70 mb-3 leading-snug">
              First 3 rooms — spot removal &amp; deodorizer included
            </p>

            <a
              href={SITE_CONFIG.phoneHref}
              className="block w-full text-center bg-cta text-white text-xs font-bold py-2 rounded-full hover:bg-navy-2 transition-colors"
            >
              Call {SITE_CONFIG.phone} 📞
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
