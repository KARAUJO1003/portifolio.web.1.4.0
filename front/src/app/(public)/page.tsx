import {
  AboutSection,
  ContactsSection,
  HomeSection,
  ProjectsSection,
  SoftSkillsSection,
} from '@/app/_components/sections'

export default function Home() {
  return (
    <main className="max-w-4xl  mx-auto min-h-screen max-[1240px]:min-w-full max-[1240px]:mx-0 ">
      <HomeSection className="snap-center" />
      <AboutSection className="snap-center" />
      <SoftSkillsSection className="snap-center" />
      <ProjectsSection className="snap-center" />
      <ContactsSection className="snap-center" />
    </main>
  )
}
