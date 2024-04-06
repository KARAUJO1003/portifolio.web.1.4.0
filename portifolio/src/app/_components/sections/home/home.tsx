import { cn } from '@/lib/utils'
import { ComponentPropsDefault } from '@/types/page-props-default'
import { TitleTypography } from '@/app/_components/global/typography/title'
import { DescriptionTypography } from '../../global/typography/description'
import { ButtonBorderGradient } from '../../global/buttons/gradient-border-button'
import { ChevronRightIcon } from '@radix-ui/react-icons'
// import bgImage from '@/assets/logo-backgrund.png'
// import Image from 'next/image'

export const HomeSection = ({ className }: ComponentPropsDefault) => {
  return (
    <section
      id="#/"
      className={cn(
        [
          'flex flex-col w-full min-h-screen items-center justify-start gap-10 pt-20',
        ],
        className,
      )}
    >
      {/* <Image
        src={bgImage}
        objectFit="cover"
        fill
        className="-translate-x-20"
        alt="Imagem de background"
      /> */}
      <div className="space-y-5 flex flex-col items-center ">
        <TitleTypography fontWeight="font-black" className="text-center">
          developer fullstack
        </TitleTypography>

        <DescriptionTypography>
          Contrary to popular belief, latin literature from 45 BC, making it
          over 2000 years old.
        </DescriptionTypography>

        <ButtonBorderGradient
          variant="secondary"
          className="px-20 gap-2 flex items-center"
        >
          <span>Continuar</span>
          <ChevronRightIcon />
        </ButtonBorderGradient>
      </div>
    </section>
  )
}
