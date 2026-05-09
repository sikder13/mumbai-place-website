export type DietaryTag = "v" | "vg" | "gf";
export type SpiceLevel = 1 | 2 | 3;

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  dietary?: DietaryTag[];
  spice?: SpiceLevel;
};

export type MenuSectionSlug =
  | "lunch"
  | "appetizers-veg"
  | "appetizers-nonveg"
  | "soup-salad"
  | "vegetarian"
  | "chicken"
  | "lamb"
  | "goat"
  | "seafood"
  | "tandoor"
  | "biryani"
  | "breads"
  | "accompaniments"
  | "desserts"
  | "drinks";

export type MenuSection = {
  slug: MenuSectionSlug;
  name: string;
  navLabel: string;
  eyebrow: string;
  blurb?: string;
  items: MenuItem[];
};

export const menuDisclaimer = "Prices subject to change without notice.";

export const menuSections: MenuSection[] = [
  {
    slug: "lunch",
    name: "Lunch Menu",
    navLabel: "Lunch",
    eyebrow: "Weekday combos",
    blurb:
      "Served with rice and naan. Vegetarian picks include saag paneer, chana masala, mix veg curry, yellow tarka dal, and chana sag. Meat: chicken tikka masala, chicken curry, chicken vindaloo, lamb curry, lamb vindaloo. Seafood: shrimp curry, shrimp vindaloo, tilapia curry, tilapia vindaloo.",
    items: [
      { name: "One veg entree over rice and naan", price: "$11.99" },
      { name: "Two veg entree with rice and naan", price: "$12.99" },
      { name: "Any one meat entree over rice and naan", price: "$11.99" },
      { name: "Special tandoori chicken lunch box", price: "$13.99" },
      { name: "Any two meat entree with rice and naan", price: "$14.99" },
      { name: "One meat and one veg entree with rice and naan", price: "$13.99" },
      { name: "One seafood and one veg entree with rice and naan", price: "$13.99" },
      { name: "Any two seafood entree with rice and naan", price: "$14.99" },
    ],
  },
  {
    slug: "appetizers-veg",
    name: "Vegetarian Starters",
    navLabel: "Veg Apps",
    eyebrow: "To start",
    items: [
      { name: "Samosa (vegetable)", price: "$5.99" },
      {
        name: "Samosa Chaat",
        price: "$5.99",
        description:
          "Two potato-pea samosas, chickpea curry, yogurt, tamarind, fresh cilantro.",
        dietary: ["v"],
        spice: 1,
      },
      { name: "Papri Chaat", price: "$5.99" },
      {
        name: "Pakoras (vegetable)",
        price: "$5.99",
        description:
          "Chickpea-battered onion, spinach, and potato, fried to order.",
        dietary: ["vg", "gf"],
      },
      { name: "Alu Tikki Chana", price: "$6.99" },
      { name: "Sweet & Sour Eggplant", price: "$6.99" },
      { name: "Cauliflower Manchurian", price: "$8.99" },
      {
        name: "Paneer Tikka",
        price: "$9.99",
        description:
          "Cubes of fresh paneer in hung yogurt and kashmiri chili, pepper and onion.",
        dietary: ["v", "gf"],
        spice: 2,
      },
      { name: "Chana Poori", price: "$9.99" },
      { name: "Broccoli Malai", price: "$9.99" },
    ],
  },
  {
    slug: "appetizers-nonveg",
    name: "Non-Vegetarian Starters",
    navLabel: "Non-Veg Apps",
    eyebrow: "To start",
    items: [
      { name: "Meat Samosa", price: "$6.99" },
      { name: "Chicken Tikka", price: "$10.99" },
      {
        name: "Chicken Malai Kabab",
        price: "$10.99",
        description:
          "Cream-and-cardamom marinade, a gentler, milder cousin of the classic tikka.",
        dietary: ["gf"],
        spice: 1,
      },
      { name: "Chicken Hariyali Kebab", price: "$10.99" },
      { name: "Chicken Lollipop", price: "$10.99" },
      { name: "Chilli Chicken", price: "$10.99" },
      { name: "Tandoor Mix Platter", price: "$10.99" },
      {
        name: "Lamb Shish Kebab",
        price: "$9.99",
        description:
          "Ground lamb, green chili, mint, and garam masala pressed onto the skewer.",
        dietary: ["gf"],
        spice: 2,
      },
      { name: "Mumbai Coconut Shrimp", price: "$10.99" },
      { name: "Grill Salmon Apt", price: "$11.99" },
      { name: "Fresh Shrimp", price: "$10.99" },
    ],
  },
  {
    slug: "soup-salad",
    name: "Soup & Salad",
    navLabel: "Soup & Salad",
    eyebrow: "Light",
    items: [
      { name: "Soup (mulligatawny, chicken, or vegetable)", price: "$5.99" },
      { name: "Mushroom Soup", price: "$6.99" },
      { name: "Fresh Garden Salad", price: "$6.99" },
      { name: "Chicken Tikka Salad", price: "$9.99" },
      { name: "Grilled Salmon Salad", price: "$14.99" },
      { name: "Beans Salad", price: "$6.99" },
    ],
  },
  {
    slug: "vegetarian",
    name: "Vegetarian Specialties",
    navLabel: "Vegetarian",
    eyebrow: "Vegetable mains",
    items: [
      { name: "Mixed Vegetables Curry", price: "$14.99" },
      { name: "Navratan Korma", price: "$15.99" },
      { name: "Vegetable Tikka Masala", price: "$15.99" },
      { name: "Vegetable Jalfrezi", price: "$14.99" },
      { name: "Vegetable Vindaloo", price: "$14.99" },
      {
        name: "Saag Paneer",
        price: "$15.99",
        description:
          "Spinach and mustard greens slow-stewed with tomato, finished with paneer.",
        dietary: ["v", "gf"],
        spice: 1,
      },
      { name: "Paneer Tikka Masala", price: "$15.99" },
      { name: "Paneer Makhani", price: "$16.99" },
      { name: "Paneer Bhurji", price: "$16.99" },
      { name: "Methi Matar Paneer", price: "$16.99" },
      { name: "Paneer Karahi", price: "$15.99" },
      {
        name: "Chana Masala",
        price: "$14.99",
        description:
          "Chickpeas in a dry-roasted spice gravy with ginger, tomato, and amchoor.",
        dietary: ["vg", "gf"],
        spice: 2,
      },
      { name: "Malai Kofta", price: "$15.99" },
      { name: "Alu Matar Gobi", price: "$14.99" },
      { name: "Baingan Bharta", price: "$14.99" },
      { name: "Bhindi Bhaji", price: "$15.99" },
      { name: "Alu Chana Saag", price: "$14.99" },
      { name: "Alu Chana Paneer", price: "$15.99" },
      { name: "Pumpkin Chana", price: "$14.99" },
      { name: "Tarka Daal", price: "$14.99" },
      {
        name: "Daal Makhni",
        price: "$14.99",
        description:
          "Black urad and kidney bean, overnight simmer, cream, a slow-smoked finish.",
        dietary: ["v", "gf"],
        spice: 1,
      },
      { name: "Daal Saag", price: "$14.99" },
      { name: "Tofu Mushroom Jalfrezi", price: "$16.99" },
    ],
  },
  {
    slug: "chicken",
    name: "Chicken Specialties",
    navLabel: "Chicken",
    eyebrow: "Chicken mains",
    items: [
      {
        name: "Chicken Tikka Masala",
        price: "$16.99",
        description:
          "Grilled chicken in tomato-onion gravy, toasted spice, a touch of cream.",
        dietary: ["gf"],
        spice: 2,
      },
      {
        name: "Chicken Makhni (Butter Chicken)",
        price: "$17.99",
        description:
          "Tandoor chicken, silk-smooth tomato cream, fenugreek, a hit of butter at the finish.",
        dietary: ["gf"],
        spice: 1,
      },
      { name: "Chicken Curry", price: "$15.99" },
      { name: "Chicken Alu Curry", price: "$15.99" },
      { name: "Chicken Saag", price: "$15.99" },
      { name: "Chicken Korma", price: "$15.99" },
      { name: "Chicken Vindaloo", price: "$15.99" },
      { name: "Chicken Madras", price: "$15.99" },
      { name: "Mango Chicken", price: "$15.99" },
      { name: "Chicken Rogan Josh", price: "$15.99" },
      { name: "Chicken Karahi", price: "$15.99" },
      { name: "Chicken Jalfrezi", price: "$15.99" },
      { name: "Chicken Daal Gosht", price: "$15.99" },
      { name: "Chilli Chicken", price: "$16.99" },
      { name: "Pumpkin Chicken", price: "$15.99" },
      { name: "Achari Chicken", price: "$15.99" },
      { name: "Chicken Bhindi", price: "$15.99" },
    ],
  },
  {
    slug: "lamb",
    name: "Lamb Specialties",
    navLabel: "Lamb",
    eyebrow: "Lamb mains",
    items: [
      { name: "Lamb Tikka Masala", price: "$17.99" },
      { name: "Lamb Curry", price: "$17.99" },
      { name: "Lamb Alu Curry", price: "$17.99" },
      {
        name: "Lamb Rogan Josh",
        price: "$17.99",
        description:
          "Kashmiri-style braise, red chili, ginger, fennel, tender stewed lamb.",
        dietary: ["gf"],
        spice: 2,
      },
      { name: "Lamb Vindaloo", price: "$17.99" },
      { name: "Lamb Karahi", price: "$17.99" },
      { name: "Lamb Saag", price: "$17.99" },
      { name: "Lamb Shahi Korma", price: "$17.99" },
      { name: "Lamb Madras", price: "$17.99" },
      { name: "Lamb Karahi Mirchiwala", price: "$17.99" },
      { name: "Coconut Lamb", price: "$17.99" },
      { name: "Lamb Daal Gosht", price: "$17.99" },
      { name: "Lamb Bhindi", price: "$17.99" },
      { name: "Pumpkin Lamb", price: "$17.99" },
      { name: "Achari Lamb", price: "$17.99" },
    ],
  },
  {
    slug: "goat",
    name: "Goat Specialties",
    navLabel: "Goat",
    eyebrow: "Goat with bones",
    items: [
      { name: "Goat Curry", price: "$17.99" },
      { name: "Goat Alu Curry", price: "$17.99" },
      { name: "Goat Rogan Josh", price: "$17.99" },
      { name: "Goat Vindaloo", price: "$17.99" },
      { name: "Goat Korma", price: "$17.99" },
      { name: "Goat Madras", price: "$17.99" },
      { name: "Goat Saag", price: "$17.99" },
      { name: "Achari Goat", price: "$17.99" },
      { name: "Coconut Goat", price: "$17.99" },
      { name: "Goat Kadai Mirchiwala", price: "$17.99" },
      { name: "Goat Dal Gosht", price: "$17.99" },
      { name: "Pumpkin Goat", price: "$17.99" },
      { name: "Goat Bhindi", price: "$17.99" },
      { name: "Goat Karahi", price: "$17.99" },
      { name: "Goat Zalfazia", price: "$17.99" },
    ],
  },
  {
    slug: "seafood",
    name: "Seafood Specialties",
    navLabel: "Seafood",
    eyebrow: "From the sea",
    items: [
      { name: "Shrimp Curry", price: "$18.99" },
      { name: "Shrimp Tikka Masala", price: "$18.99" },
      { name: "Goan Shrimp Curry", price: "$18.99" },
      { name: "Shrimp Karahi", price: "$18.99" },
      { name: "Shrimp Saag", price: "$18.99" },
      { name: "Shrimp Jalfrezi", price: "$18.99" },
      { name: "Shrimp Korma", price: "$18.99" },
      { name: "Shrimp Vindaloo", price: "$18.99" },
      { name: "Pumpkin Shrimp", price: "$18.99" },
      { name: "Shrimp Bhindi", price: "$18.99" },
      { name: "Salmon Tikka Masala", price: "$19.99" },
      { name: "Goan Salmon Curry", price: "$19.99" },
      { name: "Salmon Saag", price: "$19.99" },
      { name: "Mix Seafood (Curry / Korma)", price: "$19.99" },
      { name: "Crab Meat Curry / Korma", price: "$19.99" },
      { name: "Tilapia Fish Curry", price: "$17.99" },
      { name: "Tilapia Fish Saag", price: "$17.99" },
    ],
  },
  {
    slug: "tandoor",
    name: "From the Tandoor",
    navLabel: "Tandoor",
    eyebrow: "Clay oven",
    blurb:
      "Yogurt-marinated, blistered at 800°F, served on the steel plate with charred onion and lime.",
    items: [
      {
        name: "Chicken Tandoori",
        price: "$17.99",
        description:
          "Bone-in, long-marinated, charred edges. Served with cilantro chutney.",
        dietary: ["gf"],
        spice: 2,
      },
      {
        name: "Chicken Tikka",
        price: "$16.99",
        description:
          "Boneless thigh in yogurt, ginger, garlic, toasted spice, kissed by the tandoor.",
        dietary: ["gf"],
        spice: 2,
      },
      { name: "Chicken Malai Kabab", price: "$17.99" },
      { name: "Mumbai Chicken Chops", price: "$18.99" },
      { name: "Tandoori Lamb Chop", price: "$22.99" },
      { name: "Tandoori Mixed Grill", price: "$19.99" },
      { name: "Lamb Boti Kabab", price: "$18.99" },
      { name: "Chicken & Lamb Tikka", price: "$18.99" },
      { name: "Shrimp Tandoori", price: "$18.99" },
      { name: "Grilled Salmon", price: "$19.99" },
    ],
  },
  {
    slug: "biryani",
    name: "Rice & Biryani",
    navLabel: "Biryani",
    eyebrow: "Sealed pot",
    blurb:
      "One Appetizer + One Entree — $21.99. Includes basmati rice, naan, and chutneys (delivery and take-out only).",
    items: [
      {
        name: "Mumbai Vegetable Biryani",
        price: "$15.99",
        description:
          "Cauliflower, carrot, green bean, peas layered with saffron rice.",
        dietary: ["v", "gf"],
        spice: 1,
      },
      {
        name: "Mumbai Chicken Biryani",
        price: "$16.99",
        description:
          "Bone-in thigh, yogurt marinade, mint, fried shallot, sealed under dough.",
        dietary: ["gf"],
        spice: 2,
      },
      { name: "Mumbai Chicken Tikka Biryani", price: "$16.99" },
      {
        name: "Mumbai Lamb Biryani",
        price: "$17.99",
        description:
          "Braised lamb shank, saffron, caramelized onion, rose, dum-cooked.",
        dietary: ["gf"],
        spice: 2,
      },
      { name: "Mumbai Goat Biryani", price: "$18.99" },
      { name: "Mumbai Mix Meat Biryani", price: "$18.99" },
      {
        name: "Mumbai Shrimp Biryani",
        price: "$18.99",
        description:
          "Gulf shrimp, green chili, curry leaf, coastal-leaning spice.",
        dietary: ["gf"],
        spice: 2,
      },
      { name: "Mumbai Mix Seafood Biryani", price: "$18.99" },
      { name: "Mumbai Fried Rice", price: "$15.99" },
      { name: "Mumbai Peas Pulao", price: "$6.99" },
      { name: "Mumbai Lemon Rice", price: "$6.99" },
      { name: "Mumbai Jeera Rice", price: "$6.99" },
      { name: "Plain Basmati Rice", price: "$3.99" },
    ],
  },
  {
    slug: "breads",
    name: "Bread from the Tandoor",
    navLabel: "Breads",
    eyebrow: "From the clay oven",
    items: [
      {
        name: "Plain Naan",
        price: "$3.99",
        description: "Soft, blistered, brushed with butter.",
        dietary: ["v"],
      },
      {
        name: "Garlic Naan",
        price: "$4.99",
        description: "Fresh garlic, cilantro, melted butter.",
        dietary: ["v"],
      },
      {
        name: "Onion Kulcha",
        price: "$4.99",
        description: "Leavened bread stuffed with onion.",
        dietary: ["v"],
      },
      { name: "Onion Chilli Naan", price: "$4.99" },
      { name: "Garlic Chilli Naan", price: "$4.99" },
      { name: "Cheese Naan", price: "$4.99" },
      { name: "Cheese Chilli Naan", price: "$4.99" },
      { name: "Cheese Garlic Naan", price: "$4.99" },
      { name: "Peshwari Naan", price: "$4.99" },
      {
        name: "Roti",
        price: "$4.99",
        description: "Whole-wheat flatbread, lighter than naan.",
        dietary: ["vg"],
      },
      { name: "Poori", price: "$4.99" },
      { name: "Plain Paratha", price: "$4.99" },
      { name: "Rosemary Naan", price: "$4.99" },
      { name: "Keema Naan", price: "$5.99" },
    ],
  },
  {
    slug: "accompaniments",
    name: "Accompaniments",
    navLabel: "Sides",
    eyebrow: "Alongside",
    items: [
      { name: "Papadum", price: "$3.99" },
      { name: "Raita", price: "$3.99" },
      { name: "Mango or Mixed Pickle", price: "$3.99" },
      { name: "Mango Chutney", price: "$3.99" },
      { name: "Tamarind Chutney", price: "$3.99" },
      { name: "Mint Chutney", price: "$3.99" },
      { name: "Onion Chutney", price: "$3.99" },
    ],
  },
  {
    slug: "desserts",
    name: "Desserts",
    navLabel: "Desserts",
    eyebrow: "Finish",
    items: [
      {
        name: "Ras Malai",
        price: "$4.99",
        description: "Cheese dumplings in saffron-cardamom cream.",
        dietary: ["v", "gf"],
      },
      {
        name: "Gulab Jamun",
        price: "$4.99",
        description: "Warm milk dumplings in cardamom-rose syrup.",
        dietary: ["v"],
      },
      {
        name: "Rice Pudding",
        price: "$4.99",
        description: "Basmati rice pudding, cardamom, almond, a little rose.",
        dietary: ["v", "gf"],
      },
      { name: "Mango Ice Cream", price: "$4.99" },
      { name: "Pistachio Ice Cream", price: "$4.99" },
    ],
  },
  {
    slug: "drinks",
    name: "Beverages",
    navLabel: "Drinks",
    eyebrow: "To wash it down",
    items: [
      { name: "Soda (Coke, Sprite, Ginger Ale, Seltzer, or Diet Coke)", price: "$1.99" },
      {
        name: "Mango Lassi",
        price: "$4.99",
        description: "Yogurt and alphonso mango, cardamom.",
        dietary: ["v", "gf"],
      },
      {
        name: "Sweet Lassi",
        price: "$4.99",
        description: "Yogurt, a little sugar, a whisper of rose.",
        dietary: ["v", "gf"],
      },
      { name: "Rose Lassi", price: "$4.99" },
      { name: "Homemade Lemonade", price: "$4.99" },
      { name: "Sparkling Cider / Water", price: "$4.99" },
      { name: "Cranberry Juice", price: "$4.99" },
      { name: "Snapple Orange / Apple", price: "$4.99" },
      {
        name: "Masala Chai",
        price: "$4.99",
        description: "Black tea simmered with milk, ginger, cardamom, clove.",
        dietary: ["v"],
      },
      { name: "Water", price: "$2.00" },
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
