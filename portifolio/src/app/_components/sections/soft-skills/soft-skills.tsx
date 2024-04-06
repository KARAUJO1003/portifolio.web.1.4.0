import { SectionContainer } from '../../global/sections/sections-container'
import { TimelineContainer } from '../../global/timeline-soft-skills/timeline-container'
import { TitleTypography } from '../../global/typography/title'

export const SoftSkillsSection = () => {
  return (
    <SectionContainer
      id="soft-skills-section"
      className="flex flex-col items-center pt-24"
    >
      <TitleTypography size="text-4xl">Soft Skills</TitleTypography>
      <TimelineContainer />
    </SectionContainer>
  )
}
