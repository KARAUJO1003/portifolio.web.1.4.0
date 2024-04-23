import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Analytics } from '@vercel/analytics/react'
import { Header } from '../_components/global/header'
import { Footer } from '../_components/global/footer'
import { cn } from '@/lib/utils'
import { NavMenu } from '../_components/global/nav-menu/nav-menu'
import { Toaster } from 'sonner'
import Link from 'next/link'
import { ButtonBorderGradient } from '../_components/global/buttons/gradient-border-button'
import { Ban, CheckCircle } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kaesyo Felix - Portifolio 1.4.0',
  description: 'Portifolio web',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ptbr">
      <body className={cn(['relative dark'], inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster
            position="top-right"
            theme="dark"
            icons={{
              success: <CheckCircle className="size-5 text-principalPink" />,
              error: <Ban className="size-5 text-principalPink" />,
            }}
          />
          <Header>
            <NavMenu className="max-lg:hidden" />
            <Link href={'/#projects-section'}>
              <ButtonBorderGradient>projetos</ButtonBorderGradient>
            </Link>
          </Header>
          <main>{children}</main>
          <Analytics />
          <Footer />
          <div className="hidden fixed items-center justify-center w-full bottom-0 left-0 right-0 backdrop-blur-lg border-t  max-lg:block py-5">
            <NavMenu className="flex items-center justify-between w-full px-3 gap-0 max-w-[440px] mx-auto" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
