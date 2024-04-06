import { SocialMedias } from '@/lib/utilities'
import Link from 'next/link'
import React from 'react'

export const SocialMediasContact = () => {
  return (
    <div>
      {SocialMedias.map((item) => (
        <Link
          key={item.url}
          href={item.url}
          className="uppercase text-xs text-muted-foreground hover:text-foreground"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}
