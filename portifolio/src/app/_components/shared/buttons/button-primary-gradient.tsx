import { cn } from '@/lib/utils'
import { ComponentPropsDefault } from '@/types/component-props'

export const ButtonPrimaryGradient = ({
  className,
  children,
}: ComponentPropsDefault) => {
  return (
    <button
      className={cn(
        [
          'bg-gradient-to-bl to-transparent via-principalBlue/60 from-principalPink/80 text-xs text-muted-foreground hover:text-primary hover:bg-principalBlue/30 transition-all px-4 h-9 rounded-md',
        ],
        className,
      )}
    >
      {children}
    </button>
  )
}
