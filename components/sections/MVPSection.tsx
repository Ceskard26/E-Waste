'use client'

import { motion } from 'framer-motion'
import { Battery, Cable, HardDrive, Server } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'
import { getTranslation, type Locale } from '@/lib/i18n'

export function MVPSection() {
  const [locale] = useState<Locale>('es')
  const t = (key: keyof typeof import('@/lib/i18n').translations.es) => getTranslation(locale, key)

  const categories = [
    { icon: Battery, label: t('batteries') },
    { icon: Cable, label: t('cables') },
    { icon: HardDrive, label: t('hardDrives') },
    { icon: Server, label: t('serverParts') },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('mvpTitle')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Categorías soportadas en esta versión de demostración
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              className="perspective-1000"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-4 p-4 bg-primary/10 rounded-full">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.label}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            * Más categorías serán añadidas en futuras versiones
          </p>
        </motion.div>
      </div>
    </section>
  )
}