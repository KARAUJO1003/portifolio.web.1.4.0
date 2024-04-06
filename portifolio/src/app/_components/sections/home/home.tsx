import { cn } from '@/lib/utils'
import { ComponentPropsDefault } from '@/types/page-props-default'
import { Title } from '../../global/title'

export const HomeSection = ({ className }: ComponentPropsDefault) => {
  return (
    <section
      className={cn(
        ['flex flex-col w-full min-h-screen items-center justify-center'],
        className,
      )}
    >
      <Title fontWeight="font-black" className="text-center">
        developer fullstack
      </Title>
    </section>
  )
}
