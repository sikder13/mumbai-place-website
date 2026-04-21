import Link from "next/link";
import { Container } from "@/components/site/Container";

export function Intro() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="border-t border-[color:var(--color-line)]"
    >
      <Container className="py-24 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
              The Place
            </p>
            <h2
              id="intro-heading"
              className="font-display mt-6 text-4xl leading-[1.1] tracking-tight sm:text-5xl"
            >
              A small kitchen, a long memory, a few very good dishes.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-[color:var(--color-ink-muted)] sm:text-lg">
            <p>
              Mumbai Place opened in Prospect Heights with a simple idea:
              cook the dishes of home with the care they were always owed.
              Hung curd for the marinades. Spices bloomed in ghee, not oil.
              Biryanis sealed under dough and coaxed in slow heat. A second
              room opened in Williamsburg, and the idea stayed.
            </p>
            <p>
              We take the classics seriously — butter chicken, dal makhani,
              goat rogan josh — and treat the street bites as first-course
              theater. Everything on the menu is made to order, which means
              dinner takes a moment. It is worth the moment.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--color-ink)] underline decoration-[color:var(--color-accent-saffron)] decoration-1 underline-offset-[6px] transition-colors hover:text-[color:var(--color-accent-saffron)]"
            >
              Our story
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
