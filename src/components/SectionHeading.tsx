export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      )}
      <h2 className={`${eyebrow ? "mt-3" : ""} font-display font-semibold text-3xl sm:text-4xl text-ink`}>
        {title}
      </h2>
    </div>
  );
}
