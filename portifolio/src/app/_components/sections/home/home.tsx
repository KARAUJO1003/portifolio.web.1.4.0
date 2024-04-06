import { cn } from '@/lib/utils'
import { ComponentPropsDefault } from '@/types/page-props-default'
import { TitleTypography } from '@/app/_components/global/typography/title'
import { DescriptionTypography } from '../../global/typography/description'
import { SectionContainer } from '../../global/sections/sections-container'
import { ButtonPrimaryGradient } from '../../global/buttons/button-primary-gradient'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const HomeSection = ({ className }: ComponentPropsDefault) => {
  return (
    <SectionContainer
      id="home"
      className={cn(
        [
          'flex flex-col w-full min-h-screen items-center justify-start gap-10 ',
        ],
        className,
      )}
    >
      <div className="space-y-5 flex flex-col items-center ">
        <TitleTypography fontWeight="font-black" className="text-center">
          developer fullstack
        </TitleTypography>

        <DescriptionTypography>
          Contrary to popular belief, latin literature from 45 BC, making it
          over 2000 years old.
        </DescriptionTypography>
      </div>
      <ButtonPrimaryGradient className="px-20">
        <Link href={'/#about'} className="flex items-center gap-2">
          <span> CONTINUAR</span>
          <ArrowRight className="size-4" />
        </Link>
      </ButtonPrimaryGradient>
    </SectionContainer>
  )
}
