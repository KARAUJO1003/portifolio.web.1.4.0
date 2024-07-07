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
    tl.from('.principal-title', {
      opacity: 0,
      scrollTrigger: {
        trigger: '#principle-title',
        start: 'top 300',
        end: '200 bottom ',
        scrub: 1,
      },
      delay: 1,
    })
  }, [])

  return (
    <SectionContainer
      id="soft-skills-section"
      className="flex flex-col items-center pt-24"
    >
      <TitleTypography
        id="principle-title"
        size="lg"
        className="normal-case principal-title"
      >
        Habilidades
      </TitleTypography>
      <TimelineContainer />
    </SectionContainer>
  )
}
