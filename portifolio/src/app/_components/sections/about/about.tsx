import { cn } from '@/lib/utils'
import { ComponentPropsDefault } from '@/types/page-props-default'
import { TitleTypography } from '@/app/_components/global/typography/title'
import { DescriptionTypography } from '../../global/typography/description'
import { SocialMediasContact } from '../../global/social-medias'
import developerPhoto from '../../../../../public/developer-photo.png'
import Image from 'next/image'
// import bgImage from '@/assets/logo-backgrund.png'

export const AboutSection = ({ className }: ComponentPropsDefault) => {
  return (
    <section
      id="about"
      className={cn(
        [
          'flex flex-col w-full min-h-screen items-center justify-center gap-10 pt-20',
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
      <div className="space-y-5 flex items-start  justify-between gap-5 w-full">
        <div className="relative inline-flex  overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-1 focus:ring-zinc-400/20 focus:ring-offset-1 focus:ring-offset-zinc-50/20 w-min">
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#263193_0%,#D22A67_50%,#263193_100%)]" />
          <div className="flex flex-col items-center gap-5 border rounded-lg">
            <div className=" min-w-80 aspect-square rounded-lg relative overflow-hidden">
              <span
                className={cn(
                  [
                    'bg-zinc-950/90 hover:bg-zinc-950 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md transition-all duration-200 px-6 py-2 text-xs uppercase font-medium text-muted-foreground hover:text-zinc-50 backdrop-blur-3xl',
                  ],
                  className,
                )}
              >
                <Image
                  src={developerPhoto.src}
                  alt="Foto do desenvolvedor"
                  style={{ objectFit: 'cover' }}
                  className="mt-5"
                  fill
                />
              </span>
            </div>
          </div>
        </div>

        <article className="flex flex-col max-w-96 gap-5 mt-2">
          <TitleTypography
            size="text-4xl"
            fontWeight="font-bold"
            className="text-start"
          >
            Conheça um pouco mais sobre mim.
          </TitleTypography>

          <DescriptionTypography className="text-start">
            Contrary to popular belief, latin literature from 45 BC, making it
            over 2000 years old. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old.
            <br />
            <br />
            Latin literature from 45 BC, making it over 2000 years old. It has
            roots in a piece of classical Latin literature from 45 BC, making it
            over 2000 years old.
          </DescriptionTypography>

          <div className="border items-center justify-center mt-4 py-3 rounded flex gap-5">
            <SocialMediasContact variant="full" />
          </div>
        </article>
      </div>
    </section>
  )
}
