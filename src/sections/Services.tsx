import { motion } from "framer-motion";
import {
  FaBroom,
  FaTint,
  FaSprayCan,
  FaCouch,
  FaLayerGroup,
  FaBuilding,
  FaHome,
  FaMagic,
  FaBoxOpen,
  FaCity,
  FaBorderAll,
  FaHardHat,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/data/services";
import { SITE_CONFIG, asset } from "@/data/siteConfig";

const iconMap: Record<string, React.ReactNode> = {
  FaBroom: <FaBroom />,
  FaTint: <FaTint />,
  FaSprayCan: <FaSprayCan />,
  FaCouch: <FaCouch />,
  FaLayerGroup: <FaLayerGroup />,
  FaBuilding: <FaBuilding />,
  FaHome: <FaHome />,
  FaMagic: <FaMagic />,
  FaBoxOpen: <FaBoxOpen />,
  FaCity: <FaCity />,
  FaBorderAll: <FaBorderAll />,
  FaHardHat: <FaHardHat />,
};

export default function Services() {
  const featured = SERVICES.filter((s) => s.featured);
  const rest = SERVICES.filter((s) => !s.featured);

  return (
    <section id="services" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Specialty"
          title="Carpet Cleaning Done Properly"
          subtitle="Deep extraction cleaning from a family-owned crew with 20+ years in Northern Colorado. Your first three rooms are $160 — spot removal and deodorizer included."
        />

        {/* Destacados de carpet cleaning */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {featured.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-line bg-cream shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={asset(service.image)}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-cta text-white flex items-center justify-center shrink-0">
                    {iconMap[service.icon]}
                  </span>
                  <h3 className="text-white font-bold text-lg uppercase leading-tight">
                    {service.title}
                  </h3>
                </div>
                <span className="absolute top-3 right-3 bg-cyan text-navy text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                  In the {SITE_CONFIG.promo.price} deal
                </span>
              </div>
              <div className="p-6">
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-cta font-bold text-sm hover:gap-3 transition-all"
                >
                  Get my free estimate <FaArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* También hacemos cleaning services */}
        <div className="bg-cream rounded-3xl border border-line p-8 md:p-10">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky">
              We also do
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-navy uppercase mt-2 mb-3">
              Complete Cleaning Services
            </h3>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              Beyond carpets, Happy Client Cleaning handles house cleaning, deep
              cleans, move-in/out, offices, restaurants, hotels, apartment
              complexes and post-construction work. One insured local team for
              the whole property.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white rounded-2xl p-5 border border-line hover:border-cta/50 hover:shadow-md transition-all flex gap-4"
              >
                <span className="w-11 h-11 rounded-xl bg-sky/10 text-sky flex items-center justify-center shrink-0 text-lg">
                  {iconMap[service.icon]}
                </span>
                <div>
                  <h4 className="font-bold text-navy mb-1 leading-tight">
                    {service.title}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-muted mb-5">
              Don't see exactly what you're looking for? Just ask — we're happy
              to build a cleaning plan around your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="#contact" size="lg">
                Request a Free Estimate
              </Button>
              <Button
                href={SITE_CONFIG.phoneHref}
                size="lg"
                variant="secondary"
              >
                <FaPhone className="mr-2" />
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
