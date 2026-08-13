import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaClock, FaCheckCircle } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/data/siteConfig";

const areaGroups = [
  {
    title: "Fort Collins & Timnath",
    description:
      "Our home base. Same-week carpet cleaning appointments across Old Town, Harmony, Fossil Creek and Timnath.",
  },
  {
    title: "Loveland, Windsor & Severance",
    description:
      "Full carpet, upholstery and house cleaning throughout Loveland, Windsor and Severance neighborhoods.",
  },
  {
    title: "Wellington & Greeley",
    description:
      "Residential and commercial cleaning north to Wellington and east to Greeley — same $160 three-room special.",
  },
];

export default function Maps() {
  return (
    <section id="areas" className="py-20 bg-cream scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Service Area"
          title="Serving Fort Collins & Northern Colorado"
          subtitle="Locally based in Fort Collins and ready to serve your neighborhood. Free estimates throughout our whole service area."
        />

        {/* Chips de ciudades */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SITE_CONFIG.cities.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-2 bg-white border border-line rounded-full px-4 py-2 text-sm font-semibold text-navy shadow-sm"
            >
              <FaCheckCircle className="text-cta text-xs" />
              {city}, CO
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {areaGroups.map((info) => (
              <div
                key={info.title}
                className="bg-white rounded-2xl p-5 border border-line shadow-sm flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-cta/10 flex items-center justify-center text-cta shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="font-bold text-navy">{info.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-navy rounded-2xl p-5 text-white">
              <div className="flex items-center gap-3 mb-3">
                <FaPhone className="text-cyan" />
                <div>
                  <p className="text-xs text-white/60">Call or Text</p>
                  <a
                    href={SITE_CONFIG.phoneHref}
                    className="font-bold text-white hover:text-cyan transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-cyan" />
                <div>
                  <p className="text-xs text-white/60">Hours</p>
                  <p className="font-bold text-sm">{SITE_CONFIG.hours}</p>
                </div>
              </div>
              <div className="mt-4">
                <Button
                  href="#contact"
                  variant="primary"
                  className="w-full justify-center"
                >
                  Get Free Estimate
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden shadow-lg min-h-80"
          >
            <iframe
              title="Happy Client Cleaning Services Area — Fort Collins, CO"
              src={SITE_CONFIG.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "460px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
