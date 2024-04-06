import { cn } from '@/lib/utils'
import { ComponentPropsDefault } from '@/types/page-props-default'
import React from 'react'

export const DescriptionTypography = ({
  className,
  children,
}: ComponentPropsDefault) => {
  return (
    <p className={cn('text-sm text-zinc-500 max-w-md text-center', className)}>
      {children}
    </p>
  )
}