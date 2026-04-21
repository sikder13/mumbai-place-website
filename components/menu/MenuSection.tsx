import type { MenuSection as MenuSectionType } from "@/lib/menu";
import { MenuItem } from "@/components/menu/MenuItem";

export function MenuSection({ section }: { section: MenuSectionType }) {
  return (
    <section id={section.slug} className="scroll-mt-28 py-14 sm:py-20">
      <header className="mb-10 max-w-2xl">
        <p className="text-[0.625rem] uppercase tracking-[0.35em] text-[color:var(--color-accent-saffron)]">
          {section.eyebrow}
        </p>
        <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          {section.name}
        </h2>
        {section.blurb ? (
          <p className="mt-5 text-base leading-relaxed text-[color:var(--color-ink-muted)]">
            {section.blurb}
          </p>
        ) : null}
      </header>

      <ul className="divide-y divide-[color:var(--color-line)]">
        {section.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </ul>
    </section>
  );
}
