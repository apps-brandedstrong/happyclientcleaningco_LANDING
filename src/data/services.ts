export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  featured?: boolean;
}

/** Carpet cleaning primero — es el foco de la campaña. */
export const SERVICES: Service[] = [
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning",
    description:
      "Deep hot-water extraction that lifts ground-in dirt, traffic lanes and odors your vacuum leaves behind. First three rooms $160 — spot removal and deodorizer included.",
    icon: "FaBroom",
    image: "/gallery/carpet-real-1.jpg",
    featured: true,
  },
  {
    id: "stain-spot-removal",
    title: "Spot & Stain Removal",
    description:
      "Pet accidents, wine, coffee, grease and mystery spots treated with the right solution for your fiber — included free with the $160 three-room special.",
    icon: "FaTint",
    image: "/gallery/carpet-real-3.jpg",
    featured: true,
  },
  {
    id: "pet-odor",
    title: "Pet Odor & Deodorizing",
    description:
      "Neutralizes odor at the source instead of masking it, so the room actually smells clean when we leave. Included with the three-room special.",
    icon: "FaSprayCan",
    image: "/gallery/real-carpet-bedroom.webp",
    featured: true,
  },
  {
    id: "upholstery",
    title: "Upholstery & Sofa Cleaning",
    description:
      "Sofas, sectionals, armchairs and mattresses cleaned with fabric-safe methods that pull out body oils, dust and stains.",
    icon: "FaCouch",
    image: "/gallery/real-upholstery-sofa.webp",
  },
  {
    id: "rug-cleaning",
    title: "Area Rug Cleaning",
    description:
      "Gentle, fiber-appropriate cleaning for area rugs and runners — wool, synthetic and delicate weaves handled with care.",
    icon: "FaLayerGroup",
    image: "/gallery/carpet-real-4.jpg",
  },
  {
    id: "commercial-carpet",
    title: "Commercial Carpet Cleaning",
    description:
      "Offices, restaurants, hotels and apartment complexes. Scheduled after hours so your business never stops for a cleaning.",
    icon: "FaBuilding",
    image: "/gallery/g-office.jpg",
  },
  {
    id: "house-cleaning",
    title: "House Cleaning",
    description:
      "Reliable, detailed home cleaning that keeps every room fresh, tidy and spotless — one-time or on a recurring plan.",
    icon: "FaHome",
    image: "/gallery/house-cleaning.jpg",
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    description:
      "Top-to-bottom deep cleans that reach the buildup everyday cleaning leaves behind — baseboards, fixtures, appliances and more.",
    icon: "FaMagic",
    image: "/gallery/deep-cleaning.jpg",
  },
  {
    id: "move-in-out",
    title: "Move-In / Move-Out Cleaning",
    description:
      "Spotless move-in or move-out cleans so you leave or arrive to a perfectly clean space — great for getting deposits back.",
    icon: "FaBoxOpen",
    image: "/gallery/move-in-out.jpg",
  },
  {
    id: "commercial-cleaning",
    title: "Commercial & Office Cleaning",
    description:
      "Janitorial and commercial cleaning for offices, restaurants, hotels and apartment complexes, on the schedule that fits you.",
    icon: "FaCity",
    image: "/gallery/commercial-cleaning.jpg",
  },
  {
    id: "floor-care",
    title: "Floor Care & Hardwood",
    description:
      "Floor waxing, polishing, buffing and hardwood maintenance that protects and restores the floors you already have.",
    icon: "FaBorderAll",
    image: "/gallery/real-hardwood-floor.webp",
  },
  {
    id: "post-construction",
    title: "Post-Construction Cleaning",
    description:
      "Fine dust, debris and residue removed after a remodel or build so the space is ready to hand over.",
    icon: "FaHardHat",
    image: "/gallery/real-detail-fixture.webp",
  },
];
