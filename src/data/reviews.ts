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
 * REGLA: acá van SOLO reseñas reales.
 *
 * El array arranca vacío a propósito. Mientras esté vacío, la sección de
 * Reviews muestra el bloque de credenciales verificables (20+ años,
 * family-owned, fully insured, free estimates) y el link a Google — sin
 * ninguna tarjeta de reseña.
 *
 * Cuando el cliente pase reseñas reales de su Google Business Profile,
 * pegarlas acá con el nombre, la fecha y el texto TAL CUAL los dejó cada
 * persona. Las tarjetas aparecen solas.
 *
 * Ejemplo del formato:
 *   { id: 1, name: "Sarah M.", date: "Mar 2026", rating: 5,
 *     text: "…", source: "Google", city: "Fort Collins, CO" },
 *
 * No inventar, no parafrasear y no completar con texto de relleno:
 * publicar reseñas falsas como reales es publicidad engañosa y es causal
 * de suspensión de la cuenta de Google Ads.
 */
export const REVIEWS: Review[] = [];

/**
 * Link a reseñas. Es el mismo destino que usa el sitio del cliente
 * (una búsqueda de Google, porque todavía no tienen ficha vinculada).
 * Cuando tengan el Google Business Profile, reemplazar por su URL directa.
 */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Happy+Client+Cleaning+Services+Fort+Collins+CO";
