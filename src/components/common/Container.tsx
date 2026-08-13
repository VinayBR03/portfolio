import { cn } from '../../utils/cn'

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('max-w-7xl mx-auto px-6 md:px-10 lg:px-16', className)}>{children}</div>
}
