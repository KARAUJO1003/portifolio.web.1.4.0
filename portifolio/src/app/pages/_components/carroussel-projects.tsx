import { ButtonBorderGradient } from '@/app/_components/global/buttons/gradient-border-button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Projects } from '@/lib/utilities'
import Image from 'next/image'
import React from 'react'

type CarrousselProjectsProps = {
  id: string
}

export const CarrousselProjects = ({ id }: CarrousselProjectsProps) => {
  const project = Projects.find((project) => project.id === id)

  return (
    <Carousel>
      <CarouselContent className=" border rounded-lg overflow-hidden mt-4 mb-8 mx-0">
        {project?.images.map((img) => (
          <CarouselItem
            key={img.src}
            className="w-full relative aspect-video flex items-center justify-center"
          >
            <Image
              src={img.src}
              alt={img.alt}
              style={{ objectFit: 'cover' }}
              fill
              sizes="(max-width: 1024px) 100vw"
              priority
            />

            <div className="absolute bottom-5 right-5 flex items-center gap-3 z-40">
              <button className="border bg-zinc-950/90 backdrop-blur-lg rounded-md h-9 px-6 hover:bg-bg-zinc-900 text-xs uppercase text-muted-foreground hover:text-primary transition-all">
                Repositorio
              </button>
              <ButtonBorderGradient>Deploy</ButtonBorderGradient>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-8 max-sm:left-4" variant="secondary" />
      <CarouselNext className="right-8 max-sm:right-4" variant="secondary" />
    </Carousel>
  )
}
