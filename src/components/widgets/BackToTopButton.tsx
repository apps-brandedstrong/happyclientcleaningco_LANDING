import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useScrollTop } from "@/hooks/useScrollTop";

export default function BackToTopButton() {
  const visible = useScrollTop(400);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-20 sm:bottom-4 right-4 z-50 w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center shadow-lg hover:bg-cta transition-colors"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
