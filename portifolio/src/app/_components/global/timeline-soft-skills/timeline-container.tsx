import React from 'react'
import { TimelineCard } from './timeline-card'

export const TimelineContainer = () => {
  return (
    <article
      className="w-full p-20 max-sm:px-4 pattern-boxes pattern-blue-500 pattern-bg-white 
    pattern-size-6 pattern-opacity-20 max-[1240px]:flex max-[1240px]:flex-col max-[1240px]:justify-center max-[1240px]:items-center"
    >
      <div>
        <div className=" space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-pink-900 before:to-transparent before:max-lg:bg-transparent">
          <TimelineCard
            title="Desenvolvimento web avançado no piloto automático. Com Next.js"
            date="21/03/2023"
            description="Posso criar aplicativos web poderosos e dinâmicos com facilidade, oferecendo uma experiência de usuário incomparável."
          />
          <TimelineCard
            title="Tailwind CSS: Estilo sem esforço. "
            date="12/05/2023"
            description="Com Tailwind CSS, posso estilizar meus projetos de forma rápida e eficiente, garantindo uma aparência elegante e consistente em todos os dispositivos."
          />
          <TimelineCard
            title="Shadcn/UI/GSAP"
            date="31/07/2023"
            description="Detalhes que fazem a diferença. Com Shadcn, UI e GSAP, posso adicionar toques finais e animações deslumbrantes que elevam a experiência do usuário a novos patamares."
          />
        </div>
      </div>
    </article>
  )
}
