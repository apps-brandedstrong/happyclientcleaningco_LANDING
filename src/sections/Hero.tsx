import { FaPhone, FaCheckCircle, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { SITE_CONFIG, asset } from "@/data/siteConfig";
import Button from "@/components/ui/Button";
import LeadForm from "@/components/LeadForm";

const trustPoints = [
  "$160 First 3 Rooms",
  "Spot Removal Included",
  "Deodorizer Included",
  "Free, No-Obligation Estimate",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${asset("gallery/hero-interior.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/55" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Solo mobile: gancho corto antes del formulario, para que el form
              siga arriba pero no aparezca sin contexto. */}
          <div className="order-1 lg:hidden text-white text-center">
            <div className="inline-flex items-center gap-2 bg-cyan/15 border border-cyan/40 rounded-full px-3 py-1.5 mb-4">
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 text-xs" />
                ))}
              </span>
              <span className="text-xs font-medium">
                Family-Owned · 20+ Years · Insured
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-[1.1] uppercase mb-3">
              Carpet Cleaning in <span className="text-cyan">Fort Collins</span>
            </h1>
            <p className="text-white/85 text-sm mb-4">
              <strong className="text-cyan text-2xl font-display align-middle">
                {SITE_CONFIG.promo.price}
              </strong>{" "}
              first three rooms — spot removal &amp; deodorizer included.
            </p>
            <a
              href={SITE_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 font-bold text-white border border-white/30 bg-white/10 rounded-full px-5 py-2.5 mb-2"
            >
              <FaPhone className="text-cyan" /> Call {SITE_CONFIG.phone}
            </a>
          </div>

          {/* Izquierda: headline + CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white order-3 lg:order-1"
          >
            <div className="hidden lg:inline-flex items-center gap-2 bg-cyan/15 border border-cyan/40 rounded-full px-4 py-2 mb-6">
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 text-sm" />
                ))}
              </span>
              <span className="text-sm font-medium">
                Family-Owned · 20+ Years · Fully Insured
              </span>
            </div>

            <h1 className="hidden lg:block text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-5 uppercase">
              Carpet Cleaning
              <br />
              <span className="text-cyan">in Fort Collins</span>
              <br />&amp; Northern Colorado
            </h1>

            {/* Oferta destacada */}
            <div className="hidden lg:inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 bg-white/10 border border-white/20 rounded-2xl px-5 py-4 mb-6">
              <span className="text-5xl font-display font-bold text-cyan leading-none">
                {SITE_CONFIG.promo.price}
              </span>
              <span className="text-xl font-bold">first three rooms</span>
              <span className="w-full text-sm text-white/75">
                Spot removal and deodorizer included — no add-ons at the door.
              </span>
            </div>

            <p className="text-lg text-white/85 mb-7 max-w-lg leading-relaxed">
              Deep hot-water extraction that lifts ground-in dirt, traffic lanes
              and pet odors. We also handle house, deep, move-in/out and
              commercial cleaning — one insured local team for the whole
              property.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {trustPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href={SITE_CONFIG.phoneHref} size="lg" variant="primary">
                <FaPhone className="mr-2" />
                Call {SITE_CONFIG.phone}
              </Button>
              <Button href="#contact" size="lg" variant="outline-white">
                Get My Free Estimate
              </Button>
            </div>

            <p className="mt-6 text-white/60 text-sm">
              Serving:{" "}
              <span className="text-white/90 font-medium">
                {SITE_CONFIG.cities.join(" • ")}
              </span>
            </p>
          </motion.div>

          {/* Derecha: formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            id="contact"
            className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl order-2 scroll-mt-28"
          >
            <div className="inline-flex items-center gap-2 bg-cta/10 text-cta text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1.5 mb-3">
              Claim the {SITE_CONFIG.promo.price} special
            </div>
            <h2 className="text-2xl font-bold text-navy mb-2 uppercase">
              Get Your Free Estimate
            </h2>
            <p className="text-muted mb-6 text-sm">
              Fill out the form and we'll call you back with your quote and
              confirm your three-room carpet special.
            </p>
            <LeadForm source="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
