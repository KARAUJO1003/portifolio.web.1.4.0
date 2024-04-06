import React from 'react'
import { TimelineCard } from './timeline-card'

export const TimelineContainer = () => {
  return (
    <article
      className="w-full p-20 pattern-boxes pattern-blue-500 pattern-bg-white 
    pattern-size-6 pattern-opacity-20"
    >
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted before:to-transparent">
        <TimelineCard />
        <TimelineCard />
        <TimelineCard />
        <TimelineCard />
        <TimelineCard />
      </div>
    </article>
  )
}
