import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={SITE_CONFIG.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.3 }}
      whileHover={{ scale: 1.08 }}
      /* En mobile queda por encima de la MobileCallBar */
      className="fixed bottom-36 sm:bottom-20 right-4 z-50 w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg"
    >
      <FaWhatsapp size={26} />
    </motion.a>
  );
}
