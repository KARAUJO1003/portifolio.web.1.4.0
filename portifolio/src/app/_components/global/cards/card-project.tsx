import React from 'react'
import Card from './card'
import Link from 'next/link'
import { ExternalLink, LinkIcon } from 'lucide-react'
import { DescriptionTypography } from '../typography/description'
import { Badge } from '@/components/ui/badge'
import { ComponentPropsDefault } from '@/types/page-props-default'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type CardProjectProps = {
  id: string
  title: string
  description: string
  srcImage: string
  altImage: string
}

export const CardProject = ({
  id,
  srcImage,
  altImage,
  title,
  description,
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
            href="/"
            className="absolute top-4 right-4 z-40 p-1 rounded-md backdrop-blur-md border"
          >
            <ExternalLink className="size-3" />
          </Link>
          <Image objectFit="cover" fill src={srcImage} alt={altImage} />
        </Card.Body>

        <Card.Footer className="space-y-2">
          <Link href={'/'} className="flex items-center gap-3">
            <LinkIcon className="size-3" />
            <strong>{title}</strong>
          </Link>

          <DescriptionTypography className="text-left text-muted-foreground line-clamp-2">
            {description}
          </DescriptionTypography>
          <div className="flex items-center gap-2 py-2">
            <Badge variant={'outline'}>next.js</Badge>
            <Badge variant={'outline'}>node.js</Badge>
            <Badge variant={'outline'}>tailwind.css</Badge>
          </div>
        </Card.Footer>
      </Card.Container>
    </>
  )
}
