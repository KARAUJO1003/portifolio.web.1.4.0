'use client'

import { SocialMediasContact } from '@/app/_components/shared/social-medias'
import { DescriptionTypography } from '@/app/_components/shared/typography/description'
import { TitleTypography } from '@/app/_components/shared/typography/title'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Projects } from '@/data'
import { CarrousselProjects } from '../_components/carroussel-projects'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id
  const project = Projects.find((project) => project.id === id)

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-zinc-950">
        <h1 className="text-4xl font-bold text-center">404</h1>
        <p className="text-lg text-center mt-4">Página não encontrada</p>
        <Link
          className={cn(['mt-8'], buttonVariants({ variant: 'secondary' }))}
          href="/"
        >
          Voltar ao inicio
        </Link>
      </div>
    )
  }

  return (
    <main className="max-w-4xl min-h-screen mx-auto pb-20 max-lg:w-full max-lg:px-8">
      <CarrousselProjects id={id} />

      <div className="grid grid-cols-5 gap-14 max-lg:grid-cols-1">
        <div className="col-span-4 space-y-4">
          <TitleTypography className="text-2xl">
            {project.title}
          </TitleTypography>
          <DescriptionTypography className="text-left mb-8">
            {project.description}
          </DescriptionTypography>

          <Accordion type="single">
            {project.requiriments.businessRule && (
              <AccordionItem value="reg">
                <AccordionTrigger>Regras de Negócio</AccordionTrigger>
                <AccordionContent>
                  {project.requiriments.businessRule.length === 0 && (
                    <div className="text-center">
                      <span className="text-muted-foreground text-xs">
                        Ainda não há registros...
                      </span>
                    </div>
                  )}

                  <ul className="space-y-3 ml-4 text-xs pr-4">
                    {project.requiriments.businessRule.map((item, index) => {
                      return (
                        <li key={index} className="flex flex-col gap-2">
                          <strong>{item.title}</strong>
                          <span className="text-muted-foreground">
                            {item.description}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}

            {project.requiriments.functionaisRequiriments && (
              <AccordionItem value="req-fun">
                <AccordionTrigger>Requisitos Funcionais</AccordionTrigger>
                <AccordionContent>
                  {project.requiriments.functionaisRequiriments.length ===
                    0 && (
                    <div className="text-center">
                      <span className="text-muted-foreground text-xs">
                        Ainda não há registros...
                      </span>
                    </div>
                  )}
                  <ul className="space-y-3 ml-4 text-xs pr-4">
                    {project.requiriments.functionaisRequiriments.map(
                      (item, index) => {
                        return (
                          <li key={index} className="flex flex-col gap-2">
                            <strong>{item.title}</strong>
                            <span className="text-muted-foreground">
                              {item.description}
                            </span>
                          </li>
                        )
                      },
                    )}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}

            {project.requiriments.noFunctionalRequiriments && (
              <AccordionItem value="req-no-fun">
                <AccordionTrigger>Requisitos Não Funcionais</AccordionTrigger>
                <AccordionContent>
                  {project.requiriments.noFunctionalRequiriments.length ===
                    0 && (
                    <div className="text-center">
                      <span className="text-muted-foreground text-xs">
                        Ainda não há registros...
                      </span>
                    </div>
                  )}

                  <ul className="space-y-3 ml-4 text-xs pr-4">
                    {project.requiriments.noFunctionalRequiriments.map(
                      (item, index) => {
                        return (
                          <li key={index} className="flex flex-col gap-2">
                            <strong>{item.title}</strong>
                            <span className="text-muted-foreground">
                              {item.description}
                            </span>
                          </li>
                        )
                      },
                    )}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>

        <div className="col-span-1">
          <div className="flex flex-col gap-8">
            <div>
              <strong>Tecnologias</strong>
              <div className="flex flex-wrap gap-2 mt-4">
                <ul className="space-y-3 ml-4 text-xs pr-4">
                  {project.tags.map((item, index) => {
                    return (
                      <Badge
                        key={index}
                        variant={'outline'}
                        className="text-nowrap text-muted-foreground"
                      >
                        {item.label}
                      </Badge>
                    )
                  })}
                </ul>
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
      </div>
    </main>
  )
}
