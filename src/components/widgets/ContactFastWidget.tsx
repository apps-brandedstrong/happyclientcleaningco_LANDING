import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaEnvelope, FaCalendarCheck, FaTimes } from "react-icons/fa";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function ContactFastWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 items-center">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white shadow-2xl rounded-l-2xl p-5 w-64 border border-line"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-navy">Contact Us</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-muted hover:text-navy transition-colors"
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center gap-3 bg-cta text-white font-semibold px-4 py-3 rounded-xl hover:bg-navy-2 transition-colors"
              >
                <FaPhone />
                {SITE_CONFIG.phone}
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 font-semibold px-4 py-3 rounded-xl border border-line hover:bg-cream transition-colors text-navy"
              >
                <FaEnvelope className="text-cta" />
                Send Email
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 font-semibold px-4 py-3 rounded-xl border border-navy text-navy hover:bg-navy hover:text-white transition-colors"
              >
                <FaCalendarCheck />
                Free Estimate Form
              </a>
            </div>

            <p className="text-xs text-muted mt-4 text-center">
              {SITE_CONFIG.hours}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-navy text-white font-bold text-xs tracking-wider py-6 px-2 rounded-l-xl shadow-lg hover:bg-cta transition-colors"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          aria-label="Open contact panel"
        >
          CONTACT US
        </button>
      )}
    </div>
  );
}
