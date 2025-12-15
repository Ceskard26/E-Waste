'use client'

import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'
import { useState } from 'react'
import { getTranslation, type Locale } from '@/lib/i18n'

export function ProblemSection() {
  const [locale] = useState<Locale>('es')
  const t = (key: keyof typeof import('@/lib/i18n').translations.es) => getTranslation(locale, key)

  const problems = [
    t('problemBullet1'),
    t('problemBullet2'),
    t('problemBullet3'),
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
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="h-8 w-8 text-destructive mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">{t('theProblem')}</h2>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 mb-8 p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center">
                <span className="text-destructive font-bold text-sm">{index + 1}</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">{problem}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}