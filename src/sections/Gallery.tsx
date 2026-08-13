import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { GALLERY } from "@/data/gallery";
import { SITE_CONFIG, asset } from "@/data/siteConfig";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-cream scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Real Results"
          title="Our Work in Northern Colorado"
          subtitle="Real carpet, upholstery and cleaning jobs from homes and businesses around Fort Collins."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY.map((item, index) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <img
                src={asset(item.src)}
                alt={item.alt}
                loading="lazy"
                className="w-full h-44 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent px-3 pt-8 pb-3">
                <span className="text-white text-xs font-semibold uppercase tracking-wide">
                  {item.label}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted mb-5 text-lg">
            Want your carpets on this list? First three rooms{" "}
            {SITE_CONFIG.promo.price}.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="#contact" size="lg">
              Book My Carpet Cleaning
            </Button>
            <Button href={SITE_CONFIG.phoneHref} size="lg" variant="secondary">
              <FaPhone className="mr-2" />
              {SITE_CONFIG.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
