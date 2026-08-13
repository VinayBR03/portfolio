export function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-theme-text">{title}</h2>
    </div>
  )
}