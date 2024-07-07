'use client'
import { SectionContainer } from '../../global/sections/sections-container'
import { TitleTypography } from '../../global/typography/title'
import { CardProject } from '../../global/cards/card-project'
import { Projects } from '@/lib/utilities'
import { Badge } from '@/components/ui/badge'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export const ProjectsSection = () => {
  gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline()

  useGSAP(() => {
    tl.from('.card-project', {
      scale: 0.9,
      scrollTrigger: {
        trigger: '.card-project',
        start: 'top 500',
        end: 'bottom bottom',
        scrub: 0.2,
      },
    })
  }, {})

  return (
    <SectionContainer
      id="projects-section"
      className="flex flex-col items-center justify-center min-h-[810px] mb-20 max-sm:mb-0"
    >
      <TitleTypography size="lg" className="mb-14">
        Projetos
      </TitleTypography>
      <div className="grid grid-cols-2 p-2 gap-5 w-full max-[1240px]:grid-cols-1 max-[1240px]:px-5 max-w-5xl">
        {Projects.map((project) => {
          const firstImage = project.images.find((_, index) => index === 0)
          const src = firstImage?.src || '' // Defina um valor padrão caso src seja undefined
          const alt = firstImage?.alt || ''

          const first3tags = project.tags.slice(0, 2)

          return (
            <CardProject
              className="card-project "
              title={project.title}
              srcImage={src}
              altImage={alt}
              description={project.description}
              urlDetails={`/project/${project.id}`}
              id={project.id}
              key={project.id}
            >
              {first3tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant={'outline'}
                  className="text-muted-foreground text-nowrap"
                >
                  {tag.label}
                </Badge>
              ))}
            </CardProject>
          )
        })}
      </div>
    </SectionContainer>
  )
}
