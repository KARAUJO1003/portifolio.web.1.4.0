'use client'
import { cn } from '@/lib/utils'
import { ComponentPropsDefault } from '@/types/page-props-default'
import { TitleTypography } from '@/app/_components/global/typography/title'
import { DescriptionTypography } from '../../global/typography/description'
import { SocialMediasContact } from '../../global/social-medias'
import developerPhoto from '../../../../../public/developer-photo.png'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export const AboutSection = ({ className }: ComponentPropsDefault) => {
  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline()

  useGSAP(() => {
    tl.from('.boxTexts', {
      opacity: 0,
      scrollTrigger: {
        trigger: '#principle-title',
        start: 'top bottom',
        end: 'bottom 900',
        scrub: 1,
      },
    }).from('.imagem', {
      opacity: 0,
      zIndey: 1,
      scrollTrigger: {
        trigger: '.imagem',
        start: 'bottom 900',
        end: 'bottom 600',
        scrub: 1,
      },
    })
  })

  return (
    <section
      id="about"
      className={cn(
        'flex flex-col w-full min-h-[810px] items-center justify-center gap-10 pt-20',
        className,
      )}
    >
      <div className="space-y-5 flex items-center  justify-between gap-5 w-full max-[1240px]:flex-col max-[1240px]:items-center">
        <TitleTypography
          id="title"
          size="lg"
          fontWeight="font-bold"
          className=" text-center max-[1240px]:block  max-[1240px]:max-w-[360px] min-[1240px]:hidden"
        >
          Conheça um pouco mais sobre mim.
        </TitleTypography>

        <div className="imagem ">
          <div className=" relative inline-flex  overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-1 focus:ring-zinc-400/20 focus:ring-offset-1 focus:ring-offset-zinc-50/20 w-min">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#263193_0%,#D22A67_50%,#263193_100%)]" />
            <div className="flex flex-col items-center gap-5 border rounded-xl">
              <div className=" min-w-80 aspect-square rounded-xl  overflow-hidden">
                <span
                  className={cn(
                    [
                      'bg-zinc-950 hover:bg-zinc-950/90 inline-flex h-full w-full relative items-center justify-center rounded-xl transition-all duration-200 px-6 py-2 text-xs uppercase font-medium text-muted-foreground hover:text-zinc-50 backdrop-blur-3xl',
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
                    sizes="(max-width: 1024px) 100vw"
                    priority
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="border items-center justify-center mt-4 py-3 rounded flex gap-5">
            <SocialMediasContact variant="full" />
          </div>
        </div>

        <article
          id="boxTexts"
          className="flex flex-col max-w-lg gap-5 mt-2 max-[1240px]:max-w-80 boxTexts"
        >
          <TitleTypography
            size="lg"
            fontWeight="font-bold"
            className="text-start max-[1240px]:hidden"
          >
            Conheça um pouco mais sobre mim.
          </TitleTypography>

          <DescriptionTypography className="text-start ">
            Olá, sou <strong>Kaésyo</strong>, estudante de{' '}
            <strong>Engenharia de Software</strong> Com uma mente inquisitiva e
            um amor pelo desafio, estou em busca de oportunidades, que me
            permitam expandir meu horizonte de habilidades e colaborar em
            projetos inovadores. <br />
            <br />
            Possuo conhecimentos com as principais ferramentas do
            desenvolvimento WEB como{' '}
            <strong>
              HTML, CSS, JavaScript, React, Next, Node, ShadcnUi, Tailwind,
              MongoDb, Postgresql, Axios
            </strong>
            , entre outras... <br />
            <br />
            Se você se interessou e pretende conhecer mais sobre meu trabaho, me
            acompanhe nas redes sociais e vamos evoluir juntos! será um grande
            prazer trocar experiências com você nessa jornada de aprendizado.
          </DescriptionTypography>
        </article>
      </div>
    </section>
  )
}
