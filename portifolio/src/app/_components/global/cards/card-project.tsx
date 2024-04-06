import React from 'react'
import Card from './card'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { DescriptionTypography } from '../typography/description'
import { Badge } from '@/components/ui/badge'

export const CardProject = () => {
  return (
    <Card.Container className="relative">
      <Card.Body className="bg-gradient-to-tl to-zinc-800 via-zinc-850 from-black">
        <Link href="/" className="absolute top-5 right-5 z-40">
          <ExternalLink className="size-4" />
        </Link>
      </Card.Body>
      <Card.Footer className="space-y-4">
        <strong>Label</strong>
        <DescriptionTypography className="text-left text-muted-foreground">
          Ut quibusdam ipsum amet provident enim id, corporis nemo accusamus,
          error dolore nisi!
        </DescriptionTypography>
        <div>
          <Badge variant={'outline'}>next.js</Badge>
          <Badge variant={'outline'}>node.js</Badge>
          <Badge variant={'outline'}>tailwind.css</Badge>
        </div>
      </Card.Footer>
    </Card.Container>
  )
}
