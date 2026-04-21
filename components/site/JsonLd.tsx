import { locations, type Location } from "@/lib/locations";
import { socials } from "@/lib/social";
import { site } from "@/lib/site";

type OpeningHours = {
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

const hoursByLocation: Record<Location["slug"], OpeningHours[]> = {
  "prospect-heights": [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "11:00", closes: "22:00" },
    { dayOfWeek: ["Friday"], opens: "11:00", closes: "13:00" },
    { dayOfWeek: ["Friday"], opens: "14:00", closes: "22:45" },
    { dayOfWeek: ["Saturday"], opens: "11:00", closes: "22:45" },
    { dayOfWeek: ["Sunday"], opens: "11:00", closes: "22:00" },
  ],
  williamsburg: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "11:00", closes: "21:45" },
    { dayOfWeek: ["Friday", "Saturday"], opens: "11:00", closes: "13:00" },
    { dayOfWeek: ["Friday", "Saturday"], opens: "14:00", closes: "22:45" },
    { dayOfWeek: ["Sunday"], opens: "11:00", closes: "21:45" },
  ],
};

function postalCodeFrom(addressLine2: string): string | undefined {
  return addressLine2.match(/\b\d{5}\b/)?.[0];
}

function buildGraph() {
  const organization = {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    description: site.description,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/brand/logo-full.png`,
    },
    sameAs: socials.map((s) => s.url),
  };

  const restaurants = locations.map((loc) => ({
    "@type": "Restaurant",
    "@id": `${site.url}/locations#${loc.slug}`,
    name: loc.name,
    url: `${site.url}/locations`,
    parentOrganization: { "@id": organization["@id"] },
    servesCuisine: ["Indian", "South Asian"],
    priceRange: "$$",
    telephone: loc.phoneDisplay,
    menu: loc.menufyUrl,
    acceptsReservations: "True",
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.addressLine1,
      addressLocality: "Brooklyn",
      addressRegion: "NY",
      postalCode: postalCodeFrom(loc.addressLine2),
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "Brooklyn",
    },
    openingHoursSpecification: hoursByLocation[loc.slug].map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [organization, ...restaurants],
  };
}

export function JsonLd() {
  const graph = buildGraph();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function ArticleJsonLd({
  slug,
  title,
  description,
  date,
  author,
}: {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
}) {
  const url = `${site.url}/blog/${slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/brand/logo-full.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
