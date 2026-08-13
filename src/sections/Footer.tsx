import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import { SITE_CONFIG, asset } from "@/data/siteConfig";
import { SERVICES } from "@/data/services";
import LeadForm from "@/components/LeadForm";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Bloque de formulario final */}
      <div
        id="contact-footer"
        className="border-b border-white/10 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
                Last step
              </span>
              <h2 className="text-3xl md:text-4xl font-bold uppercase mt-3 mb-4 leading-tight">
                Ready for cleaner carpets?
              </h2>
              <div className="h-1 w-16 rounded-full bg-cyan mb-6" />
              <p className="text-white/75 leading-relaxed mb-8 max-w-lg">
                Tell us about your space and we'll come out, take a look and give
                you a free estimate — no obligation. Your first three rooms are{" "}
                <strong className="text-white">
                  {SITE_CONFIG.promo.price} with spot removal and deodorizer
                  included
                </strong>
                .
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="flex items-center gap-3 text-white hover:text-cyan transition-colors"
                >
                  <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <FaPhone className="text-cyan" />
                  </span>
                  <span>
                    <span className="block text-xs text-white/50">
                      Call or text
                    </span>
                    <span className="font-bold">{SITE_CONFIG.phone}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-white hover:text-cyan transition-colors"
                >
                  <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-cyan" />
                  </span>
                  <span>
                    <span className="block text-xs text-white/50">Email</span>
                    <span className="font-bold break-all">
                      {SITE_CONFIG.email}
                    </span>
                  </span>
                </a>
                <a
                  href={SITE_CONFIG.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-cyan transition-colors"
                >
                  <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <FaWhatsapp className="text-cyan" />
                  </span>
                  <span>
                    <span className="block text-xs text-white/50">WhatsApp</span>
                    <span className="font-bold">Message us</span>
                  </span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <FaClock className="text-cyan" />
                  </span>
                  <span>
                    <span className="block text-xs text-white/50">Hours</span>
                    <span className="font-bold text-sm">
                      {SITE_CONFIG.hours}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-cyan" />
                  </span>
                  <span>
                    <span className="block text-xs text-white/50">
                      Service area
                    </span>
                    <span className="font-bold text-sm">
                      Fort Collins, CO &amp; surrounding area
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold uppercase mb-2">
                Request Your Free Estimate
              </h3>
              <p className="text-white/60 text-sm mb-6">
                We'll get back to you with pricing and the next available slot.
              </p>
              <LeadForm
                tone="dark"
                source="footer"
                submitLabel="Send My Request →"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pie */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img
              src={asset("logo.svg")}
              alt="Happy Client Cleaning Services LLC"
              className="h-14 w-auto mb-4 [filter:brightness(0)_invert(1)]"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Happy Client Cleaning Services LLC — family-owned residential and
              commercial cleaning in Fort Collins, CO with 20+ years of
              experience. Fully insured. Free estimates.
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase mb-4 text-sm tracking-wide">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-cyan text-sm transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase mb-4 text-sm tracking-wide">
              Service Area
            </h4>
            <ul className="flex flex-col gap-2">
              {SITE_CONFIG.cities.map((city) => (
                <li key={city} className="text-white/60 text-sm">
                  {city}, CO
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Happy Client Cleaning Services LLC. All
            rights reserved.
          </p>
          <a
            href={SITE_CONFIG.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-cyan text-xs transition-colors"
          >
            happyclientcleaningco.com
          </a>
        </div>
      </div>
    </footer>
  );
}
