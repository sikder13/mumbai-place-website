import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { signatureDishes } from "@/lib/signatures";
import { cn } from "@/lib/cn";

export function SignatureDishes() {
  return (
    <section
      aria-labelledby="signatures-heading"
      className="bg-[color:var(--color-surface-elevated)]"
    >
      <Container className="py-24 sm:py-32">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
              From the Kitchen
            </p>
            <h2
              id="signatures-heading"
              className="font-display mt-6 text-4xl leading-[1.1] tracking-tight sm:text-5xl"
            >
              Dishes we&rsquo;re quietly proud of.
            </h2>
          </div>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--color-ink)] underline decoration-[color:var(--color-accent-saffron)] decoration-1 underline-offset-[6px] hover:text-[color:var(--color-accent-saffron)]"
          >
            Full menu
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {signatureDishes.map((dish, i) => (
            <li key={dish.slug}>
              <Link
                href={`/menu#${dish.section}`}
                className="group block h-full"
              >
                <div
                  className={cn(
                    "relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[color:var(--color-line)] transition-colors duration-300",
                    "group-hover:border-[color:var(--color-accent-saffron)]",
                  )}
                >
                  {dish.image ? (
                    <>
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/55 via-[color:var(--color-ink)]/5 to-transparent"
                      />
                    </>
                  ) : (
                    <div
                      aria-hidden
                      className={cn(
                        "absolute inset-0",
                        i % 2 === 0
                          ? "bg-[radial-gradient(circle_at_30%_30%,rgba(201,161,91,0.35),transparent_55%),linear-gradient(160deg,rgba(26,23,20,0.92),rgba(26,23,20,0.72))]"
                          : "bg-[radial-gradient(circle_at_70%_30%,rgba(232,215,168,0.65),transparent_55%),linear-gradient(180deg,rgba(246,244,239,1),rgba(232,215,168,0.35))]",
                      )}
                    />
                  )}
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <p
                      className={cn(
                        "text-[0.625rem] uppercase tracking-[0.25em]",
                        dish.image || i % 2 === 0
                          ? "text-[color:var(--color-accent-saffron-soft)]"
                          : "text-[color:var(--color-accent-saffron)]",
                      )}
                    >
                      {dish.section}
                    </p>
                    <p
                      className={cn(
                        "font-display mt-2 text-xl leading-tight tracking-tight",
                        dish.image || i % 2 === 0
                          ? "text-[color:var(--color-surface-elevated)]"
                          : "text-[color:var(--color-ink)]",
                      )}
                    >
                      {dish.name}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
                  {dish.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
