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

export default function Page({ params }: { params: { id: string } }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const id = params.id
  return (
    <main className="max-w-4xl min-h-screen mx-auto pb-20">
      <div className="w-full aspect-video border rounded-lg my-8 relative">
        <div className="absolute bottom-5 right-5 flex items-center gap-3">
          <button className="border rounded-md h-9 px-6 hover:bg-secondary/20 text-xs uppercase text-muted-foreground hover:text-primary transition-all">
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
            Contrary to popular belief
          </TitleTypography>
          <DescriptionTypography className="text-left mb-8">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
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
              <AccordionTrigger>Requisitos Funcionais</AccordionTrigger>
              <AccordionContent>
                O usuário não pode editar registro O usuário não pode excluir
                registro
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="reg">
              <AccordionTrigger>Requisitos Funcionais</AccordionTrigger>
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
