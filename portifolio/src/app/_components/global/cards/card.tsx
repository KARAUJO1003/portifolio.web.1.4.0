import { cn } from '@/lib/utils'
import { ComponentPropsDefault } from '@/types/page-props-default'
import React, { ComponentProps } from 'react'

const Container = ({
  className,
  children,
  ...props
}: ComponentPropsDefault<ComponentProps<'div'>>) => {
  return (
    <div {...props} className={cn(['border rounded-lg'], className)}>
      {children}
    </div>
  )
}

const Header = ({
  className,
  children,
  ...props
}: ComponentPropsDefault<ComponentProps<'div'>>) => {
  return (
    <div {...props} className={cn(['p-4 flex flex-col gap-2'], className)}>
      {children}
    </div>
  )
}

const Body = ({
  className,
  children,
  ...props
}: ComponentPropsDefault<ComponentProps<'div'>>) => {
  return (
    <div {...props} className={cn(['w-full aspect-video'], className)}>
      {children}
    </div>
  )
}

const Footer = ({
  className,
  children,
  ...props
}: ComponentPropsDefault<ComponentProps<'div'>>) => {
  return (
    <div
      {...props}
      className={cn(['p-4 border-t flex flex-col gap-3'], className)}
    >
      {children}
    </div>
  )
}

const Card = {
  Container,
  Body,
  Header,
  Footer,
}

export default Card
