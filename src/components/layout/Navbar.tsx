import { useState } from "react";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { useScrollTop } from "@/hooks/useScrollTop";
import { SITE_CONFIG, asset } from "@/data/siteConfig";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Carpet Cleaning", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Results", href: "#gallery" },
  { label: "Service Area", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const scrolled = useScrollTop(80);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-28">
          <a href="#top" className="flex items-center gap-2 shrink-0">
            <img
              src={asset("logo.svg")}
              alt="Happy Client Cleaning Services LLC"
              /* El logo es azul sobre transparente: lo pasamos a blanco para el navy */
              className="h-20 md:h-24 w-auto [filter:brightness(0)_invert(1)]"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-medium text-sm text-white hover:text-cyan transition-colors drop-shadow"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={SITE_CONFIG.phoneHref}
              className="flex items-center gap-2 font-bold text-white drop-shadow hover:text-cyan transition-colors"
            >
              <FaPhone className="text-cyan" />
              {SITE_CONFIG.phone}
            </a>
            <Button href="#contact" size="sm">
              Free Estimate
            </Button>
          </div>

          <button
            className="lg:hidden md:ml-3 p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-navy/95 backdrop-blur-md border-t border-white/10 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/90 font-medium py-2 border-b border-white/10 hover:text-cyan transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE_CONFIG.phoneHref}
              className="flex items-center gap-2 font-bold text-white py-2"
            >
              <FaPhone className="text-cyan" />
              {SITE_CONFIG.phone}
            </a>
            <Button
              href="#contact"
              className="w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Get Free Estimate
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
