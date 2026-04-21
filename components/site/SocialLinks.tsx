import { FacebookIcon, InstagramIcon } from "@/components/ui/Icon";
import { socials } from "@/lib/social";
import { cn } from "@/lib/cn";

const iconFor = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
} as const;

type Props = {
  className?: string;
  tone?: "dark" | "muted";
};

export function SocialLinks({ className, tone = "muted" }: Props) {
  const color =
    tone === "dark"
      ? "text-[color:var(--color-ink)] hover:text-[color:var(--color-accent-gold)]"
      : "text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-accent-gold)]";
  return (
    <ul className={cn("flex items-center gap-4", className)}>
      {socials.map((social) => {
        const Icon = iconFor[social.name];
        return (
          <li key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.handle}
              className={cn("inline-flex transition-colors duration-200", color)}
            >
              <Icon size={18} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
