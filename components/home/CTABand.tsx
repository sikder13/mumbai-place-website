import { Container } from "@/components/site/Container";
import { locations } from "@/lib/locations";

export function CTABand() {
  return (
    <section
      aria-labelledby="reserve-heading"
      className="relative isolate overflow-hidden border-t border-[color:var(--color-line)] bg-[color:var(--color-surface-elevated)] text-[color:var(--color-ink)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(196,69,54,0.10),transparent_55%),radial-gradient(circle_at_85%_85%,rgba(233,188,182,0.45),transparent_60%)]"
      />
      <Container className="py-24 sm:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <div>
            <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
              Join us in person
            </p>
            <h2
              id="reserve-heading"
              className="font-display mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
            >
              Call to reserve your table.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[color:var(--color-ink-muted)] sm:text-lg">
              Small rooms, warm lighting, a short wine list chosen with the
              menu in mind. We hold tables by phone — pick the room closest to
              you.
            </p>
          </div>
          <ul className="space-y-5 md:mt-14">
            {locations.map((loc) => (
              <li key={loc.slug}>
                <a
                  href={`tel:${loc.phone}`}
                  className="group flex items-center justify-between gap-4 border-b border-[color:var(--color-line)] pb-5 last:border-none last:pb-0"
                >
                  <div>
                    <p className="text-[0.625rem] uppercase tracking-[0.25em] text-[color:var(--color-accent-saffron)]">
                      {loc.neighborhood}
                    </p>
                    <p className="font-display mt-2 text-2xl tracking-tight sm:text-3xl">
                      {loc.phoneDisplay}
                    </p>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-accent-saffron)] transition-transform group-hover:translate-x-1">
                    Call &rarr;
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
