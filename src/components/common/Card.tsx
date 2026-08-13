import { cn } from '../../utils/cn'

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'bg-theme-card border border-theme-border rounded-2xl p-6 transition-all duration-300 hover:border-emerald-400',
        className
      )}
    >
      {children}
    </div>
  )
}