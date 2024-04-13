'use client'
import React from 'react'
import { TimelineCard } from './timeline-card'
import { Skills } from '@/lib/utilities'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

export const TimelineContainer = () => {
  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline()

  useGSAP(() => {
    tl.fromTo(
      '.odd-item1',
      {
        y: 500,
        opacity: 0,
        scrollTrigger: {
          trigger: '.odd-item1',
          start: 'bottom 700px',
          end: '100 600px',
          scrub: 1,
        },
        stagger: 0.1,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.odd-item1',
          start: 'top 900px',
          end: '300 900px',
          scrub: 1,
        },
        stagger: 0.2,
      },
    ).fromTo(
      '.odd-item2',
      {
        y: 500,
        opacity: 0,
        scrollTrigger: {
          trigger: '.odd-item2',
          start: 'bottom 700px',
          end: '100 600px',
          scrub: 2,
        },
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.odd-item2',
          start: 'top 1100px',
          end: 'top 900px',
          scrub: 2,
        },
      },
      '-=1',
    )
  }, [])

  return (
    <article
      className="w-full p-20 max-sm:px-4 pattern-boxes pattern-blue-500 pattern-bg-white 
    pattern-size-6 pattern-opacity-20 max-[1240px]:flex max-[1240px]:flex-col max-[1240px]:justify-center max-[1240px]:items-center"
    >
      <div>
        <div className=" space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-pink-900 before:to-transparent before:max-lg:bg-transparent">
          {Skills.map((item, index) => {
            return (
              <TimelineCard
                className={`${index % 2 === 0 ? 'odd-item1 ' : 'odd-item2'}`}
                id="timelineCard"
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
