import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { ComponentProps } from 'react'

type TimelineCardProps<T = unknown> = {
  title: string
  date: string
  description: string
} & T

export const TimelineCard = ({
  title,
  date,
  description,
  className,
  ...props
}: TimelineCardProps<ComponentProps<'div'>>) => {
  return (
    <div
      className={cn(
        [
          'relative flex items-center justify-between md:justify-normal lg:odd:flex-row-reverse group is-active',
        ],
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full   text-zinc-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <Check size={14} />
      </div>

      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded space-y-2 shadow">
        <div className="flex items-center justify-between  space-x-2 mb-1">
          <div className="font-bold text-zinc-300">{title}</div>
          <time className="font-caveat font-medium text-zinc-500 text-xs">
            {date}
          </time>
        </div>
        <div className="text-zinc-400 text-xs">{description}</div>
      </div>
    </div>
  )
}
