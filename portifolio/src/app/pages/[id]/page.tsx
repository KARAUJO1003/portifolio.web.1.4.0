'use client'

import { ButtonBorderGradient } from '@/app/_components/global/buttons/gradient-border-button'
import { SocialMediasContact } from '@/app/_components/global/social-medias'
import { DescriptionTypography } from '@/app/_components/global/typography/description'
import { TitleTypography } from '@/app/_components/global/typography/title'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Projects } from '@/lib/utilities'
import Image from 'next/image'

export default function Page({ params }: { params: { id: string } }) {
  console.log(Projects.length)
  const id = params.id
  const project = Projects.find((project) => project.id === id)

  if (!project) {
    return <div>Projeto não encontrado</div>
  }
  const firstImage = project.images.find((_, index) => index === 1)
  const src = firstImage?.src || '' // Defina um valor padrão caso src seja undefined
  const alt = firstImage?.alt || ''
  return (
    <main className="max-w-4xl min-h-screen mx-auto pb-20">
      <div className="w-full aspect-video border rounded-lg my-8 relative overflow-hidden">
        <Image
          src={src}
          alt={alt}
          style={{ objectFit: 'cover' }}
          fill
          quality={100}
          className="shadow-inner shadow-red-800"
        />
        <div className="absolute bottom-5 right-5 flex items-center gap-3 z-40">
          <button className="border bg-zinc-950/90 backdrop-blur-lg rounded-md h-9 px-6 hover:bg-bg-zinc-900 text-xs uppercase text-muted-foreground hover:text-primary transition-all">
            Repositorio
          </button>
          <ButtonBorderGradient variant="secondary">
            Deploy
          </ButtonBorderGradient>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-14">
        <div className="col-span-4 space-y-4">
          <TitleTypography className="text-2xl">
            {project.title}
          </TitleTypography>
          <DescriptionTypography className="text-left mb-8">
            {project.description}
          </DescriptionTypography>

          <Accordion type="multiple">
            <AccordionItem value="req-fun">
              <AccordionTrigger>Requisitos Funcionais</AccordionTrigger>
              <AccordionContent>
                O usuário não pode editar registro O usuário não pode excluir
                registro
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="req-no-fun">
              <AccordionTrigger>Requisitos Não Funcionais</AccordionTrigger>
              <AccordionContent>
                O usuário não pode editar registro O usuário não pode excluir
                registro
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="reg">
              <AccordionTrigger>Regras de Negócio</AccordionTrigger>
              <AccordionContent>
                O usuário não pode editar registro O usuário não pode excluir
                registro
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="col-span-1 flex flex-col gap-8">
          <div>
            <strong>Tecnologias</strong>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge
                variant={'outline'}
                className="text-nowrap text-muted-foreground"
              >
                next.js
              </Badge>
              <Badge
                variant={'outline'}
                className="text-nowrap text-muted-foreground"
              >
                react.js
              </Badge>
              <Badge
                variant={'outline'}
                className="text-nowrap text-muted-foreground"
              >
                tailwind css
              </Badge>
              <Badge
                variant={'outline'}
                className="text-nowrap text-muted-foreground"
              >
                node.js
              </Badge>
              <Badge
                variant={'outline'}
                className="text-nowrap text-muted-foreground"
              >
                java
              </Badge>
              <Badge
                variant={'outline'}
                className="text-nowrap text-muted-foreground"
              >
                c#
              </Badge>
            </div>
          </div>
          <div>
            <strong>Links extras</strong>
            <SocialMediasContact
              variant="full"
              className="flex flex-col gap-3 mt-4"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
