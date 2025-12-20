import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-cycle | Reconoce residuos electrónicos',
  description: 'Identifica el tipo de e-waste, sus materiales, cuánto tarda en degradarse y cómo reciclar o reutilizarlo',
  manifest: '/manifest.json',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  themeColor: '#22c55e',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'E-cycle'
  },
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