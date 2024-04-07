import { NavMenu } from './nav-menu/nav-menu'
import { ButtonBorderGradient } from './buttons/gradient-border-button'
import { ComponentPropsDefault } from '@/types/page-props-default'
import { cn } from '@/lib/utils'
import { Logo } from '@/assets/logo'
import Link from 'next/link'

export const Header = ({ className }: ComponentPropsDefault) => {
  return (
    <header className="w-full border-b sticky top-0 backdrop-blur-md z-50 flex items-center  ">
      <div
        className={cn(
          [
            'flex items-center justify-between mx-auto py-4  gap-8 min-w-[896px] max-[1240px]:px-20 max-[1240px]:mx-0 max-[1240px]:w-full max-lg:min-w-full max-sm:px-8',
          ],
          className,
        )}
      >
        <Logo className="size-5" />
        <NavMenu className="max-lg:hidden" />
        <ButtonBorderGradient>
          <Link href={'/#projects-section'}>projetos</Link>
        </ButtonBorderGradient>
      </div>
    </header>
  )
}
