'use client'

import { useGSAP } from '@gsap/react'
import { SectionContainer } from '../../global/sections/sections-container'
import { TimelineContainer } from '../../global/timeline-soft-skills/timeline-container'
import { TitleTypography } from '../../global/typography/title'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const SoftSkillsSection = () => {
  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline()

  useGSAP(() => {
    tl.from('#principle-title', {
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: '#principle-title',
        start: 'top 1300px',
        end: 'bottom 900',
        scrub: 1,
        markers: true,
      },
    })
  }, [])

  return (
    <SectionContainer
      id="soft-skills-section"
      className="flex flex-col items-center pt-24"
    >
      <TitleTypography id="principle-title" size="lg" className="normal-case">
        Habilidades
      </TitleTypography>
      <TimelineContainer />
    </SectionContainer>
  )
}
