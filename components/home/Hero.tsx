import Image from "next/image";
import { Container } from "@/components/site/Container";
import { OrderOnlineButton } from "@/components/site/OrderOnlineButton";
import { Button } from "@/components/ui/Button";

type Props = {
  backgroundImage?: string;
};

const headline = [
  { text: "Modern", italic: false },
  { text: "interpretations", italic: false },
  { text: "of", italic: false },
  { text: "classic", italic: true },
  { text: "Indian", italic: true },
  { text: "cooking.", italic: true },
] as const;

export function Hero({ backgroundImage = "/images/hero/hero.jpg" }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--color-surface)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(233,188,182,0.35),transparent_60%)]"
      />

      <div className="grid min-h-[82vh] sm:min-h-[88vh] lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative flex items-center">
          <Container className="w-full py-20 sm:py-24 lg:py-28">
            <p className="flex items-center gap-3 text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
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

            <h1 className="font-display mt-8 max-w-3xl text-5xl leading-[1.02] tracking-tight text-[color:var(--color-ink)] sm:text-6xl lg:text-[5.25rem]">
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

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--color-ink-muted)]">
              Mumbai-inspired dishes from Brooklyn kitchens. Fresh ingredients,
              quiet technique, two neighborhood rooms.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <OrderOnlineButton variant="primary" size="lg" />
              <Button variant="ghost" size="lg" href="/menu">
                View Menu
              </Button>
            </div>
          </Container>

          <div
            aria-hidden
            className="hero-scroll-cue absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[color:var(--color-ink-muted)] lg:flex"
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
        </div>

        <div className="relative mx-4 mb-6 h-[60vh] overflow-hidden rounded-3xl lg:mx-0 lg:mb-0 lg:h-auto lg:min-h-[82vh] lg:rounded-none lg:rounded-l-[3rem]">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 43vw, 100vw"
            className="hero-zoom object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 hidden w-px bg-[color:var(--color-accent-gold)]/30 lg:block"
          />
        </div>
      </div>
    </section>
  );
}
