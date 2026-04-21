import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/Button";
import { locations } from "@/lib/locations";

export function LocationsStrip() {
  return (
    <section
      aria-labelledby="locations-heading"
      className="border-t border-[color:var(--color-line)]"
    >
      <Container className="py-24 sm:py-28">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
              Two Rooms in Brooklyn
            </p>
            <h2
              id="locations-heading"
              className="font-display mt-6 text-4xl leading-[1.1] tracking-tight sm:text-5xl"
            >
              Find the one closer to your table.
            </h2>
          </div>
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--color-ink)] underline decoration-[color:var(--color-accent-saffron)] decoration-1 underline-offset-[6px] hover:text-[color:var(--color-accent-saffron)]"
          >
            Both locations
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {locations.map((loc) => (
            <article
              key={loc.slug}
              className="flex flex-col rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface-elevated)] p-8 transition-colors duration-200 hover:border-[color:var(--color-accent-saffron)]"
            >
              <p className="text-[0.625rem] uppercase tracking-[0.25em] text-[color:var(--color-accent-saffron)]">
                {loc.neighborhood}
              </p>
              <h3 className="font-display mt-3 text-3xl tracking-tight">
                {loc.addressLine1}
              </h3>
              <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
                {loc.addressLine2}
              </p>
              <a
                href={`tel:${loc.phone}`}
                className="mt-4 inline-block text-sm text-[color:var(--color-ink)] hover:text-[color:var(--color-accent-saffron)]"
              >
                {loc.phoneDisplay}
              </a>

              <ul className="mt-5 space-y-1 text-sm text-[color:var(--color-ink-muted)]">
                {loc.hours.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <Button variant="secondary" size="md" href={loc.menufyUrl}>
                  Order {loc.neighborhood}
                </Button>
                <Button variant="ghost" size="md" href={loc.googleMapsUrl}>
                  Directions
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
