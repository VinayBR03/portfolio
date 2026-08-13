export function Badge({ label }: { label: string }) {
  return (
    <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-teal-400/10 text-teal-500 border border-teal-400/20">
      {label}
    </span>
  )
}