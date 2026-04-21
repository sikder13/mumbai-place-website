import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { SignatureDishes } from "@/components/home/SignatureDishes";
import { LocationsStrip } from "@/components/home/LocationsStrip";
import { JournalTeaser } from "@/components/home/JournalTeaser";
import { CTABand } from "@/components/home/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <SignatureDishes />
      <LocationsStrip />
      <JournalTeaser />
      <CTABand />
    </>
  );
}
