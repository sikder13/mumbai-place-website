import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/Button";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mumbai Place is a Brooklyn Indian restaurant with two neighborhood rooms — Prospect Heights and Williamsburg — serving modern interpretations of classic dishes, cooked from scratch each day.",
};

const pillars = [
  {
    eyebrow: "Mumbai street",
    title: "The loud bright plates",
    body: "Pani puri, chaats, and the afternoon snacks we grew up eating at the stall. Built to be eaten with your hands and finished in a minute.",
    href: "/menu#starters",
  },
  {
    eyebrow: "Tandoor",
    title: "Eight hundred degrees",
    body: "Yogurt-marinated overnight, blistered in the clay oven. Paneer tikka, seekh kebab, tandoori chicken on the charred steel plate.",
    href: "/menu#tandoor",
  },
  {
    eyebrow: "Curries",
    title: "Gravies built from scratch",
    body: "Onion-ginger-garlic bases started fresh each morning. Butter chicken, rogan josh, saag paneer, dal makhani — cooked patiently, ladled generously.",
    href: "/menu#curries",
  },
  {
    eyebrow: "Biryani",
    title: "Sealed under dough",
    body: "Long-grain basmati layered over slow-braised protein, fried shallot, saffron and rose. Cut open tableside.",
    href: "/menu#biryani",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
        <Container className="py-20 sm:py-28">
          <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
            Our Story
          </p>
          <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            A cornerstone of the
            <span className="italic font-light"> Brooklyn </span>
            table.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--color-ink-muted)]">
            Mumbai Place is two small rooms in Brooklyn serving modern
            interpretations of classic Indian cooking. One kitchen philosophy,
            two neighborhoods — the same insistence on fresh ingredients, quiet
            technique, and the right amount of spice.
          </p>
        </Container>
      </section>

      <section
        aria-labelledby="concept-heading"
        className="border-b border-[color:var(--color-line)] bg-[color:var(--color-surface-elevated)]"
      >
        <Container className="py-24 sm:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
            <div>
              <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
                Kitchen philosophy
              </p>
              <h2
                id="concept-heading"
                className="font-display mt-6 text-4xl leading-[1.1] tracking-tight sm:text-5xl"
              >
                Classic dishes, rebuilt with care.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-[color:var(--color-ink)]">
              <p>
                We started Mumbai Place because the Indian food we loved at
                home was not the Indian food most New Yorkers had eaten. Quieter
                on the heat dial, clearer on the spices, generous with what
                each dish actually is.
              </p>
              <p className="text-[color:var(--color-ink-muted)]">
                The base of every curry gets built from scratch each morning —
                onion, ginger, garlic, tomato, the right spices toasted and
                bloomed in oil. Marinades go on meat the night before. The
                tandoor is ripped to 800 degrees before the first skewer.
              </p>
              <p className="text-[color:var(--color-ink-muted)]">
                Nothing arrives pre-portioned in a bag. Nothing gets
                microwaved. It is a particular, patient way to run a restaurant
                — and it is the only way we know how to cook.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="pillars-heading"
        className="border-b border-[color:var(--color-line)] bg-[color:var(--color-surface)]"
      >
        <Container className="py-24 sm:py-32">
          <div className="mb-14 max-w-2xl">
            <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
              What we serve
            </p>
            <h2
              id="pillars-heading"
              className="font-display mt-6 text-4xl leading-[1.1] tracking-tight sm:text-5xl"
            >
              Four corners of the menu.
            </h2>
          </div>

          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {pillars.map((p) => (
              <li key={p.eyebrow}>
                <Link
                  href={p.href}
                  className="group block border-t border-[color:var(--color-line)] pt-6 transition-colors hover:border-[color:var(--color-accent-saffron)]"
                >
                  <p className="text-[0.625rem] uppercase tracking-[0.3em] text-[color:var(--color-accent-saffron)]">
                    {p.eyebrow}
                  </p>
                  <h3 className="font-display mt-4 text-2xl leading-tight tracking-tight text-[color:var(--color-ink)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
                    {p.body}
                  </p>
                  <span
                    aria-hidden
                    className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)] transition-colors group-hover:text-[color:var(--color-accent-saffron)]"
                  >
                    See the plates
                    <span className="transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        aria-labelledby="logo-heading"
        className="border-b border-[color:var(--color-line)] bg-[color:var(--color-surface-elevated)]"
      >
        <Container className="py-24 text-center sm:py-32">
          <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
            The Mark
          </p>
          <h2
            id="logo-heading"
            className="font-display mx-auto mt-6 max-w-2xl text-4xl leading-[1.1] tracking-tight sm:text-5xl"
          >
            The Great Taste of India.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-ink-muted)]">
            The original Mumbai Place mark — bowls of the food we serve,
            gathered around the wordmark, watched over by the Gateway of India.
          </p>
          <div className="relative mx-auto mt-12 w-full max-w-3xl">
            <Image
              src="/brand/logo-full.png"
              alt="Mumbai Place — bowls of Indian food arranged around the wordmark, with the Gateway of India and the tagline The Great Taste of India"
              width={1376}
              height={890}
              priority={false}
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="visit-heading"
        className="bg-[color:var(--color-surface)]"
      >
        <Container className="py-24 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
                Two rooms
              </p>
              <h2
                id="visit-heading"
                className="font-display mt-6 text-4xl leading-[1.1] tracking-tight sm:text-5xl"
              >
                Come sit with us.
              </h2>
            </div>
            <Button variant="ghost" size="md" href="/locations">
              Both locations
            </Button>
          </div>

          <dl className="mt-12 grid gap-6 sm:grid-cols-2">
            {locations.map((loc) => (
              <div
                key={loc.slug}
                className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface-elevated)] p-8"
              >
                <dt className="text-[0.625rem] uppercase tracking-[0.3em] text-[color:var(--color-accent-saffron)]">
                  {loc.neighborhood}
                </dt>
                <dd className="font-display mt-3 text-2xl tracking-tight">
                  {loc.addressLine1}
                </dd>
                <dd className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
                  {loc.addressLine2}
                </dd>
                <dd className="mt-4">
                  <a
                    href={`tel:${loc.phone}`}
                    className="text-sm text-[color:var(--color-ink)] hover:text-[color:var(--color-accent-saffron)]"
                  >
                    {loc.phoneDisplay}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
