export type HighlightType =
  | "offer"
  | "area"
  | "credential"
  | "service"
  | "hours";

export interface Highlight {
  id: number;
  title: string;
  detail: string;
  type: HighlightType;
}

/**
 * Contenido del widget flotante.
 *
 * Todos los items son información REAL y verificable: salen del sitio del
 * cliente (happyclientcleaningco.com) o del brief de la campaña.
 *
 * Este widget reemplaza al típico "Megan R. de Fort Collins acaba de
 * llamar hace 2 min". Ese formato inventa personas e interacciones que
 * nunca pasaron, así que no se usa acá.
 */
export const HIGHLIGHTS: Highlight[] = [
  {
    id: 1,
    title: "$160 — first three rooms",
    detail: "Spot removal and deodorizer included",
    type: "offer",
  },
  {
    id: 2,
    title: "20+ years of experience",
    detail: "Cleaning homes and businesses in Northern Colorado",
    type: "credential",
  },
  {
    id: 3,
    title: "Family-owned & fully insured",
    detail: "A local family business, not a franchise call center",
    type: "credential",
  },
  {
    id: 4,
    title: "Free, no-obligation estimates",
    detail: "Honest upfront pricing before we start any work",
    type: "credential",
  },
  {
    id: 5,
    title: "Serving 7 Northern Colorado cities",
    detail:
      "Fort Collins · Loveland · Windsor · Severance · Timnath · Wellington · Greeley",
    type: "area",
  },
  {
    id: 6,
    title: "Carpet, rug & upholstery cleaning",
    detail: "Deep extraction that lifts embedded dirt, stains and odors",
    type: "service",
  },
  {
    id: 7,
    title: "We also do house & deep cleaning",
    detail: "Recurring plans and move-in / move-out cleans",
    type: "service",
  },
  {
    id: 8,
    title: "Commercial & janitorial cleaning",
    detail: "Offices, restaurants, hotels and apartment complexes",
    type: "service",
  },
  {
    id: 9,
    title: "Floor care & hardwood maintenance",
    detail: "Waxing, polishing and buffing that restores your floors",
    type: "service",
  },
  {
    id: 10,
    title: "Post-construction cleaning",
    detail: "Fine dust and debris removed after a remodel or build",
    type: "service",
  },
  {
    id: 11,
    title: "Open Mon–Sat, 8:00 AM–6:00 PM",
    detail: "Call or text for same-week availability",
    type: "hours",
  },
  {
    id: 12,
    title: "Based in Fort Collins, CO",
    detail: "Locally based and ready to serve your neighborhood",
    type: "area",
  },
];
