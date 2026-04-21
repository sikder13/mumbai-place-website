export type DietaryTag = "v" | "vg" | "gf";
export type SpiceLevel = 1 | 2 | 3;

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  dietary?: DietaryTag[];
  spice?: SpiceLevel;
};

export type MenuSection = {
  slug:
    | "starters"
    | "tandoor"
    | "curries"
    | "biryani"
    | "breads"
    | "desserts"
    | "drinks";
  name: string;
  eyebrow: string;
  blurb?: string;
  items: MenuItem[];
};

// Curated sample menu. Menufy is the operational source of truth for pricing
// and availability — this seed is for discovery and editorial voice.
export const menuSections: MenuSection[] = [
  {
    slug: "starters",
    name: "Starters & Street",
    eyebrow: "Small plates",
    blurb:
      "Mumbai afternoons, translated. Bright, loud, meant to be eaten with your hands.",
    items: [
      {
        name: "Pani Puri",
        description:
          "Hollow semolina crisps, spiced potato and chickpea, tamarind-mint water.",
        price: "$10",
        dietary: ["vg"],
        spice: 2,
      },
      {
        name: "Samosa Chaat",
        description:
          "Two potato-pea samosas, chickpea curry, yogurt, tamarind, fresh cilantro.",
        price: "$11",
        dietary: ["v"],
        spice: 1,
      },
      {
        name: "Dahi Puri",
        description:
          "Crisp puris filled with chilled yogurt, potato, sev, and sweet tamarind.",
        price: "$10",
        dietary: ["v"],
        spice: 1,
      },
      {
        name: "Aloo Tikki",
        description:
          "Griddled potato cakes over chickpea curry, mint chutney, shaved onion.",
        price: "$10",
        dietary: ["vg"],
        spice: 1,
      },
      {
        name: "Vegetable Pakora",
        description:
          "Chickpea-battered onion, spinach, and potato, fried to order.",
        price: "$9",
        dietary: ["vg", "gf"],
      },
      {
        name: "Chicken 65",
        description:
          "Crisp boneless chicken tossed with curry leaf, garlic, kashmiri chili.",
        price: "$13",
        spice: 3,
      },
    ],
  },
  {
    slug: "tandoor",
    name: "From the Tandoor",
    eyebrow: "Clay oven",
    blurb:
      "Yogurt-marinated, blistered at 800°F, served on the steel plate with charred onion and lime.",
    items: [
      {
        name: "Paneer Tikka",
        description:
          "Cubes of fresh paneer in hung yogurt and kashmiri chili, pepper and onion.",
        price: "$16",
        dietary: ["v", "gf"],
        spice: 2,
      },
      {
        name: "Chicken Tikka",
        description:
          "Boneless thigh in yogurt, ginger, garlic, toasted spice, kissed by the tandoor.",
        price: "$17",
        dietary: ["gf"],
        spice: 2,
      },
      {
        name: "Malai Chicken Tikka",
        description:
          "Cream-and-cardamom marinade, a gentler, milder cousin of the classic tikka.",
        price: "$18",
        dietary: ["gf"],
        spice: 1,
      },
      {
        name: "Tandoori Half Chicken",
        description:
          "Bone-in, long-marinated, charred edges. Served with cilantro chutney.",
        price: "$19",
        dietary: ["gf"],
        spice: 2,
      },
      {
        name: "Seekh Kebab",
        description:
          "Ground lamb, green chili, mint, and garam masala pressed onto the skewer.",
        price: "$18",
        dietary: ["gf"],
        spice: 2,
      },
    ],
  },
  {
    slug: "curries",
    name: "Curries & Sauces",
    eyebrow: "Slow cooked",
    blurb:
      "Onion-ginger-garlic bases built from scratch each morning. Ladled over rice or mopped up with naan.",
    items: [
      {
        name: "Butter Chicken",
        description:
          "Tandoor chicken, silk-smooth tomato cream, fenugreek, a hit of butter at the finish.",
        price: "$21",
        dietary: ["gf"],
        spice: 1,
      },
      {
        name: "Chicken Tikka Masala",
        description:
          "Grilled chicken in tomato-onion gravy, toasted spice, a touch of cream.",
        price: "$21",
        dietary: ["gf"],
        spice: 2,
      },
      {
        name: "Lamb Rogan Josh",
        description:
          "Kashmiri-style braise, red chili, ginger, fennel, tender stewed lamb.",
        price: "$24",
        dietary: ["gf"],
        spice: 2,
      },
      {
        name: "Saag Paneer",
        description:
          "Spinach and mustard greens slow-stewed with tomato, finished with paneer.",
        price: "$18",
        dietary: ["v", "gf"],
        spice: 1,
      },
      {
        name: "Dal Makhani",
        description:
          "Black urad and kidney bean, overnight simmer, cream, a slow-smoked finish.",
        price: "$16",
        dietary: ["v", "gf"],
        spice: 1,
      },
      {
        name: "Chana Masala",
        description:
          "Chickpeas in a dry-roasted spice gravy with ginger, tomato, and amchoor.",
        price: "$16",
        dietary: ["vg", "gf"],
        spice: 2,
      },
      {
        name: "Shrimp Malabar",
        description:
          "South-coast curry — coconut, curry leaf, tamarind, whole black pepper.",
        price: "$23",
        dietary: ["gf"],
        spice: 2,
      },
    ],
  },
  {
    slug: "biryani",
    name: "Biryani",
    eyebrow: "Sealed pot",
    blurb:
      "Long-grain basmati steamed under dough over the slow-cooked protein. Cut tableside, served with raita.",
    items: [
      {
        name: "Lamb Biryani",
        description:
          "Braised lamb shank, saffron, caramelized onion, rose, dum-cooked.",
        price: "$23",
        dietary: ["gf"],
        spice: 2,
      },
      {
        name: "Chicken Biryani",
        description:
          "Bone-in thigh, yogurt marinade, mint, fried shallot, sealed under dough.",
        price: "$20",
        dietary: ["gf"],
        spice: 2,
      },
      {
        name: "Vegetable Biryani",
        description:
          "Cauliflower, carrot, green bean, peas layered with saffron rice.",
        price: "$18",
        dietary: ["v", "gf"],
        spice: 1,
      },
      {
        name: "Shrimp Biryani",
        description:
          "Gulf shrimp, green chili, curry leaf, coastal-leaning spice.",
        price: "$24",
        dietary: ["gf"],
        spice: 2,
      },
    ],
  },
  {
    slug: "breads",
    name: "Breads",
    eyebrow: "From the clay oven",
    items: [
      {
        name: "Naan",
        description: "Soft, blistered, brushed with butter.",
        price: "$4",
        dietary: ["v"],
      },
      {
        name: "Garlic Naan",
        description: "Fresh garlic, cilantro, melted butter.",
        price: "$5",
        dietary: ["v"],
      },
      {
        name: "Roti",
        description: "Whole-wheat flatbread, lighter than naan.",
        price: "$4",
        dietary: ["vg"],
      },
      {
        name: "Lachha Paratha",
        description: "Layered, flaky, pulled apart in sheets.",
        price: "$5",
        dietary: ["v"],
      },
      {
        name: "Kulcha",
        description: "Leavened bread stuffed with onion or potato.",
        price: "$6",
        dietary: ["v"],
      },
    ],
  },
  {
    slug: "desserts",
    name: "Desserts",
    eyebrow: "Finish",
    items: [
      {
        name: "Gulab Jamun",
        description: "Warm milk dumplings in cardamom-rose syrup.",
        price: "$7",
        dietary: ["v"],
      },
      {
        name: "Mango Kulfi",
        description: "Dense, slow-reduced mango ice, pistachio.",
        price: "$8",
        dietary: ["v", "gf"],
      },
      {
        name: "Rasmalai",
        description: "Cheese dumplings in saffron-cardamom cream.",
        price: "$8",
        dietary: ["v", "gf"],
      },
      {
        name: "Kheer",
        description: "Basmati rice pudding, cardamom, almond, a little rose.",
        price: "$7",
        dietary: ["v", "gf"],
      },
    ],
  },
  {
    slug: "drinks",
    name: "Drinks",
    eyebrow: "To wash it down",
    items: [
      {
        name: "Mango Lassi",
        description: "Yogurt and alphonso mango, cardamom.",
        price: "$6",
        dietary: ["v", "gf"],
      },
      {
        name: "Sweet Lassi",
        description: "Yogurt, a little sugar, a whisper of rose.",
        price: "$5",
        dietary: ["v", "gf"],
      },
      {
        name: "Masala Chai",
        description: "Black tea simmered with milk, ginger, cardamom, clove.",
        price: "$4",
        dietary: ["v"],
      },
      {
        name: "Salted Lime Soda",
        description: "Fresh lime, black salt, soda water.",
        price: "$5",
        dietary: ["vg", "gf"],
      },
    ],
  },
];

export const dietaryLabels: Record<DietaryTag, string> = {
  v: "Vegetarian",
  vg: "Vegan",
  gf: "Gluten-free",
};

export const dietaryShort: Record<DietaryTag, string> = {
  v: "V",
  vg: "VG",
  gf: "GF",
};
