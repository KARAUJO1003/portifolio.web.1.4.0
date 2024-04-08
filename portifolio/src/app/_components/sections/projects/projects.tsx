import { SectionContainer } from '../../global/sections/sections-container'
import { TitleTypography } from '../../global/typography/title'
import { CardProject } from '../../global/cards/card-project'
import { Projects } from '@/lib/utilities'

export const ProjectsSection = () => {
  return (
    <SectionContainer
      id="projects-section"
      className="flex flex-col items-center justify-center min-h-[810px] mb-20 max-sm:mb-0"
    >
      <TitleTypography size="lg" className="mb-14">
        Projetos
      </TitleTypography>
      <div className="grid grid-cols-2 gap-5 w-full max-[1240px]:grid-cols-1 max-[1240px]:px-5 max-w-5xl">
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
              urlDetails={`/project/${project.id}`}
              id={project.id}
              key={project.id}
            />
          )
        })}
      </div>
    </SectionContainer>
  )
}
