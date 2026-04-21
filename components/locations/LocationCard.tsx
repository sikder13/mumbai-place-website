import { Button } from "@/components/ui/Button";
import { MapEmbed } from "@/components/locations/MapEmbed";
import type { Location } from "@/lib/locations";

type Props = {
  location: Location;
  reversed?: boolean;
};

export function LocationCard({ location, reversed = false }: Props) {
  return (
    <article
      id={location.slug}
      className="scroll-mt-28 rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface-elevated)] p-6 sm:p-10 lg:p-12"
    >
      <div
        className={`grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-stretch ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="flex flex-col">
          <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
            {location.neighborhood}
          </p>
          <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            {location.addressLine1}
          </h2>
          <p className="mt-2 text-base text-[color:var(--color-ink-muted)]">
            {location.addressLine2}
          </p>

          <a
            href={`tel:${location.phone}`}
            className="mt-6 inline-block text-lg text-[color:var(--color-ink)] underline decoration-[color:var(--color-accent-saffron)] decoration-1 underline-offset-[6px] hover:text-[color:var(--color-accent-saffron)]"
          >
            {location.phoneDisplay}
          </a>

          <div className="mt-8 border-t border-[color:var(--color-line)] pt-6">
            <p className="text-[0.625rem] uppercase tracking-[0.25em] text-[color:var(--color-ink-muted)]">
              Hours
            </p>
            <ul className="mt-3 space-y-1.5 text-[0.95rem] text-[color:var(--color-ink)]">
              {location.hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-10">
            <Button variant="primary" size="md" href={location.menufyUrl}>
              Order from {location.neighborhood}
            </Button>
            <Button variant="ghost" size="md" href={location.googleMapsUrl}>
              Get directions
            </Button>
          </div>
        </div>

        <MapEmbed
          src={location.mapEmbedUrl}
          title={`Map of ${location.name}`}
          className="min-h-[320px] lg:min-h-[440px]"
        />
      </div>
    </article>
  );
}
