'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Recycle, Lightbulb } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { getTranslation, type Locale } from '@/lib/i18n'

export function ImpactSection() {
  const [locale] = useState<Locale>('es')
  const t = (key: keyof typeof import('@/lib/i18n').translations.es) => getTranslation(locale, key)

  const metrics = [
    {
      icon: TrendingUp,
      label: t('correctlySorted'),
      value: '↑',
    },
    {
      icon: Recycle,
      label: t('recoverableValue'),
      value: '↑',
    },
    {
      icon: Lightbulb,
      label: t('environmentalAwareness'),
      value: '↑',
    },
  ]

  const sdgs = [
    {
      code: 'ODS 12',
      name: t('responsibleConsumption'),
    },
    {
      code: 'ODS 13',
      name: t('climateAction'),
    },
  ]

  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('impactTitle')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-green-500/10 rounded-full w-fit">
                    <metric.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-4xl font-bold text-green-600 mb-2">
                    {metric.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Objetivos de Desarrollo Sostenible</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sdgs.map((sdg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge variant="success" className="text-sm px-4 py-2">
                  <span className="font-bold mr-2">{sdg.code}</span>
                  {sdg.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}