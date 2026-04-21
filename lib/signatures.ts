export type SignatureDish = {
  slug: string;
  name: string;
  description: string;
  section: "tandoor" | "curries" | "biryani" | "starters";
  image?: string;
};

export const signatureDishes: SignatureDish[] = [
  {
    slug: "butter-chicken",
    name: "Butter Chicken",
    description:
      "Tandoor-blistered chicken finished in a silk-smooth tomato and cream sauce, perfumed with fenugreek.",
    section: "curries",
    image: "/images/food/butter-chicken.jpg",
  },
  {
    slug: "lamb-biryani",
    name: "Lamb Biryani",
    description:
      "Long-grain basmati steamed over slow-braised lamb shank, saffron, caramelized onion, sealed under dough.",
    section: "biryani",
    image: "/images/food/lamb-biryani.jpg",
  },
  {
    slug: "paneer-tikka",
    name: "Paneer Tikka",
    description:
      "Cubes of fresh paneer marinated in hung yogurt and kashmiri chili, kissed by the tandoor.",
    section: "tandoor",
    image: "/images/food/paneer-tikka.jpg",
  },
  {
    slug: "pani-puri",
    name: "Pani Puri",
    description:
      "Hollow semolina crisps, potato, chickpea, and a bright tamarind-mint water. The classic Mumbai street bite.",
    section: "starters",
    image: "/images/food/pani-puri.jpg",
  },
];
