import { ButtonBorderGradient } from '@/app/_components/global/buttons/gradient-border-button'
import { DescriptionTypography } from '@/app/_components/global/typography/description'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="max-w-4xl min-h-screen mx-auto">
      <div className="w-full aspect-video border rounded-lg my-8 relative">
        <div className="absolute bottom-5 right-5 flex items-center gap-3">
          <button className="border rounded-md h-9 px-6 hover:bg-secondary/20 transition-all">
            Repositorio
          </button>
          <ButtonBorderGradient variant="secondary">
            Deploy
          </ButtonBorderGradient>
        </div>
      </div>

      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <h1>Contrary to popular belief</h1>
          <DescriptionTypography className="text-left">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </DescriptionTypography>
          <Accordion type="single">
            <AccordionItem value="req-fun">
              <AccordionTrigger>Requisitos Funcionais</AccordionTrigger>
              <AccordionContent>
                O usuário não pode editar registro O usuário não pode excluir
                registro
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="col-span-1"></div>
      </div>
    </main>
  )
}
