export type InteractionType =
  | "call"
  | "quote"
  | "review"
  | "book"
  | "promo"
  | "message";

export interface SocialProofItem {
  id: number;
  name: string;
  location: string;
  action: string;
  service: string;
  timeAgo: string;
  type: InteractionType;
  rating?: number;
}

/**
 * Actividad de ejemplo para el widget flotante de prueba social.
 * NO son interacciones reales. Si se quiere mostrar actividad real,
 * hay que alimentar este array desde el CRM / formulario.
 */
export const SOCIAL_PROOF_ITEMS: SocialProofItem[] = [
  { id: 1, name: "Megan R.", location: "Fort Collins", action: "just called about the", service: "$160 3-Room Carpet Special", timeAgo: "2 min ago", type: "promo" },
  { id: 2, name: "David K.", location: "Loveland", action: "requested a free estimate for", service: "Carpet Cleaning", timeAgo: "4 min ago", type: "quote" },
  { id: 3, name: "Ashley W.", location: "Windsor", action: "booked", service: "Pet Odor & Deodorizing", timeAgo: "6 min ago", type: "book" },
  { id: 4, name: "Carlos M.", location: "Greeley", action: "just called for", service: "Upholstery & Sofa Cleaning", timeAgo: "8 min ago", type: "call" },
  { id: 5, name: "Jennifer L.", location: "Timnath", action: "left a review for", service: "Carpet Cleaning", timeAgo: "11 min ago", type: "review", rating: 5 },
  { id: 6, name: "Robert T.", location: "Severance", action: "asked about the", service: "$160 First 3 Rooms Deal", timeAgo: "13 min ago", type: "promo" },
  { id: 7, name: "Patricia N.", location: "Wellington", action: "requested a quote for", service: "Deep Cleaning", timeAgo: "15 min ago", type: "quote" },
  { id: 8, name: "James H.", location: "Fort Collins", action: "scheduled", service: "Move-Out Cleaning", timeAgo: "17 min ago", type: "book" },
  { id: 9, name: "Linda S.", location: "Loveland", action: "filled out the form for", service: "Spot & Stain Removal", timeAgo: "19 min ago", type: "quote" },
  { id: 10, name: "Brian C.", location: "Greeley", action: "just called about", service: "Commercial Carpet Cleaning", timeAgo: "21 min ago", type: "call" },
  { id: 11, name: "Emily D.", location: "Windsor", action: "left a 5-star review for", service: "House Cleaning", timeAgo: "24 min ago", type: "review", rating: 5 },
  { id: 12, name: "Kevin P.", location: "Fort Collins", action: "booked the", service: "$160 3-Room Carpet Special", timeAgo: "26 min ago", type: "promo" },
  { id: 13, name: "Sarah B.", location: "Timnath", action: "requested pricing on", service: "Area Rug Cleaning", timeAgo: "28 min ago", type: "quote" },
  { id: 14, name: "Anthony G.", location: "Loveland", action: "messaged about", service: "Hardwood Floor Care", timeAgo: "31 min ago", type: "message" },
  { id: 15, name: "Nicole F.", location: "Wellington", action: "just called for", service: "Carpet Cleaning", timeAgo: "33 min ago", type: "call" },
  { id: 16, name: "Steven J.", location: "Greeley", action: "scheduled", service: "Office Cleaning", timeAgo: "35 min ago", type: "book" },
  { id: 17, name: "Rachel M.", location: "Fort Collins", action: "left a review for", service: "Pet Odor Treatment", timeAgo: "38 min ago", type: "review", rating: 5 },
  { id: 18, name: "Daniel O.", location: "Severance", action: "requested an estimate for", service: "Move-In Cleaning", timeAgo: "41 min ago", type: "quote" },
  { id: 19, name: "Christina V.", location: "Windsor", action: "asked about the", service: "$160 First 3 Rooms Deal", timeAgo: "43 min ago", type: "promo" },
  { id: 20, name: "Mark A.", location: "Loveland", action: "just called about", service: "Sofa & Upholstery Cleaning", timeAgo: "45 min ago", type: "call" },
  { id: 21, name: "Laura E.", location: "Fort Collins", action: "booked a recurring", service: "House Cleaning Plan", timeAgo: "48 min ago", type: "book" },
  { id: 22, name: "Jason W.", location: "Greeley", action: "requested a quote for", service: "Post-Construction Cleaning", timeAgo: "51 min ago", type: "quote" },
  { id: 23, name: "Amanda K.", location: "Timnath", action: "left a 5-star review for", service: "Deep Cleaning", timeAgo: "54 min ago", type: "review", rating: 5 },
  { id: 24, name: "Eric S.", location: "Wellington", action: "messaged about", service: "Stair & Hallway Carpet", timeAgo: "57 min ago", type: "message" },
  { id: 25, name: "Melissa T.", location: "Fort Collins", action: "claimed the", service: "$160 3-Room Carpet Special", timeAgo: "1 hour ago", type: "promo" },
  { id: 26, name: "Gregory L.", location: "Loveland", action: "just called for", service: "Commercial Janitorial Service", timeAgo: "1 hour ago", type: "call" },
  { id: 27, name: "Danielle H.", location: "Severance", action: "scheduled", service: "Carpet Cleaning", timeAgo: "1 hour ago", type: "book" },
  { id: 28, name: "Peter N.", location: "Windsor", action: "requested an estimate for", service: "Apartment Complex Cleaning", timeAgo: "1 hour ago", type: "quote" },
  { id: 29, name: "Kayla R.", location: "Greeley", action: "left a review for", service: "Move-Out Cleaning", timeAgo: "1 hour ago", type: "review", rating: 5 },
  { id: 30, name: "Tyler B.", location: "Fort Collins", action: "asked about", service: "Wine Stain Removal", timeAgo: "1 hour ago", type: "message" },
  { id: 31, name: "Vanessa P.", location: "Timnath", action: "just called about the", service: "$160 First 3 Rooms Deal", timeAgo: "2 hours ago", type: "promo" },
  { id: 32, name: "Andrew C.", location: "Loveland", action: "booked", service: "Hotel Room Cleaning", timeAgo: "2 hours ago", type: "book" },
  { id: 33, name: "Stephanie G.", location: "Wellington", action: "requested pricing on", service: "Mattress Cleaning", timeAgo: "2 hours ago", type: "quote" },
  { id: 34, name: "Jonathan D.", location: "Fort Collins", action: "left a 5-star review for", service: "Carpet Cleaning", timeAgo: "2 hours ago", type: "review", rating: 5 },
  { id: 35, name: "Michelle A.", location: "Greeley", action: "just called for", service: "Restaurant Floor Care", timeAgo: "2 hours ago", type: "call" },
  { id: 36, name: "Ryan F.", location: "Windsor", action: "scheduled", service: "Pet Stain & Odor Treatment", timeAgo: "2 hours ago", type: "book" },
  { id: 37, name: "Heather M.", location: "Severance", action: "requested a free estimate for", service: "House Cleaning", timeAgo: "3 hours ago", type: "quote" },
  { id: 38, name: "Justin K.", location: "Loveland", action: "claimed the", service: "$160 3-Room Carpet Special", timeAgo: "3 hours ago", type: "promo" },
  { id: 39, name: "Alyssa W.", location: "Fort Collins", action: "left a review for", service: "Upholstery Cleaning", timeAgo: "3 hours ago", type: "review", rating: 5 },
  { id: 40, name: "Brandon L.", location: "Timnath", action: "messaged about", service: "Basement Carpet Cleaning", timeAgo: "3 hours ago", type: "message" },
  { id: 41, name: "Courtney S.", location: "Greeley", action: "just called for", service: "Office Carpet Cleaning", timeAgo: "3 hours ago", type: "call" },
  { id: 42, name: "Nathan H.", location: "Wellington", action: "booked", service: "Deep Cleaning", timeAgo: "4 hours ago", type: "book" },
  { id: 43, name: "Erica J.", location: "Windsor", action: "requested a quote for", service: "Area Rug Cleaning", timeAgo: "4 hours ago", type: "quote" },
  { id: 44, name: "Scott R.", location: "Fort Collins", action: "left a 5-star review for", service: "Commercial Cleaning", timeAgo: "4 hours ago", type: "review", rating: 5 },
  { id: 45, name: "Tiffany O.", location: "Loveland", action: "asked about the", service: "$160 First 3 Rooms Deal", timeAgo: "4 hours ago", type: "promo" },
  { id: 46, name: "Marcus V.", location: "Severance", action: "just called about", service: "Sectional Sofa Cleaning", timeAgo: "5 hours ago", type: "call" },
  { id: 47, name: "Kristen B.", location: "Greeley", action: "scheduled", service: "Recurring Office Janitorial", timeAgo: "5 hours ago", type: "book" },
  { id: 48, name: "Alex T.", location: "Timnath", action: "requested an estimate for", service: "Hardwood Floor Polishing", timeAgo: "5 hours ago", type: "quote" },
  { id: 49, name: "Monica G.", location: "Fort Collins", action: "left a review for", service: "Move-In Cleaning", timeAgo: "5 hours ago", type: "review", rating: 5 },
  { id: 50, name: "Derek P.", location: "Wellington", action: "messaged about", service: "Traffic Lane Carpet Cleaning", timeAgo: "6 hours ago", type: "message" },
  { id: 51, name: "Samantha C.", location: "Loveland", action: "claimed the", service: "$160 3-Room Carpet Special", timeAgo: "6 hours ago", type: "promo" },
  { id: 52, name: "Victor N.", location: "Windsor", action: "just called for", service: "Post-Construction Cleanup", timeAgo: "6 hours ago", type: "call" },
  { id: 53, name: "Olivia F.", location: "Fort Collins", action: "booked", service: "Carpet + Upholstery Package", timeAgo: "6 hours ago", type: "book" },
  { id: 54, name: "Trevor M.", location: "Greeley", action: "requested pricing on", service: "Apartment Turnover Cleaning", timeAgo: "7 hours ago", type: "quote" },
  { id: 55, name: "Bianca L.", location: "Severance", action: "left a 5-star review for", service: "Pet Odor Removal", timeAgo: "7 hours ago", type: "review", rating: 5 },
];
