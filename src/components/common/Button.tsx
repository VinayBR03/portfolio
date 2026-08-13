import { cn } from '../../utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'fill' | 'outline'
}

export function Button({ variant = 'fill', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-6 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300',
        variant === 'fill' && 'bg-emerald-500 text-black hover:bg-emerald-400',
        variant === 'outline' && 'border border-theme-border text-theme-text hover:border-emerald-500',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}