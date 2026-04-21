import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { MenuSection } from "@/components/menu/MenuSection";
import { MenuNav } from "@/components/menu/MenuNav";
import { StickyOrderBar } from "@/components/menu/StickyOrderBar";
import { OrderOnlineButton } from "@/components/site/OrderOnlineButton";
import { menuSections } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Modern interpretations of classic Indian cooking: starters, tandoor, curries, biryani, breads, and desserts. Mumbai Place — Brooklyn.",
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

          <aside className="border-t border-[color:var(--color-line)] py-10 text-sm text-[color:var(--color-ink-muted)]">
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
              dishes. Spice levels are guides — we&rsquo;ll adjust on request.
            </p>
          </aside>
        </Container>
      </section>

      <StickyOrderBar />
    </>
  );
}
