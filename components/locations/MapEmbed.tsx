type Props = {
  src: string;
  title: string;
  className?: string;
};

export function MapEmbed({ src, title, className }: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] ${className ?? ""}`}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-full w-full border-0"
        allowFullScreen
      />
    </div>
  );
}
