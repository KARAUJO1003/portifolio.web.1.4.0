import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Footer } from '../_components/global/footer'
import { cn } from '@/lib/utils'
import { NavMenu } from '../_components/global/nav-menu/nav-menu'
import { Toaster } from 'sonner'
import { HeaderProjectPage } from './pages/_components/header-details'

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
    <html lang="ptbr">
      <body className={cn(['relative'], inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <HeaderProjectPage />
          <main>{children}</main>
          <Footer />
          <div className="hidden fixed items-center justify-center w-full bottom-0 left-0 right-0 backdrop-blur-lg border-t  max-lg:block py-5">
            <NavMenu className="flex items-center justify-between w-full px-3 gap-0 max-w-[440px] mx-auto" />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
