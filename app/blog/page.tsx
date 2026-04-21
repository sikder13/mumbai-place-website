import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { getAllPosts, formatPostDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Mumbai Place",
  description:
    "Notes on the food, the kitchen, and the two rooms. Slow writing from a Brooklyn Indian restaurant.",
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      <section className="border-b border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
        <Container className="py-20 sm:py-28">
          <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
            Blog
          </p>
          <h1 className="font-display mt-6 max-w-3xl text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Notes from the
            <span className="italic font-light"> kitchen.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--color-ink-muted)]">
            Field guides, dish explainers, neighborhood notes. Slow writing,
            short shelf life on the shelf, long shelf life in the head.
          </p>
        </Container>
      </section>

      <section aria-label="Posts" className="bg-[color:var(--color-surface)]">
        <Container className="py-16 sm:py-20">
          <ul className="divide-y divide-[color:var(--color-line)]">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid gap-3 py-10 transition-colors sm:grid-cols-[180px_1fr] sm:gap-8 sm:py-12"
                >
                  <div>
                    <p className="text-[0.625rem] uppercase tracking-[0.25em] text-[color:var(--color-ink-muted)]">
                      {formatPostDate(post.metadata.date)}
                    </p>
                    <p className="mt-2 text-xs text-[color:var(--color-ink-muted)]">
                      {post.metadata.author}
                    </p>
                  </div>
                  <div>
                    <h2 className="font-display text-3xl leading-[1.1] tracking-tight text-[color:var(--color-ink)] transition-colors group-hover:text-[color:var(--color-accent-saffron)] sm:text-4xl">
                      {post.metadata.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--color-ink-muted)]">
                      {post.metadata.excerpt}
                    </p>
                    <span
                      aria-hidden
                      className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)] transition-colors group-hover:text-[color:var(--color-accent-saffron)]"
                    >
                      Read
                      <span className="transition-transform group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
