'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Users, MessageSquare, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'
import { getTranslation, type Locale } from '@/lib/i18n'

export function ValidationSection() {
  const [locale] = useState<Locale>('es')
  const t = (key: keyof typeof import('@/lib/i18n').translations.es) => getTranslation(locale, key)

  const validationData = [
    {
      icon: Users,
      label: 'Entrevistas',
      value: '10',
    },
    {
      icon: MessageSquare,
      label: 'Respuestas de encuesta',
      value: '30',
    },
    {
      icon: TrendingUp,
      label: 'Tasa de validación',
      value: '85%',
    },
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
            <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">{t('validationTitle')}</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('validationNote')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {validationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary mb-2">
                    {item.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Hallazgo clave</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t('keyFinding')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}