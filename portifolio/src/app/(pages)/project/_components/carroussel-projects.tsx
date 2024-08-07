import { ButtonBorderGradient } from '@/app/_components/shared/buttons/gradient-border-button'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Projects } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CarrousselProjectsProps = {
  id: string
}

export const CarrousselProjects = ({ id }: CarrousselProjectsProps) => {
  const project = Projects.find((project) => project.id === id)
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  )

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api, current])

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        onMouseOut={plugin.current.play}
        opts={{ loop: true }}
        setApi={setApi}
      >
        <CarouselContent className="  rounded-lg gap-2 mt-4 mb-8 mx-0">
          {project?.images.map((img) => {
            return (
              <CarouselItem
                key={img.src.toString()}
                className="w-full relative border rounded-lg overflow-hidden aspect-video flex items-center justify-center"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  style={{ objectFit: 'cover' }}
                  fill
                  sizes="(max-width: 1024px) 100vw"
                  priority
                  quality={100}
                />

                <div className="absolute bottom-5 right-5 flex items-center gap-3 z-40">
                  {project.urlDeploy && (
                    <Link target="_blank" href={project.urlRepository ?? ''}>
                      <button
                        disabled={!project.urlRepository}
                        className="border disabled:cursor-no-drop disabled:text-muted-foreground bg-zinc-950/90 backdrop-blur-lg rounded-md h-9 px-6 hover:bg-bg-zinc-900 text-xs uppercase text-muted-foreground hover:text-primary transition-all"
                      >
                        Repositorio
                      </button>
                    </Link>
                  )}
                  {project.urlDeploy && (
                    <Link target="_blank" href={project.urlDeploy ?? ''}>
                      <ButtonBorderGradient
                        disabled={!project.urlDeploy}
                        className="disabled:!cursor-no-drop"
                      >
                        Deploy
                      </ButtonBorderGradient>
                    </Link>
                  )}
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious
          className="left-8 max-sm:left-4"
          variant="secondary"
        />
        <CarouselNext className="right-8 max-sm:right-4" variant="secondary" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        {current} de {count}
      </div>
    </>
  )
}
