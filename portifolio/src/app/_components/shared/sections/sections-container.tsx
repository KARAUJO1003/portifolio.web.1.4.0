import { cn } from '@/lib/utils'
import { ComponentPropsDefault } from '@/types/component-props'
import { ComponentProps } from 'react'

export const SectionContainer = ({
  children,
  className,
  ...rest
}: ComponentPropsDefault<ComponentProps<'section'>>) => {
  return (
    <section {...rest} className={cn(['section-container pt-24 '], className)}>
      {children}
    </section>
  )
}
