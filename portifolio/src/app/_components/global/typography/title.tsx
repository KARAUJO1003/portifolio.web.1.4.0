import { cn } from '@/lib/utils'
import { ComponentPropsDefault } from '@/types/page-props-default'
import React from 'react'

type sizeProps = {
  size?: 'text-4xl' | 'text-8xl'
  fontWeight?: 'font-bold' | 'font-black'
}

export const TitleTypography = ({
  className,
  children,
  size = 'text-8xl',
  fontWeight = 'font-bold',
}: ComponentPropsDefault<sizeProps>) => {
  return (
    <h2
      className={cn(
        `${size} ${fontWeight} text-opacity-100 from-zinc-400  to-zinc-700 bg-gradient-to-b bg-clip-text text-transparent`,
        className,
      )}
    >
      {children}
    </h2>
  )
}
