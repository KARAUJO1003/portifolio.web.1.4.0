'use client'

import { useGSAP } from '@gsap/react'
import { SectionContainer } from '../../shared/sections/sections-container'
import { TimelineContainer } from '../../shared/timeline-soft-skills/timeline-container'
import { TitleTypography } from '../../shared/typography/title'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ComponentPropsDefault } from '@/types/page-props-default'
import { cn } from '@/lib/utils'

export const SoftSkillsSection = ({ className }: ComponentPropsDefault) => {
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
      className={cn(['flex flex-col items-center pt-24'], className)}
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
