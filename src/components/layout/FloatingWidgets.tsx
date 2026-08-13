import SocialProofWidget from "@/components/widgets/SocialProofWidget";
import PromoWidget from "@/components/widgets/PromoWidget";
import ContactFastWidget from "@/components/widgets/ContactFastWidget";
import WhatsAppButton from "@/components/widgets/WhatsAppButton";
import BackToTopButton from "@/components/widgets/BackToTopButton";
import MobileCallBar from "@/components/widgets/MobileCallBar";

export default function FloatingWidgets() {
  return (
    <>
      <SocialProofWidget />
      <PromoWidget />
      <ContactFastWidget />
      <WhatsAppButton />
      <BackToTopButton />
      <MobileCallBar />
    </>
  );
}
