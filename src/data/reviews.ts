export interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
  source: string;
  city: string;
}

/**
 * ⚠️ PENDIENTE DE REEMPLAZO
 *
 * El sitio happyclientcleaningco.com todavía no publica reseñas reales
 * (tiene el perfil de Google vinculado, pero sin sync activo). Estas
 * tarjetas son texto de muestra para que la sección quede armada.
 *
 * ANTES DE PUBLICAR LOS ANUNCIOS: reemplazar por reseñas reales del
 * Google Business Profile del cliente (nombre, fecha y texto tal cual
 * los dejó cada persona). Publicar testimonios inventados como reales
 * es publicidad engañosa y puede costar la cuenta de Google Ads.
 */
export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "PLACEHOLDER — reemplazar",
    date: "—",
    rating: 5,
    text: "Family-owned, professional and thorough — our home has never looked better. Highly recommend.",
    source: "Google",
    city: "Fort Collins, CO",
  },
  {
    id: 2,
    name: "PLACEHOLDER — reemplazar",
    date: "—",
    rating: 5,
    text: "Sample text. Replace with a real Google review about the carpet cleaning results.",
    source: "Google",
    city: "Loveland, CO",
  },
  {
    id: 3,
    name: "PLACEHOLDER — reemplazar",
    date: "—",
    rating: 5,
    text: "Sample text. Replace with a real Google review about pet odor or stain removal.",
    source: "Google",
    city: "Windsor, CO",
  },
  {
    id: 4,
    name: "PLACEHOLDER — reemplazar",
    date: "—",
    rating: 5,
    text: "Sample text. Replace with a real Google review about house or deep cleaning.",
    source: "Google",
    city: "Greeley, CO",
  },
  {
    id: 5,
    name: "PLACEHOLDER — reemplazar",
    date: "—",
    rating: 5,
    text: "Sample text. Replace with a real Google review about commercial or office cleaning.",
    source: "Google",
    city: "Timnath, CO",
  },
  {
    id: 6,
    name: "PLACEHOLDER — reemplazar",
    date: "—",
    rating: 5,
    text: "Sample text. Replace with a real Google review about punctuality and value.",
    source: "Google",
    city: "Wellington, CO",
  },
];

/** Enlace al perfil de Google del cliente. Actualizar con la URL real. */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Happy+Client+Cleaning+Services+Fort+Collins";
