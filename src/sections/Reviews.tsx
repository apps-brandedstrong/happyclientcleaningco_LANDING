import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaGoogle, FaPhone } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { REVIEWS, GOOGLE_REVIEWS_URL } from "@/data/reviews";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Customer Reviews"
          title="What Happy Clients Say"
          subtitle="Family-owned, professional and thorough — that's what our customers keep telling us."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, index) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="bg-cream rounded-2xl p-6 border border-line flex flex-col"
            >
              <FaQuoteLeft className="text-cyan text-2xl mb-4" />
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 text-sm" />
                ))}
              </div>
              <p className="text-ink leading-relaxed mb-5 flex-1">
                “{review.text}”
              </p>
              <footer className="flex items-center justify-between gap-3 pt-4 border-t border-line">
                <div>
                  <cite className="not-italic font-bold text-navy block text-sm">
                    {review.name}
                  </cite>
                  <span className="text-muted text-xs">{review.city}</span>
                </div>
                <span className="flex items-center gap-1.5 text-muted text-xs shrink-0">
                  <FaGoogle className="text-sky" />
                  {review.source}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cta font-bold hover:underline mb-6"
          >
            <FaGoogle /> Read our reviews on Google
          </a>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="#contact" size="lg">
              Get My {SITE_CONFIG.promo.price} Carpet Special
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
