import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-cycle | Reconoce residuos electrónicos',
  description: 'Identifica el tipo de e-waste, sus materiales, cuánto tarda en degradarse y cómo reciclar o reutilizarlo',
  openGraph: {
    title: 'E-cycle | Reconoce residuos electrónicos',
    description: 'Identifica el tipo de e-waste, sus materiales, cuánto tarda en degradarse y cómo reciclar o reutilizarlo',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}