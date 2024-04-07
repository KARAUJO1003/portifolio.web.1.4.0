import { cn } from '@/lib/utils'
import { ComponentPropsDefault } from '@/types/page-props-default'
import { TitleTypography } from '@/app/_components/global/typography/title'
import { DescriptionTypography } from '../../global/typography/description'
import { SectionContainer } from '../../global/sections/sections-container'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ButtonBorderGradient } from '../../global/buttons/gradient-border-button'

export const HomeSection = ({ className }: ComponentPropsDefault) => {
  return (
    <SectionContainer
      id="home"
      className={cn(
        ['flex flex-col w-full mb-5 items-center justify-start gap-10 '],
        className,
      )}
    >
      <div className="space-y-5 flex flex-col items-center ">
        <TitleTypography
          fontWeight="font-black"
          className="text-center max-md:text-6xl"
        >
          developer <br />
          fullstack
        </TitleTypography>

        <DescriptionTypography className="max-sm:w-4/5">
          Contrary to popular belief, latin literature from 45 BC, making it
          over 2000 years old.
        </DescriptionTypography>
      </div>
      <ButtonBorderGradient className="px-20" variant="secondary">
        <Link href={'/#about'} className="flex items-center gap-2">
          <span className="text-primary"> CONTINUAR</span>
          <ArrowRight className="size-4" />
        </Link>
      </ButtonBorderGradient>
    </SectionContainer>
  )
}
