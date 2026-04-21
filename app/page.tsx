import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { SignatureDishes } from "@/components/home/SignatureDishes";
import { LocationsStrip } from "@/components/home/LocationsStrip";
import { JournalTeaser } from "@/components/home/JournalTeaser";
import { CTABand } from "@/components/home/CTABand";
import { getAllPosts, formatPostDate } from "@/lib/blog";

export default async function Home() {
  const posts = await getAllPosts();
  const teaserPosts = posts.slice(0, 3).map((p) => ({
    slug: p.slug,
    title: p.metadata.title,
    excerpt: p.metadata.excerpt,
    date: formatPostDate(p.metadata.date),
  }));

  return (
    <>
      <Hero />
      <Intro />
      <SignatureDishes />
      <LocationsStrip />
      <JournalTeaser posts={teaserPosts} />
      <CTABand />
    </>
  );
}
