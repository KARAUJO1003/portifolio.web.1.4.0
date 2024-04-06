import { SocialMedias } from '@/lib/utilities'
import Link from 'next/link'
import React from 'react'

type SocialMediasContactProps = {
  variant?: 'icon' | 'label' | 'full'
}

export const SocialMediasContact = ({
  variant = 'full',
}: SocialMediasContactProps) => {
  return (
    <div className="flex gap-5">
      {SocialMedias.map((item) => (
        <Link
          key={item.url}
          href={item.url}
          className="uppercase text-xs text-muted-foreground hover:text-foreground flex gap-2 items-center"
        >
          {variant === 'icon' && <span>{item.icon}</span>}{' '}
          {variant === 'label' && <span>{item.label}</span>}
          {variant === 'full' && (
            <>
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </>
          )}
        </Link>
      ))}
    </div>
  )
}
