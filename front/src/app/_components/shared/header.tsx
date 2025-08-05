import { ComponentPropsDefault } from '@/types/component-props'
import { cn } from '@/lib/utils'
import { Logo } from '@/assets/logo'

export const Header = ({ className, children }: ComponentPropsDefault) => {
  return (
    <header className="w-full  sticky top-0 backdrop-blur-md z-50 flex items-center  ">
      <div
        className={cn(
          [
            'flex items-center justify-between mx-auto py-4  gap-8 min-w-[896px] max-[1240px]:px-20 max-[1240px]:mx-0 max-[1240px]:w-full max-lg:min-w-full max-sm:px-8',
          ],
          className,
        )}
      >
        <Logo className="size-5" />
        {children}
      </div>
    </header>
  )
}
