import React from 'react'
import { NavMenuItems } from '@/lib/utilities'
import Link from 'next/link'

export const NavMenu = () => {
  return (
    <nav className="flex items-center gap-8">
      {NavMenuItems.map((item) => (
        <Link
          key={item.url}
          href={item.url}
          className="uppercase text-xs text-muted-foreground hover:text-foreground"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
