import { FaPhone, FaCalendarCheck } from "react-icons/fa";
import { SITE_CONFIG } from "@/data/siteConfig";

/**
 * Barra fija de conversión para mobile: llamar o ir al formulario.
 * En ads móviles el click-to-call es la acción principal.
 */
export default function MobileCallBar() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-navy/95 backdrop-blur-md border-t border-white/10 px-3 py-2.5 flex gap-2">
      <a
        href={SITE_CONFIG.phoneHref}
        className="flex-1 flex items-center justify-center gap-2 bg-cta text-white font-bold py-3 rounded-full text-sm shadow-lg"
      >
        <FaPhone />
        Call Now
      </a>
      <a
        href="#contact"
        className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-bold py-3 rounded-full text-sm"
      >
        <FaCalendarCheck className="text-cyan" />
        {SITE_CONFIG.promo.price} Special
      </a>
    </div>
  );
}
