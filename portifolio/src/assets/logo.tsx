import { cn } from '@/lib/utils'
import { ComponentPropsDefault } from '@/types/page-props-default'
import Link from 'next/link'
import React from 'react'

export const Logo = ({ className }: ComponentPropsDefault) => {
  return (
    <Link href="/" className="flex items-center gap-5">
      <svg
        width="37"
        height="32"
        viewBox="0 0 37 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={(cn([]), className)}
      >
        <path
          d="M14.7266 0.590907L6.28906 31.9375H0.306108L8.74361 0.590907H14.7266ZM17.9034 20.4318V14.2955L36.9261 6.67614V13.1193L24.8068 17.3125L25.0114 17.0057V17.7216L24.8068 17.4148L36.9261 21.608V28.0511L17.9034 20.4318Z"
          fill="none"
          className="fill-muted-foreground"
        />
      </svg>
      <span className="uppercase text-sm font-extralight tracking-widest ">
        kaesyo felix
      </span>
    </Link>
  )
}
