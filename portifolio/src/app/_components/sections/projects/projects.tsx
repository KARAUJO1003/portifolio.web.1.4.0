import { SectionContainer } from '../../global/sections/sections-container'
import { TitleTypography } from '../../global/typography/title'
import { CardProject } from '../../global/cards/card-project'
import { Projects } from '@/lib/utilities'

export const ProjectsSection = () => {
  return (
    <SectionContainer
      id="projects-section"
      className="flex flex-col items-center min-h-screen"
    >
      <TitleTypography size="text-4xl" className="mb-14">
        Projects
      </TitleTypography>
      <div className="grid grid-cols-2 gap-5 w-full">
        {Projects.map((project) => {
          const firstImage = project.images.find((_, index) => index === 0)
          const src = firstImage?.src || '' // Defina um valor padrão caso src seja undefined
          const alt = firstImage?.alt || ''
          return (
            <CardProject
              title={project.title}
              srcImage={src}
              altImage={alt}
              description={project.description}
              id={project.id}
              key={project.id}
            />
          )
        })}
      </div>
    </SectionContainer>
  )
}
