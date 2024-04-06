import { NavMenu } from './nav-menu/nav-menu'
import { ButtonBorderGradient } from './buttons/gradient-border-button'
import { ComponentPropsDefault } from '@/types/page-props-default'
import { cn } from '@/lib/utils'
import { Logo } from '@/assets/logo'
import Link from 'next/link'

export const Header = ({ className }: ComponentPropsDefault) => {
  return (
    <header className="w-full border-b sticky top-0 backdrop-blur-md z-50 flex items-center px-40">
      <div
        className={cn(
          [
            'flex items-center justify-between mx-auto py-4 gap-8 min-w-[896px] ',
          ],
          className,
        )}
      >
        <Logo className="size-7" />
        <NavMenu />
        <ButtonBorderGradient>
          <Link href={'/#contacts-section'}>trabalhe comigo</Link>
        </ButtonBorderGradient>
      </div>
    </header>
  )
}
