import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Header } from './_components/global/header'
import { Footer } from './_components/global/footer'
import { cn } from '@/lib/utils'
import { NavMenu } from './_components/global/nav-menu/nav-menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kaesyo Felix',
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
          <Header />
          <main>{children}</main>
          <Footer />
          <div className="hidden fixed items-center justify-center w-full bottom-0 left-0 right-0 backdrop-blur-lg border-t  max-lg:block py-5">
            <NavMenu className="flex items-center justify-between w-full px-3 gap-0 max-w-[440px] mx-auto" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
