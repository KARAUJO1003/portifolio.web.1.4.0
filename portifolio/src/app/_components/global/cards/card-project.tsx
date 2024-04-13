'use client'
import React, { ComponentProps } from 'react'
import Card from './card'
import Link from 'next/link'
import { ExternalLink, LinkIcon } from 'lucide-react'
import { DescriptionTypography } from '../typography/description'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ButtonBorderGradient } from '../buttons/gradient-border-button'

type CardProjectProps<T = unknown> = {
  id: string
  title: string
  description: string
  srcImage: string
  altImage: string
  urlDetails: string
} & T

export const CardProject = ({
  id,
  srcImage,
  altImage,
  title,
  description,
  urlDetails,
  className,
  children,
  ...props
}: CardProjectProps<ComponentProps<'div'>>) => {
  return (
    <>
      <Card.Container
        key={id}
        className={cn(
          [
            'relative hover:border-muted-foreground/40 hover:border-2 hover:shadow-xl overflow-hidden',
          ],
          className,
        )}
        {...props}
      >
        <Link href={urlDetails}>
          <Card.Body className="bg-gradient-to-tl to-zinc-800 via-zinc-850 from-black relative overflow-hidden">
            <ExternalLink className="size-5 absolute top-4 right-4 z-40 p-1 rounded-md backdrop-blur-md" />
            <Image
              style={{ objectFit: 'cover' }}
              fill
              src={srcImage}
              alt={altImage}
              sizes="(max-width: 1024px) 100vw"
              priority
              className="hover:scale-110 transition-all duration-500"
            />
          </Card.Body>
        </Link>

        <Card.Footer>
          <div className="space-y-2">
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Link href={urlDetails} className="flex items-center gap-3">
                    <LinkIcon className="size-3" />
                    <strong className="capitalize">{title}</strong>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  align="center"
                  className="backdrop-blur-md bg-transparent border text-muted-foreground"
                >
                  <p>Clique para visualizar detalhes do projeto</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DescriptionTypography className="text-left text-muted-foreground line-clamp-2 ">
              {description}
            </DescriptionTypography>
          </div>
          <div className="flex items-center justify-between gap-2 py-2 max-sm:flex-col max-sm:items-start">
            <div className="flex items-center gap-2 py-2 w-2/5 overflow-ellipsis">
              {children}
            </div>
            <Link href={urlDetails} className="flex items-center gap-3">
              <ButtonBorderGradient variant="secondary">
                ver projeto
              </ButtonBorderGradient>
            </Link>
          </div>
        </Card.Footer>
      </Card.Container>
    </>
  )
}
