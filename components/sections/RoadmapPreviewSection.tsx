'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'
import { getTranslation, type Locale } from '@/lib/i18n'

export function RoadmapPreviewSection() {
  const [locale] = useState<Locale>('es')

  const roadmapItems = [
    {
      phase: '0–1 mes',
      description: locale === 'es' 
        ? 'Mock demo + contenido educativo + primeras validaciones en UNI/empresas.'
        : 'Mock demo + educational content + first validations in UNI/companies.',
    },
    {
      phase: '1–3 meses',
      description: locale === 'es'
        ? 'Modelo real con más clases + guía por ubicación + dashboard básico.'
        : 'Real model with more classes + location-based guidance + basic dashboard.',
    },
    {
      phase: '3–6 meses',
      description: locale === 'es'
        ? 'Alianzas con empresas/municipios + métricas ambientales + trazabilidad.'
        : 'Partnerships with companies/municipalities + environmental metrics + traceability.',
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
            <Calendar className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">Roadmap</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestro plan de desarrollo para los próximos meses
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-8 last:mb-0"
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{item.phase}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline connector */}
              {index < roadmapItems.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-8 bg-primary/30" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/roadmap">
            <Button size="lg" className="inline-flex items-center">
              Ver roadmap completo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}