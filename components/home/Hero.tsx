import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { OrderOnlineButton } from "@/components/site/OrderOnlineButton";

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
    <section className="relative isolate flex min-h-[82vh] items-center overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-surface-elevated)] sm:min-h-[90vh]">
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-zoom -z-20 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[color:var(--color-ink)]/65 via-[color:var(--color-ink)]/45 to-[color:var(--color-ink)]/75"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,rgba(26,23,20,0.1)_0%,rgba(26,23,20,0.45)_85%)]"
      />

      <Container className="relative w-full py-24 text-center sm:py-28">
        <p className="mx-auto flex items-center justify-center gap-3 text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron-soft)]">
          <span
            aria-hidden
            className="inline-block h-px w-8 bg-[color:var(--color-accent-saffron-soft)]/70"
          />
          Brooklyn · Est. 2017
          <span
            aria-hidden
            className="inline-block h-px w-8 bg-[color:var(--color-accent-saffron-soft)]/70"
          />
        </p>

        <h1 className="font-display mx-auto mt-8 max-w-5xl text-5xl leading-[1.02] tracking-tight text-[color:var(--color-surface-elevated)] sm:text-6xl md:text-7xl lg:text-[5.75rem]">
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

        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--color-surface-elevated)]/85">
          Mumbai-inspired dishes from Brooklyn kitchens. Fresh ingredients,
          quiet technique, two neighborhood rooms.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <OrderOnlineButton variant="primary" size="lg" />
          <Link
            href="/menu"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[color:var(--color-surface-elevated)]/30 bg-[color:var(--color-surface-elevated)]/5 px-6 text-base font-medium tracking-tight text-[color:var(--color-surface-elevated)] backdrop-blur-sm transition-colors hover:border-[color:var(--color-surface-elevated)]/70 hover:bg-[color:var(--color-surface-elevated)]/10"
          >
            View Menu
          </Link>
        </div>
      </Container>

      <div
        aria-hidden
        className="hero-scroll-cue absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[color:var(--color-surface-elevated)]/60"
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
