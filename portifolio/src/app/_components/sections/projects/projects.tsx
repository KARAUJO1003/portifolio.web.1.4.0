import { SectionContainer } from '../../global/sections/sections-container'
import { TitleTypography } from '../../global/typography/title'
import { CardProject } from '../../global/cards/card-project'

export const ProjectsSection = () => {
  return (
    <SectionContainer
      id="projects-section"
      className="flex flex-col items-center min-h-screen"
    >
      <TitleTypography size="text-4xl" className="mb-14">
        Projects
      </TitleTypography>
      <div className="grid grid-cols-2 grid-rows-2 gap-5 w-full">
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
    </SectionContainer>
  )
}
