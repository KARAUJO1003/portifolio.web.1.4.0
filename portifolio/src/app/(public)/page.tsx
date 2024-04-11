import { AboutSection } from '../_components/sections/about/about'
import { ContactsSection } from '../_components/sections/contacts/contacts'
import { HomeSection } from '../_components/sections/home/home'
import { ProjectsSection } from '../_components/sections/projects/projects'
import { SoftSkillsSection } from '../_components/sections/soft-skills/soft-skills'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen max-[1240px]:min-w-full max-[1240px]:mx-0 scroll-smooth">
      <HomeSection />
      <AboutSection />
      <SoftSkillsSection />
      <ProjectsSection />
      <ContactsSection />
    </div>
  )
}
