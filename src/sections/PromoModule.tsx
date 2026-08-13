import { FaTag, FaPhone, FaStar, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/siteConfig";

const includes = ["3 rooms cleaned", "Spot removal included", "Deodorizer included"];

export default function PromoModule() {
  return (
    <section className="relative bg-navy py-14 overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-cyan pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.13, 0.06] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-cta pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 text-white">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:block bg-cta rounded-full p-5 shrink-0 shadow-lg shadow-cta/30"
            >
              <FaTag className="text-white text-3xl" />
            </motion.div>

            <div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                  >
                    <FaStar className="text-amber-400 text-sm" />
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-wrap items-baseline gap-3">
                <motion.span
                  animate={{
                    scale: [1, 1.05, 1],
                    textShadow: [
                      "0 0 0px #06c2e2",
                      "0 0 20px #06c2e2",
                      "0 0 0px #06c2e2",
                    ],
                  }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="text-5xl md:text-6xl font-display font-bold text-cyan leading-none"
                >
                  {SITE_CONFIG.promo.price}
                </motion.span>
                <span className="text-2xl font-bold uppercase">
                  First Three Rooms
                </span>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3">
                {includes.map((i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-sm text-white/85"
                  >
                    <FaCheck className="text-cyan text-xs" />
                    {i}
                  </span>
                ))}
              </div>

              <p className="text-white/60 text-xs mt-3 max-w-md">
                Carpet cleaning special for homes in Fort Collins, Loveland,
                Windsor, Severance, Timnath, Wellington and Greeley. Additional
                rooms, stairs and heavy soiling quoted on site.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-cta text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-cta/40 text-center hover:bg-navy-2 transition-colors text-lg"
            >
              Claim the {SITE_CONFIG.promo.price} Special →
            </motion.a>
            <a
              href={SITE_CONFIG.phoneHref}
              className="flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-4 rounded-full hover:bg-white/20 transition-colors"
            >
              <FaPhone />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
