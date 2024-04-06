import { NavMenu } from './nav-menu/nav-menu'
import { ButtonBorderGradient } from './buttons/gradient-border-button'
import { ComponentPropsDefault } from '@/types/page-props-default'
import { cn } from '@/lib/utils'
import { Logo } from '@/assets/logo'

export const Header = ({ className }: ComponentPropsDefault) => {
  return (
    <header className="w-full border-b sticky top-0 backdrop-blur-md">
      <div
        className={cn(
          [
            'grid grid-cols-4 items-center justify-between max-w-4xl mx-auto py-4   ',
          ],
          className,
        )}
      >
        <Logo className="size-7" />
        <NavMenu className="col-span-2" />
        <ButtonBorderGradient>trabalhe comigo</ButtonBorderGradient>
      </div>
    </header>
  )
}
