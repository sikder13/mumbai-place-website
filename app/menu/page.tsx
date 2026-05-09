import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { MenuSection } from "@/components/menu/MenuSection";
import { MenuNav } from "@/components/menu/MenuNav";
import { StickyOrderBar } from "@/components/menu/StickyOrderBar";
import { OrderOnlineButton } from "@/components/site/OrderOnlineButton";
import { menuSections, menuDisclaimer } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Lunch combos, starters, vegetarian and chicken specialties, lamb, goat, seafood, tandoori mains, biryani, breads, and desserts. Mumbai Place — Brooklyn.",
};

export default function MenuPage() {
  return (
    <>
      <section className="border-b border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
        <Container className="py-20 sm:py-28">
          <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
            The Menu
          </p>
          <h1 className="font-display mt-6 max-w-3xl text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Classics, rebuilt with
            <span className="italic font-light"> quiet care.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--color-ink-muted)]">
            A curated slice of what we serve in both rooms. Pricing and daily
            availability are kept up to date on our order pages — pick a
            location and dive in.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <OrderOnlineButton variant="primary" size="lg" />
            <p className="text-xs text-[color:var(--color-ink-muted)]">
              Orders open 11am daily.
            </p>
          </div>
        </Container>
      </section>

      <section aria-label="Menu" className="bg-[color:var(--color-surface)]">
        <Container>
          <MenuNav sections={menuSections} />

          <div className="divide-y divide-[color:var(--color-line)]">
            {menuSections.map((section) => (
              <MenuSection key={section.slug} section={section} />
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="download-menu-heading"
        className="relative isolate overflow-hidden border-y border-[color:var(--color-line)] bg-[color:var(--color-surface-elevated)] text-[color:var(--color-ink)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(196,69,54,0.10),transparent_55%),radial-gradient(circle_at_85%_85%,rgba(233,188,182,0.45),transparent_60%)]"
        />
        <Container className="py-20 sm:py-24">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
            <div>
              <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
                Take it with you
              </p>
              <h2
                id="download-menu-heading"
                className="font-display mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl"
              >
                The full printed menu.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-[color:var(--color-ink-muted)]">
                The same menu we hand you in the dining room — with both
                addresses, phone numbers, and hours. Save it to your phone or
                share it with the table.
              </p>
            </div>
            <a
              href="/menu.pdf"
              download
              aria-label="Download the full Mumbai Place menu as a PDF"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--color-accent-saffron)] px-6 text-base font-medium tracking-tight text-[color:var(--color-surface-elevated)] transition-colors duration-200 hover:bg-[color:var(--color-accent-saffron-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent-saffron)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-surface-elevated)]"
            >
              Download menu (PDF)
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
            </a>
          </div>
        </Container>
      </section>

      <section aria-label="Menu notes" className="bg-[color:var(--color-surface)]">
        <Container>
          <aside className="py-10 text-sm text-[color:var(--color-ink-muted)]">
            <p>
              <span className="font-medium text-[color:var(--color-ink)]">
                Notes.
              </span>{" "}
              <span aria-hidden className="mx-1 inline-block align-middle">
                <span className="inline-block rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-1.5 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.15em] text-[color:var(--color-ink-muted)]">
                  V
                </span>{" "}
                Vegetarian ·{" "}
                <span className="inline-block rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-1.5 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.15em] text-[color:var(--color-ink-muted)]">
                  VG
                </span>{" "}
                Vegan ·{" "}
                <span className="inline-block rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-1.5 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.15em] text-[color:var(--color-ink-muted)]">
                  GF
                </span>{" "}
                Gluten-free.
              </span>{" "}
              Kitchens share prep surfaces; we cannot guarantee allergen-free
              dishes. Spice levels are guides — we&rsquo;ll adjust on request.{" "}
              {menuDisclaimer}
            </p>
          </aside>
        </Container>
      </section>

      <StickyOrderBar />
    </>
  );
}
