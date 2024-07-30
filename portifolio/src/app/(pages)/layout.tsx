import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { Footer } from '../_components/shared/footer'
import { cn } from '@/lib/utils'
import { HeaderProjectPage } from './project/_components/header-details'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Portifolio web',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className={cn(['relative dark'], inter.className)}>
      <HeaderProjectPage />
      {children}

      <Footer />
    </main>
  )
}
