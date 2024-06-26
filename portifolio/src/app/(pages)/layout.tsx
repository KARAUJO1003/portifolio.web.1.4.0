import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Analytics } from '@vercel/analytics/react'
import { Footer } from '../_components/global/footer'
import { cn } from '@/lib/utils'
import { Toaster } from 'sonner'
import { HeaderProjectPage } from './project/_components/header-details'
import { Ban, CheckCircle } from 'lucide-react'

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
      <body className={cn(['relative dark'], inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <HeaderProjectPage />
          <main>{children}</main>
          <Analytics />
          <Footer />

          <Toaster
            position="top-right"
            theme="dark"
            icons={{
              success: <CheckCircle className="size-5 text-principalPink" />,
              error: <Ban className="size-5 text-principalPink" />,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
