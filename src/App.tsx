import Navbar from "@/components/layout/Navbar";
import FloatingWidgets from "@/components/layout/FloatingWidgets";
import Hero from "@/sections/Hero";
import PromoModule from "@/sections/PromoModule";
import AboutUs from "@/sections/AboutUs";
import WhyUs from "@/sections/WhyUs";
import Services from "@/sections/Services";
import Gallery from "@/sections/Gallery";
import Reviews from "@/sections/Reviews";
import Maps from "@/sections/Maps";
import Footer from "@/sections/Footer";

export default function App() {
  return (
    <div
      /* pb en mobile para que la MobileCallBar no tape el final del footer */
      className="relative bg-cream min-h-screen font-sans pb-16 sm:pb-0"
      style={{ overflowX: "clip" }}
    >
      <Navbar />
      <main>
        <Hero />
        <PromoModule />
        <AboutUs />
        <WhyUs />
        <Services />
        <Gallery />
        <Reviews />
        <Maps />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
