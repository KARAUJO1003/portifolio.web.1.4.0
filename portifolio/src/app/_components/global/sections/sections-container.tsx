import { cn } from '@/lib/utils'
import { ComponentPropsDefault } from '@/types/page-props-default'
import { ComponentProps } from 'react'

export const SectionContainer = ({
  children,
  className,
  ...rest
}: ComponentPropsDefault<ComponentProps<'section'>>) => {
  return (
    <section {...rest} className={cn(['pt-24'], className)}>
      {children}
    </section>
  )
}
