import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/site/Container";
import { ArticleJsonLd } from "@/components/site/JsonLd";
import { getPostSlugs, formatPostDate, type PostMetadata } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

async function loadPost(slug: string) {
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    return {
      Post: mod.default as React.ComponentType,
      metadata: mod.metadata as PostMetadata,
    };
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loaded = await loadPost(slug);
  if (!loaded) return {};
  const { title, excerpt, date, author } = loaded.metadata;
  return {
    title,
    description: excerpt,
    openGraph: {
      type: "article",
      title,
      description: excerpt,
      url: `/blog/${slug}`,
      publishedTime: date,
      authors: [author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const loaded = await loadPost(slug);
  if (!loaded) notFound();
  const { Post, metadata } = loaded;

  return (
    <article className="bg-[color:var(--color-surface)]">
      <ArticleJsonLd
        slug={slug}
        title={metadata.title}
        description={metadata.excerpt}
        date={metadata.date}
        author={metadata.author}
      />
      <header className="border-b border-[color:var(--color-line)]">
        <Container size="narrow" className="py-20 sm:py-24">
          <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
            Blog
          </p>
          <h1 className="font-display mt-6 text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            {metadata.title}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[color:var(--color-ink-muted)]">
            <time dateTime={metadata.date}>
              {formatPostDate(metadata.date)}
            </time>
            <span aria-hidden>·</span>
            <span>{metadata.author}</span>
          </div>
        </Container>
      </header>

      <Container size="narrow" className="py-16 sm:py-20">
        <div className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:tracking-tight prose-h2:mt-12 prose-h2:text-2xl prose-h2:sm:text-3xl prose-p:text-[color:var(--color-ink)] prose-p:leading-relaxed prose-p:text-[1.05rem] prose-strong:text-[color:var(--color-ink)] prose-a:text-[color:var(--color-accent-saffron)] prose-a:decoration-[color:var(--color-accent-saffron)] prose-a:underline-offset-[6px] hover:prose-a:text-[color:var(--color-accent-saffron-deep)]">
          <Post />
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--color-line)] pt-10 text-sm">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-accent-saffron)]"
          >
            <span aria-hidden>&larr;</span>
            All posts
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-[0.7rem] text-[color:var(--color-ink)] hover:text-[color:var(--color-accent-saffron)]"
          >
            See the menu
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </Container>
    </article>
  );
}
