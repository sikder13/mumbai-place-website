import Link from "next/link";
import { Container } from "@/components/site/Container";
import { BrandMark } from "@/components/site/BrandMark";
import { SocialLinks } from "@/components/site/SocialLinks";
import { locations } from "@/lib/locations";
import { site } from "@/lib/site";

const secondary = [
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr_1fr]">
          <div>
            <BrandMark size="lg" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
              {site.tagline}
            </p>
            <SocialLinks tone="dark" className="mt-6" />
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            {locations.map((loc) => (
              <div key={loc.slug}>
                <p className="text-[0.625rem] uppercase tracking-[0.25em] text-[color:var(--color-accent-saffron)]">
                  {loc.neighborhood}
                </p>
                <p className="mt-3 font-display text-lg tracking-tight">
                  {loc.addressLine1}
                </p>
                <p className="text-sm text-[color:var(--color-ink-muted)]">
                  {loc.addressLine2}
                </p>
                <a
                  href={`tel:${loc.phone}`}
                  className="mt-2 block text-sm text-[color:var(--color-ink)] hover:text-[color:var(--color-accent-saffron)]"
                >
                  {loc.phoneDisplay}
                </a>
                <a
                  href={loc.menufyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-accent-saffron)] hover:text-[color:var(--color-ink)]"
                >
                  Order &rarr;
                </a>
              </div>
            ))}
          </div>
          <nav aria-label="Footer">
            <p className="text-[0.625rem] uppercase tracking-[0.25em] text-[color:var(--color-accent-saffron)]">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {secondary.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[color:var(--color-ink)] hover:text-[color:var(--color-accent-saffron)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[color:var(--color-line)] pt-8 text-xs text-[color:var(--color-ink-muted)] sm:flex-row sm:items-center">
          <p>&copy; {year} Mumbai Place. All rights reserved.</p>
          <p>Made in Brooklyn.</p>
        </div>
      </Container>
    </footer>
  );
}
