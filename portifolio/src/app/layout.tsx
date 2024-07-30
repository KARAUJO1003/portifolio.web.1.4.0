import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Analytics } from '@vercel/analytics/react'
import { cn } from '@/lib/utils'
import { Toaster } from 'sonner'
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
    <html lang="ptbr" className="scroll-smooth">
      <body className={cn(['relative dark '], inter.className)}>
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

          {children}

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
