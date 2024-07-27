import { cn } from '@/lib/utils'
import { ComponentPropsDefault } from '@/types/component-props'
import { ComponentProps } from 'react'

export const DescriptionTypography = ({
  className,
  children,
  ...props
}: ComponentPropsDefault<ComponentProps<'p'>>) => {
  return (
    <p
      {...props}
      className={cn(
        'text-sm text-muted-foreground max-w-md text-center',
        className,
      )}
    >
      {children}
    </p>
  )
}
