import Link from "next/link";
import { Container } from "@/components/site/Container";

type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

type Props = {
  posts?: JournalPost[];
};

export function JournalTeaser({ posts = [] }: Props) {
  const hasPosts = posts.length > 0;

  return (
    <section
      aria-labelledby="journal-heading"
      className="bg-[color:var(--color-surface-elevated)]"
    >
      <Container className="py-24 sm:py-28">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
              Journal
            </p>
            <h2
              id="journal-heading"
              className="font-display mt-6 text-4xl leading-[1.1] tracking-tight sm:text-5xl"
            >
              Stories from the kitchens.
            </h2>
          </div>
          {hasPosts ? (
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--color-ink)] underline decoration-[color:var(--color-accent-saffron)] decoration-1 underline-offset-[6px] hover:text-[color:var(--color-accent-saffron)]"
            >
              All posts
              <span aria-hidden>&rarr;</span>
            </Link>
          ) : null}
        </div>

        {hasPosts ? (
          <ul className="grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 transition-colors hover:border-[color:var(--color-accent-saffron)]"
                >
                  <p className="text-[0.625rem] uppercase tracking-[0.25em] text-[color:var(--color-ink-muted)]">
                    {post.date}
                  </p>
                  <h3 className="font-display mt-4 text-2xl leading-tight tracking-tight">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-accent-saffron)] transition-transform group-hover:translate-x-1">
                    Read &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-3xl border border-dashed border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-10 text-center sm:p-14">
            <p className="font-display mx-auto max-w-xl text-2xl italic tracking-tight text-[color:var(--color-ink-muted)] sm:text-3xl">
              &ldquo;The first post is being written between service.&rdquo;
            </p>
            <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
              The journal arrives soon — notes on technique, suppliers, the
              rooms, and the occasional recipe.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
