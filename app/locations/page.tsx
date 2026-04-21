import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { LocationCard } from "@/components/locations/LocationCard";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Two Mumbai Place rooms in Brooklyn: Prospect Heights on Vanderbilt Avenue and Williamsburg on Grand Street. Hours, phone numbers, and directions.",
};

export default function LocationsPage() {
  return (
    <>
      <section className="border-b border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
        <Container className="py-20 sm:py-28">
          <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
            Visit
          </p>
          <h1 className="font-display mt-6 max-w-3xl text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Two rooms, one kitchen
            <span className="italic font-light"> philosophy.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--color-ink-muted)]">
            Dine in, pick up, or have it delivered. Prospect Heights and
            Williamsburg run on the same menu and the same hands — pick the
            room closer to you.
          </p>

          <nav
            aria-label="Jump to location"
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm"
          >
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`#${loc.slug}`}
                className="group inline-flex items-center gap-2 text-[color:var(--color-ink)] hover:text-[color:var(--color-accent-saffron)]"
              >
                <span
                  aria-hidden
                  className="h-px w-6 bg-[color:var(--color-accent-saffron)]"
                />
                {loc.neighborhood}
              </Link>
            ))}
          </nav>
        </Container>
      </section>

      <section aria-label="Locations" className="bg-[color:var(--color-surface)]">
        <Container className="flex flex-col gap-8 py-16 sm:py-20 lg:gap-12">
          {locations.map((loc, i) => (
            <LocationCard key={loc.slug} location={loc} reversed={i % 2 === 1} />
          ))}
        </Container>
      </section>

      <section
        aria-labelledby="locations-cta"
        className="border-t border-[color:var(--color-line)] bg-[color:var(--color-surface-elevated)]"
      >
        <Container className="py-20 text-center sm:py-24">
          <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
            Private events &amp; catering
          </p>
          <h2
            id="locations-cta"
            className="font-display mx-auto mt-6 max-w-3xl text-3xl leading-[1.1] tracking-tight sm:text-4xl"
          >
            Hosting a gathering, birthday, or office lunch? Call either room and
            we&rsquo;ll build a menu with you.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-base">
            {locations.map((loc) => (
              <a
                key={loc.slug}
                href={`tel:${loc.phone}`}
                className="text-[color:var(--color-ink)] hover:text-[color:var(--color-accent-saffron)]"
              >
                <span className="text-[color:var(--color-ink-muted)]">
                  {loc.neighborhood} ·{" "}
                </span>
                {loc.phoneDisplay}
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
