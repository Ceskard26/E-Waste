'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Moon, Sun, Globe, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/ThemeProvider'
import { getTranslation, type Locale } from '@/lib/i18n'

export function Navigation() {
  const [locale, setLocale] = useState<Locale>('es')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  const t = (key: keyof typeof import('@/lib/i18n').translations.es) => getTranslation(locale, key)

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/app', label: t('demo') },
    { href: '/canvas', label: t('canvas') },
    { href: '/one-pager', label: t('onePager') },
    { href: '/roadmap', label: t('roadmap') },
    { href: '/equipo', label: t('team') },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">E</span>
          </div>
          <span className="font-bold text-xl">E-cycle</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
          >
            <Globe className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Link href="/app" className="hidden md:inline-flex">
            <Button>
              {t('tryDemo')}
            </Button>
          </Link>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t bg-background"
        >
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/app" onClick={() => setIsMenuOpen(false)} className="w-full mt-4">
              <Button className="w-full">
                {t('tryDemo')}
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}