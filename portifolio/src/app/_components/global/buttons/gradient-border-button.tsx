import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

type ButtonBorderGradientProps<T = unknown> = {
  variant?: 'default' | 'secondary'
} & T

export const ButtonBorderGradient = ({
  variant = 'default',
  ...props
}: ButtonBorderGradientProps<ComponentProps<'button'>>) => {
  return (
    <button
      {...props}
      className="relative inline-flex  overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-1 focus:ring-zinc-400/20 focus:ring-offset-1 focus:ring-offset-zinc-50/20 w-min text-nowrap"
    >
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#263193_0%,#D22A67_50%,#263193_100%)]" />
      <span
        className={cn(
          [
            `${variant === 'default' ? 'bg-zinc-950 hover:bg-zinc-950/90' : 'bg-zinc-950/80 hover:bg-zinc-950/70'} inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md transition-all duration-200 px-6 py-2 text-xs uppercase font-medium text-muted-foreground hover:text-zinc-50 backdrop-blur-3xl`,
          ],
          props.className,
        )}
      >
        {props.children}
      </span>
    </button>
  )
}
