import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaHome,
  FaAward,
  FaBroom,
  FaClipboardCheck,
  FaTag,
  FaPhone,
} from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { WHY_US } from "@/data/whyUs";
import { SITE_CONFIG } from "@/data/siteConfig";

const iconMap: Record<string, React.ReactNode> = {
  FaShieldAlt: <FaShieldAlt />,
  FaHome: <FaHome />,
  FaAward: <FaAward />,
  FaBroom: <FaBroom />,
  FaClipboardCheck: <FaClipboardCheck />,
  FaTag: <FaTag />,
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-cream scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Why Happy Client"
          title="Why Northern Colorado calls us first"
          subtitle="Two decades of carpet and cleaning work, a fully insured local crew, and pricing you hear before we start — not after."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {WHY_US.map((factor, index) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-line hover:border-cta/50 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-cta/10 flex items-center justify-center text-cta text-xl mb-4">
                {iconMap[factor.icon]}
              </div>
              <h3 className="text-lg font-bold text-navy mb-2 uppercase">
                {factor.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {factor.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted mb-6 text-lg">
            Ready for carpets that actually look clean again?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="#contact" size="lg">
              Claim the {SITE_CONFIG.promo.price} Special
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
