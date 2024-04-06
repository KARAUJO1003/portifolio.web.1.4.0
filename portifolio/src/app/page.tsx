import { AboutSection } from './_components/sections/about/about'
import { HomeSection } from './_components/sections/home/home'

export default function Home() {
  return (
    <h1 className="max-w-4xl mx-auto min-h-screen text-principalPink">
      <HomeSection />
      <AboutSection />
    </h1>
  )
}
