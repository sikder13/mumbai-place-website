import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/Button";
import { OrderOnlineButton } from "@/components/site/OrderOnlineButton";
import { locations } from "@/lib/locations";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(201,161,91,0.18),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(232,215,168,0.35),transparent_60%)]"
        />
        <Container className="pt-20 pb-28 sm:pt-28 sm:pb-32 lg:pt-32">
          <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-gold)]">
            Brooklyn · Prospect Heights · Williamsburg
          </p>
          <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Modern interpretations of classic Indian cooking.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--color-ink-muted)]">
            A family of Mumbai-inspired dishes made in Brooklyn kitchens, with
            fresh ingredients and an insistence on technique. Order for pickup
            or delivery, or find your nearest table.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <OrderOnlineButton variant="primary" size="lg" />
            <Button variant="ghost" size="lg" href="/menu">
              View Menu
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-t border-[color:var(--color-line)]">
        <Container className="grid gap-10 py-16 sm:grid-cols-2">
          {locations.map((loc) => (
            <div
              key={loc.slug}
              className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface-elevated)] p-8"
            >
              <p className="text-[0.625rem] uppercase tracking-[0.25em] text-[color:var(--color-accent-gold)]">
                {loc.neighborhood}
              </p>
              <h2 className="font-display mt-3 text-3xl tracking-tight">
                {loc.addressLine1}
              </h2>
              <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
                {loc.addressLine2}
              </p>
              <a
                href={`tel:${loc.phone}`}
                className="mt-4 inline-block text-sm text-[color:var(--color-ink)] hover:text-[color:var(--color-accent-gold)]"
              >
                {loc.phoneDisplay}
              </a>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="secondary" size="md" href={loc.menufyUrl}>
                  Order from {loc.neighborhood}
                </Button>
                <Button variant="ghost" size="md" href={loc.googleMapsUrl}>
                  Get directions
                </Button>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
