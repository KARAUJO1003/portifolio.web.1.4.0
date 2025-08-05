import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-zinc-950">
      <h1 className="text-4xl font-bold text-center">404</h1>
      <p className="text-lg text-center mt-4">Página não encontrada</p>
      <Link
        className={cn(['mt-8'], buttonVariants({ variant: 'default' }))}
        href="/"
      >
        Voltar ao inicio
      </Link>
    </div>
  )
}
