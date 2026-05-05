import { Container } from "@/components/site/Container";
import { OrderOnlineButton } from "@/components/site/OrderOnlineButton";
import { Button } from "@/components/ui/Button";
import { HeroMosaic } from "@/components/home/HeroMosaic";
import { signatureDishes } from "@/lib/signatures";

const headline = [
  { text: "Modern", italic: false },
  { text: "interpretations", italic: false },
  { text: "of", italic: false },
  { text: "classic", italic: true },
  { text: "Indian", italic: true },
  { text: "cooking.", italic: true },
] as const;

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-[color:var(--color-surface)] sm:min-h-[92vh]">
      <HeroMosaic dishes={signatureDishes} />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,244,239,0.82)_0%,rgba(246,244,239,0.65)_70%,rgba(246,244,239,0.78)_100%),linear-gradient(to_bottom,rgba(233,188,182,0.15),transparent_40%)]"
      />

      <Container className="relative w-full py-24 text-center sm:py-28">
        <p className="flex items-center justify-center gap-3 text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
          <span
            aria-hidden
            className="inline-block h-px w-8 bg-[color:var(--color-accent-saffron)]/40"
          />
          Brooklyn &middot; Est. 2017
          <span
            aria-hidden
            className="inline-block h-px w-8 bg-[color:var(--color-accent-saffron)]/40"
          />
        </p>

        <h1 className="font-display mx-auto mt-8 max-w-5xl text-5xl leading-[1.02] tracking-tight text-[color:var(--color-ink)] sm:text-6xl md:text-7xl lg:text-[5.75rem]">
          {headline.map((part, i) => (
            <span key={i}>
              <span
                className={`hero-word ${part.italic ? "italic font-light" : ""}`}
                style={{ animationDelay: `${80 * i}ms` }}
              >
                {part.text}
              </span>
              {i < headline.length - 1 ? " " : null}
            </span>
          ))}
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--color-ink-muted)]">
          Mumbai-inspired dishes from Brooklyn kitchens. Fresh ingredients,
          quiet technique, two neighborhood rooms.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <OrderOnlineButton variant="primary" size="lg" />
          <Button variant="ghost" size="lg" href="/menu">
            View Menu
          </Button>
        </div>
      </Container>

      <div
        aria-hidden
        className="hero-scroll-cue absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[color:var(--color-ink-muted)]"
      >
        <span className="text-[0.625rem] uppercase tracking-[0.35em]">
          Scroll
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          <path d="M3 5 L7 10 L11 5" />
        </svg>
      </div>
    </section>
  );
}
