import { cn } from '@/lib/utils'
import { ComponentPropsDefault } from '@/types/page-props-default'
import React from 'react'

type sizeProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fontWeight?: 'font-bold' | 'font-black'
}

export const TitleTypography = ({
  className,
  children,
  size = 'xl',
  fontWeight = 'font-bold',
}: ComponentPropsDefault<sizeProps>) => {
  const sizeXl = size === 'sm' && 'text-xl'
  const size2Xl = size === 'md' && 'text-2xl'
  const size4Xl = size === 'lg' && 'text-4xl'
  const size8Xl = size === 'xl' && 'text-8xl'

  return (
    <h2
      className={cn(
        `${sizeXl || size2Xl || size4Xl || size8Xl} ${fontWeight} text-opacity-100 from-zinc-100 capitalize to-zinc-600 bg-gradient-to-b bg-clip-text text-transparent`,
        className,
      )}
    >
      {children}
    </h2>
  )
}
