'use client'
import React from 'react'
import { NavMenuItems } from '@/lib/utilities'
import Link from 'next/link'
import { ComponentPropsDefault } from '@/types/page-props-default'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export const NavMenu = ({ className }: ComponentPropsDefault) => {
  const pathname = usePathname()

  return (
    <nav className={cn(['flex items-center gap-8 '], className)}>
      {NavMenuItems.map((item) => (
        <Link
          key={item.url}
          href={item.url}
          className={`${pathname === item.url ? 'text-primary font-bold' : ''} uppercase text-xs text-muted-foreground hover:text-foreground transition-all duration-300`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
