import React from 'react'
import { TimelineCard } from './timeline-card'
import { Skills } from '@/lib/utilities'

export const TimelineContainer = () => {
  return (
    <article
      className="w-full p-20 max-sm:px-4 pattern-boxes pattern-blue-500 pattern-bg-white 
    pattern-size-6 pattern-opacity-20 max-[1240px]:flex max-[1240px]:flex-col max-[1240px]:justify-center max-[1240px]:items-center"
    >
      <div>
        <div className=" space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-pink-900 before:to-transparent before:max-lg:bg-transparent">
          {Skills.map((item) => {
            return (
              <TimelineCard
                key={item.id}
                title={item.title}
                date={item.date}
                description={item.description}
              />
            )
          })}
        </div>
      </div>
    </article>
  )
}
