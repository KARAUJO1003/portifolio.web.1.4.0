import { SocialMedias } from '@/data'
import { cn } from '@/lib/utils'
import { ComponentPropsDefault } from '@/types/component-props'
import Link from 'next/link'

type SocialMediasContactProps = {
  variant?: 'icon' | 'label' | 'full'
  border?: boolean
}

export const SocialMediasContact = ({
  variant = 'full',
  border,
  className,
}: ComponentPropsDefault<SocialMediasContactProps>) => {
  return (
    <div className={cn(['flex gap-7 transition-all duration-200'], className)}>
      {SocialMedias.map((item, index) => (
        <Link
          target="_blank"
          key={index}
          href={item.url}
          className="uppercase text-xs text-muted-foreground transition-all duration-300 hover:text-foreground flex gap-2 items-center"
        >
          {variant === 'label' && <span className="text-xs">{item.label}</span>}

          {variant === 'icon' && (
            <span
              className={`${border ? 'p-2 border border-muted-foreground/50 hover:bg-muted-foreground/10 transition-all duration-300 rounded-md' : ''}`}
            >
              {item.icon}
            </span>
          )}

          {variant === 'full' && (
            <>
              <span>{item.icon}</span>
              <span className="text-xs">{item.label}</span>
            </>
          )}
        </Link>
      ))}
    </div>
  )
}
