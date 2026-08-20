export const SITE_CONFIG = {
  name: "Happy Client Cleaning Services LLC",
  shortName: "Happy Client Cleaning",

  // Teléfono principal de la landing de ads.
  phone: "(970) 546-8008",
  phoneHref: "tel:+19705468008",

  // Teléfonos alternativos del negocio.
  phoneAlt: "(970) 391-2451",
  phoneAltHref: "tel:+19703912451",

  email: "info@happyclientcleaningco.com",
  whatsappHref:
    "https://wa.me/19709807843?text=Hi%2C%20I%27d%20like%20a%20free%20carpet%20cleaning%20estimate%20%28%24160%20first%203%20rooms%29",

  website: "https://www.happyclientcleaningco.com/",
  hours: "Mon–Sat 8:00 AM–6:00 PM · Sun Closed",
  baseCity: "Fort Collins, CO",

  cities: [
    "Fort Collins",
    "Loveland",
    "Windsor",
    "Severance",
    "Timnath",
    "Wellington",
    "Greeley",
  ],

  promo: {
    price: "$160",
    headline: "First 3 Rooms",
    includes: "Spot removal & deodorizer included",
  },

  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98000!2d-105.15!3d40.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8769768ed8f76b23%3A0x14a26fc0f4d6a10!2sFort%20Collins%2C%20CO!5e0!3m2!1sen!2sus!4v1716000000000",
};

/** Prefija BASE_URL para que las imágenes de /public funcionen en cualquier subdirectorio. */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
