import type { MenuItem as MenuItemType } from "@/lib/menu";
import { DietaryPill, SpiceIndicator } from "@/components/menu/DietaryPill";

export function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <li className="py-5 first:pt-0 last:pb-0">
      <div className="flex items-baseline gap-4">
        <h3 className="font-display flex flex-wrap items-baseline gap-x-3 gap-y-1 text-lg leading-tight tracking-tight text-[color:var(--color-ink)]">
          <span>{item.name}</span>
          {item.dietary?.length ? (
            <span className="flex items-center gap-1.5">
              {item.dietary.map((d) => (
                <DietaryPill key={d} tag={d} />
              ))}
            </span>
          ) : null}
          {item.spice ? (
            <span className="inline-flex items-center pl-1">
              <SpiceIndicator level={item.spice} />
            </span>
          ) : null}
        </h3>
        <span
          aria-hidden
          className="mx-1 hidden flex-1 translate-y-[-2px] border-b border-dotted border-[color:var(--color-line)] sm:block"
        />
        <span className="font-display shrink-0 text-base tracking-tight text-[color:var(--color-ink)]">
          {item.price}
        </span>
      </div>
      {item.description ? (
        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
          {item.description}
        </p>
      ) : null}
    </li>
  );
}
