'use client'

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
import { CarrousselProjects } from '../_components/carroussel-projects'

export default function Page({ params }: { params: { id: string } }) {
  console.log(Projects.length)
  const id = params.id
  const project = Projects.find((project) => project.id === id)

  if (!project) {
    return <div>Projeto não encontrado</div>
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

          <Accordion type="multiple">
            <AccordionItem value="req-fun">
              <AccordionTrigger>Requisitos Funcionais</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 ml-4 text-xs pr-4">
                  <li className="flex flex-col gap-2">
                    <strong>Tecnologias de ponta:</strong>
                    <span className="text-muted-foreground">
                      Utilizando as mais recentes tecnologias e bibliotecas,
                      este projeto explora o potencial do Next.js 14,
                      incorporando server actions e route handlers para uma
                      experiência de backend eficiente e dinâmica.
                    </span>
                  </li>
                  <li className="flex flex-col gap-2">
                    <strong>Interface Cativante:</strong>{' '}
                    <span className="text-muted-foreground">
                      Com uma estética dark mode aprimorada por tons de azul
                      vibrante, a interface é tanto funcional quanto
                      esteticamente agradável, proporcionando uma experiência de
                      usuário imersiva.
                    </span>
                  </li>
                </ul>
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
                <ul className="space-y-3 ml-4 text-xs pr-4">
                  <li className="flex flex-col gap-2">
                    <strong>Gestão Financeira Simplificada:</strong>
                    <span className="text-muted-foreground">
                      Projetado para simplificar a gestão de finanças pessoais,
                      o aplicativo oferece recursos abrangentes, desde o
                      acompanhamento de despesas até a geração de relatórios
                      visuais detalhados.
                    </span>
                  </li>
                  <li className="flex flex-col gap-2">
                    <strong>Validação de Dados Robusta:</strong>
                    <span className="text-muted-foreground">
                      Incorporando o poderoso Zod para validação de dados, o
                      aplicativo garante a integridade dos dados em cada
                      interação do usuário, mantendo a segurança e a precisão
                      dos registros financeiros.
                    </span>
                  </li>
                  <li className="flex flex-col gap-2">
                    <strong>Integração de Dados Eficiente:</strong>
                    <span className="text-muted-foreground">
                      A integração perfeita com MongoDB e Prisma como ORM,
                      juntamente com o uso eficaz de Axios, garante uma
                      manipulação eficiente e segura dos dados, proporcionando
                      uma experiência fluida e sem interrupções.
                    </span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="col-span-1">
          <div className="flex flex-col gap-8">
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
      </div>
    </main>
  )
}
