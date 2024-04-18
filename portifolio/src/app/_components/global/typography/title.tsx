import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

type TitleTypographyProps<T = unknown> = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fontWeight?: 'font-bold' | 'font-black'
} & T

export const TitleTypography = ({
  className,
  children,
  size = 'xl',
  fontWeight = 'font-bold',
  ...props
}: TitleTypographyProps<ComponentProps<'h2'>>) => {
  const sizeXl = size === 'sm' && 'text-xl'
  const size2Xl = size === 'md' && 'text-2xl'
  const size4Xl = size === 'lg' && 'text-4xl'
  const size8Xl = size === 'xl' && 'text-8xl'

  return (
    <h2
      {...props}
      className={cn(
        `${sizeXl || size2Xl || size4Xl || size8Xl} ${fontWeight} text-opacity-100 from-zinc-50 capitalize to-zinc-500 bg-gradient-to-b bg-clip-text text-transparent`,
        className,
      )}
    >
      {children}
    </h2>
  )
}
