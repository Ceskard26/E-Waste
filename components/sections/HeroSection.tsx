'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useState, useRef, useEffect } from 'react'
import { getTranslation, type Locale } from '@/lib/i18n'

export function HeroSection() {
  const [locale] = useState<Locale>('es')
  const t = (key: keyof typeof import('@/lib/i18n').translations.es) => getTranslation(locale, key)
  
  // Ref para el scroll trigger del subtítulo
  const subtitleRef = useRef(null)
  const isSubtitleInView = useInView(subtitleRef, { 
    once: false, 
    amount: 0.1
  })

  // Debug: ver si el trigger funciona
  useEffect(() => {
    console.log('Subtitle in view:', isSubtitleInView)
  }, [isSubtitleInView])

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

          {/* Logo y Título */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-center justify-center mb-12"
          >
            {/* Logo sin letras - SÚPER GRANDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, duration: 1, type: "spring", bounce: 0.4 }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]"
            >
              <img
                src="/logo_sin_letras-removebg.png"
                alt="E-cycle Logo"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
            
            {/* Título E-cycle - SÚPER CERCA del logo EN BLANCO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold -mt-8 md:-mt-12 lg:-mt-16 xl:-mt-20"
            >
              <span className="text-white drop-shadow-lg">
                E-cycle
              </span>
            </motion.div>
          </motion.div>

          {/* Subtítulo - Aparece con scroll trigger */}
          <motion.div 
            ref={subtitleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isSubtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
          >
            <span className="text-foreground block">
              Transforma residuos en
            </span>
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent block">
              oportunidades
            </span>
          </motion.div>

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