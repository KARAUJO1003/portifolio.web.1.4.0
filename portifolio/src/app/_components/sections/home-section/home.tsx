'use client'

import { cn } from '@/lib/utils'
import { ComponentPropsDefault } from '@/types/page-props-default'
import { TitleTypography } from '@/app/_components/shared/typography/title'
import { DescriptionTypography } from '../../shared/typography/description'
import { SectionContainer } from '../../shared/sections/sections-container'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import GridPattern from '../../magicui/grid-pattern'

export const HomeSection = ({ className }: ComponentPropsDefault) => {
  const tl = gsap.timeline()

  useGSAP(() => {
    tl.fromTo(
      '#title',
      {
        autoAlpha: 0,
        y: 100,
        duration: 2,
        ease: 'back.inOut',
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 2,
        ease: 'back.inOut',
      },
    )
      .fromTo(
        '#descripiton',
        {
          autoAlpha: 0,
          y: 100,
          duration: 2,
          ease: 'back.inOut',
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 2,
          ease: 'back.inOut',
        },
        '-=1',
      )
      .fromTo(
        '#button',
        {
          autoAlpha: 0,
          duration: 2,
          ease: 'back.inOut',
        },
        {
          autoAlpha: 1,
          duration: 2,
          ease: 'back.inOut',
        },
        '-=1',
      )
  })

  return (
    <SectionContainer
      id="home"
      className={cn(
        ' flex relative flex-col w-full items-center md:justify-center gap-10 md:min-h-[510px] max-sm:min-h-[680px]',
        className,
      )}
    >
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={'4 2'}
        className={cn(
          '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]',
        )}
      />
      <div className="space-y-5 flex flex-col items-center max-sm:mt-20">
        <TitleTypography
          id="title"
          fontWeight="font-black"
          className="text-center text-6xl normal-case font-mono"
        >
          software
          <br />
          developer
        </TitleTypography>

        <DescriptionTypography
          id="descripiton"
          className="w-fit max-w-80 line-clamp-2"
        >
          <strong>Welcome to the Dark Side of Coding!</strong> celebrating the
          elegance of dark mode.
        </DescriptionTypography>
      </div>

      <Link
        target="_blank"
        href={'https://curriculo-dev-liard.vercel.app/'}
        id="button"
        className="flex items-center gap-3"
      >
        <Button className="px-10 gap-2" variant="outline">
          <span className="text-primary"> CURRICULUM VITAE</span>
          <ExternalLink className="size-4" />
        </Button>
      </Link>
    </SectionContainer>
  )
}
