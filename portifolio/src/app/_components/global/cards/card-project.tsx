import React from 'react'
import Card from './card'
import Link from 'next/link'
import { ExternalLink, LinkIcon } from 'lucide-react'
import { DescriptionTypography } from '../typography/description'
import { Badge } from '@/components/ui/badge'
import { ComponentPropsDefault } from '@/types/page-props-default'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ButtonBorderGradient } from '../buttons/gradient-border-button'

type CardProjectProps = {
  id: string
  title: string
  description: string
  srcImage: string
  altImage: string
  urlDetails: string
}

export const CardProject = ({
  id,
  srcImage,
  altImage,
  title,
  description,
  urlDetails,
  className,
}: ComponentPropsDefault<CardProjectProps>) => {
  return (
    <>
      <Card.Container
        key={id}
        className={cn(
          [
            'relative hover:border-muted-foreground/40 hover:shadow-xl overflow-hidden',
          ],
          className,
        )}
      >
        <Card.Body className="bg-gradient-to-tl to-zinc-800 via-zinc-850 from-black relative overflow-hidden">
          <Link
            href={urlDetails}
            className="absolute top-4 right-4 z-40 p-1 rounded-md backdrop-blur-md"
          >
            <ExternalLink className="size-3" />
          </Link>
          <Image
            style={{ objectFit: 'cover' }}
            fill
            src={srcImage}
            alt={altImage}
            className="hover:scale-110 transition-all duration-500"
          />
        </Card.Body>

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
          <div className="flex items-center justify-between gap-2 py-2">
            <div className="flex items-center gap-2 py-2">
              <Badge variant={'outline'} className="text-muted-foreground">
                next.js
              </Badge>
              <Badge variant={'outline'} className="text-muted-foreground">
                node.js
              </Badge>
              <Badge variant={'outline'} className="text-muted-foreground">
                tailwind.css
              </Badge>
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
