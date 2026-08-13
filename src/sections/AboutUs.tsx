import { motion } from "framer-motion";
import { FaPhone, FaCheckCircle } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { SITE_CONFIG, asset } from "@/data/siteConfig";

const stats = [
  { value: "20+", label: "Years of experience" },
  { value: "7", label: "Cities served" },
  { value: "100%", label: "Insured team" },
  { value: "$0", label: "Cost for an estimate" },
];

const points = [
  "Family-owned local business — not a franchise call center",
  "Carpet, upholstery and floor care done with the right method per fiber",
  "Also house, deep, move-in/out, commercial and janitorial cleaning",
  "Honest upfront pricing before we start any work",
];

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky">
              About Happy Client Cleaning
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy uppercase leading-tight mt-3 mb-4">
              A cleaner home and business you can trust
            </h2>
            <div className="h-1 w-16 rounded-full bg-cyan mb-6" />

            <p className="text-muted text-lg leading-relaxed mb-4">
              Based in Fort Collins, Colorado, Happy Client Cleaning Services is
              a family-owned, fully insured company with more than{" "}
              <strong className="text-navy">20 years of experience</strong>. We
              serve homes and businesses across Fort Collins and the surrounding
              Northern Colorado communities.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Carpet cleaning is what most people call us for — and right now
              your first three rooms are{" "}
              <strong className="text-navy">
                {SITE_CONFIG.promo.price}, with spot removal and deodorizer
                included
              </strong>
              . But we're a full cleaning company: house cleaning, deep cleans,
              move-in/out, offices, restaurants, hotels, apartment complexes and
              post-construction work.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <FaCheckCircle className="text-cta mt-1 shrink-0" />
                  <span className="text-ink">{p}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-cream rounded-2xl px-4 py-5 text-center border border-line"
                >
                  <p className="text-3xl font-display font-bold text-cta leading-none">
                    {s.value}
                  </p>
                  <p className="text-xs text-muted mt-2 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="#contact" size="lg">
                Get My Free Estimate
              </Button>
              <Button href={SITE_CONFIG.phoneHref} size="lg" variant="secondary">
                <FaPhone className="mr-2" />
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src={asset("gallery/real-carpet-livingroom.webp")}
              alt="Deep-cleaned living room carpet in Fort Collins, CO"
              loading="lazy"
              className="rounded-2xl object-cover w-full h-64 sm:h-80 shadow-lg"
            />
            <img
              src={asset("gallery/real-carpet-steam.webp")}
              alt="Professional carpet steam cleaning in progress"
              loading="lazy"
              className="rounded-2xl object-cover w-full h-64 sm:h-80 shadow-lg mt-8"
            />
            <img
              src={asset("gallery/real-upholstery-sofa.webp")}
              alt="Upholstery and sofa cleaning by Happy Client Cleaning"
              loading="lazy"
              className="rounded-2xl object-cover w-full h-44 sm:h-56 shadow-lg"
            />
            <img
              src={asset("gallery/house-cleaning.jpg")}
              alt="Detailed house cleaning in Northern Colorado"
              loading="lazy"
              className="rounded-2xl object-cover w-full h-44 sm:h-56 shadow-lg mt-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
