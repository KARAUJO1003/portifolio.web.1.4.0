import React from 'react'
import { NavMenuItems } from '@/lib/utilities'
import Link from 'next/link'
import { ComponentPropsDefault } from '@/types/page-props-default'
import { cn } from '@/lib/utils'

export const NavMenu = ({ className }: ComponentPropsDefault) => {
  return (
    <nav className={cn(['flex items-center gap-8 '], className)}>
      {NavMenuItems.map((item) => (
        <Link
          key={item.url}
          href={item.url}
          className="uppercase text-xs text-muted-foreground hover:text-foreground transition-all duration-300"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
