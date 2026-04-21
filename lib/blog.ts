import fs from "node:fs";
import path from "node:path";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type PostMetadata = {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  cover?: string;
};

export type Post = {
  slug: string;
  metadata: PostMetadata;
};

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`@/content/blog/${slug}.mdx`);
      return { slug, metadata: mod.metadata as PostMetadata };
    }),
  );
  return posts.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() -
      new Date(a.metadata.date).getTime(),
  );
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
