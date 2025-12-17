'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { getTranslation, type Locale } from '@/lib/i18n'

export function HeroSection() {
  const [locale] = useState<Locale>('es')
  const t = (key: keyof typeof import('@/lib/i18n').translations.es) => getTranslation(locale, key)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      
      {/* Animated background blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
      />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            <Badge variant="success">{t('circularEconomy')}</Badge>
            <Badge variant="outline">{t('educationalPrototype')}</Badge>
            <Badge variant="secondary">{t('enterpriseFocus')}</Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
              E-cycle
            </span>
            <br />
            <span className="text-foreground">
              Transforma residuos en
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              oportunidades
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            La primera plataforma de IA que identifica residuos electrónicos al instante y 
            te guía hacia un reciclaje inteligente y rentable.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <Link href="/app">
              <Button size="lg" className="text-lg px-12 py-6 bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 shadow-2xl hover:shadow-primary/25 transition-all duration-300">
                📱 Probar Gratis Ahora
              </Button>
            </Link>
            <Link href="/one-pager">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-primary/5">
                📄 Ver Casos de Éxito
              </Button>
            </Link>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-6 pt-8 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              ✓ Sin registro requerido
            </span>
            <span className="flex items-center gap-2">
              ✓ Resultados en 30 segundos
            </span>
            <span className="flex items-center gap-2">
              ✓ 100% gratuito
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}