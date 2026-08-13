interface SectionTitleProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  eyebrow,
  align = "center",
  light = false,
}: SectionTitleProps) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 mb-12 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-xs font-bold uppercase tracking-[0.18em] ${
            light ? "text-cyan" : "text-sky"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight uppercase ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <div className="h-1 w-16 rounded-full bg-cyan" />
      {subtitle && (
        <p
          className={`text-lg max-w-2xl leading-relaxed ${
            light ? "text-white/80" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
