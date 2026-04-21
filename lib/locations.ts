export type Location = {
  slug: "prospect-heights" | "williamsburg";
  name: string;
  neighborhood: string;
  addressLine1: string;
  addressLine2: string;
  phone: string;
  phoneDisplay: string;
  hours: string[];
  menufyUrl: string;
  googleMapsUrl: string;
  mapEmbedUrl: string;
};

// Menufy menus are JS-rendered and not publicly fetchable; owner updates prices on Menufy.
// Hours mirror the Menufy/Beyond Menu schedule. Both locations observe a brief
// midday pause (1–2pm) on Fri/Sat that carries over from the existing operation.
export const locations: Location[] = [
  {
    slug: "prospect-heights",
    name: "Mumbai Place — Prospect Heights",
    neighborhood: "Prospect Heights",
    addressLine1: "655 Vanderbilt Ave",
    addressLine2: "Brooklyn, NY 11238",
    phone: "+17183987776",
    phoneDisplay: "(718) 398-7776",
    hours: [
      "Mon – Thu · 11am – 10pm",
      "Fri · 11am – 1pm, 2pm – 10:45pm",
      "Sat · 11am – 10:45pm",
      "Sun · 11am – 10pm",
    ],
    menufyUrl: "https://vanderbiltave.mumbaiplacenyc.com/",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mumbai+Place+655+Vanderbilt+Ave+Brooklyn+NY",
    mapEmbedUrl:
      "https://www.google.com/maps?q=655+Vanderbilt+Ave,+Brooklyn,+NY+11238&output=embed",
  },
  {
    slug: "williamsburg",
    name: "Mumbai Place — Williamsburg",
    neighborhood: "Williamsburg",
    addressLine1: "493 Grand Street",
    addressLine2: "Brooklyn, NY 11211",
    phone: "+17185763352",
    phoneDisplay: "(718) 576-3352",
    hours: [
      "Mon – Thu · 11am – 9:45pm",
      "Fri – Sat · 11am – 1pm, 2pm – 10:45pm",
      "Sun · 11am – 9:45pm",
    ],
    menufyUrl: "https://williamsburg.mumbaiplacenyc.com/",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mumbai+Place+493+Grand+Street+Brooklyn+NY",
    mapEmbedUrl:
      "https://www.google.com/maps?q=493+Grand+Street,+Brooklyn,+NY+11211&output=embed",
  },
];
