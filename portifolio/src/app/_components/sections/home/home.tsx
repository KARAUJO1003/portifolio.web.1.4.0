import { cn } from '@/lib/utils'
import { ComponentPropsDefault } from '@/types/page-props-default'
import { TitleTypography } from '@/app/_components/global/typography/title'
import { DescriptionTypography } from '../../global/typography/description'
import { SectionContainer } from '../../global/sections/sections-container'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ButtonBorderGradient } from '../../global/buttons/gradient-border-button'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

gsap.config({
  autoSleep: 60,
  force3D: false,
  nullTargetWarn: false,
  units: { left: '%', top: '%', rotation: 'rad' },
})

export const HomeSection = ({ className }: ComponentPropsDefault) => {
  return (
    <SectionContainer
      id="home"
      className={cn(
        'flex flex-col w-full items-center justify-start gap-10 min-h-[610px]',
        className,
      )}
    >
      <div className="space-y-5 flex flex-col items-center ">
        <TitleTypography
          fontWeight="font-black"
          className="text-center max-md:text-6xl"
        >
          software
          <br />
          developer
        </TitleTypography>

        <DescriptionTypography className="max-sm:w-4/5">
          <strong>Welcome to the Dark Side of Coding!</strong> celebrating the
          elegance of dark mode where innovation thrives.
        </DescriptionTypography>
      </div>

      <Link href={'/#about'} className="flex items-center gap-2">
        <ButtonBorderGradient className="px-20" variant="secondary">
          <span className="text-primary"> CONTINUAR</span>
          <ArrowRight className="size-4" />
        </ButtonBorderGradient>
      </Link>
    </SectionContainer>
  )
}
