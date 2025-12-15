'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function CanvasPage() {
  const canvasData = {
    problem: {
      es: 'Mala disposición de e-waste por falta de información simple y accionable, especialmente en empresas con gran volumen.',
      en: 'Incorrect e-waste disposal due to lack of simple, actionable guidance—especially in high-volume companies.'
    },
    segments: {
      es: ['Empresas (TI/Operaciones)', 'Personas comunes (hogares)'],
      en: ['Companies (IT/Ops)', 'Individuals (households)']
    },
    uniqueValue: {
      es: 'Una guía inmediata con una foto: qué es, qué contiene, degradación estimada y qué hacer (reutilizar/reciclar).',
      en: 'Instant guidance from a photo: what it is, what it contains, estimated degradation, and what to do next (reuse/recycle).'
    },
    solution: {
      es: ['Demo de reconocimiento (mock)', 'Contenido educativo', 'Flujo simple en 3 pasos'],
      en: ['Mock recognition demo', 'Educational content', '3-step simple flow']
    },
    channels: {
      es: ['UNI', 'LinkedIn', 'Alianzas con empresas', 'Municipios (futuro)'],
      en: ['UNI', 'LinkedIn', 'Company partnerships', 'Municipalities (future)']
    },
    metrics: {
      es: ['# usuarios registrados', '# feedbacks recibidos', '# demos completadas'],
      en: ['# signups', '# feedback entries', '# demos completed']
    },
    advantage: {
      es: 'Enfoque educativo + escalable a empresas/municipios + medición de impacto.',
      en: 'Educational-first + scalable to companies/municipalities + impact measurement.'
    },
    costs: {
      es: ['Hosting', 'Desarrollo', 'Dataset/etiquetado (futuro)'],
      en: ['Hosting', 'Development', 'Dataset/labeling (future)']
    },
    revenue: {
      es: ['B2B SaaS (futuro)', 'Reportes/consultoría (futuro)', 'Programas ESG (futuro)'],
      en: ['B2B SaaS (future)', 'Reporting/consulting (future)', 'ESG programs (future)']
    }
  }

  const canvasItems = [
    { title: 'Problema', content: canvasData.problem.es, color: 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800' },
    { title: 'Segmentos de clientes', content: canvasData.segments.es, color: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800' },
    { title: 'Propuesta de valor única', content: canvasData.uniqueValue.es, color: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800' },
    { title: 'Solución', content: canvasData.solution.es, color: 'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800' },
    { title: 'Canales', content: canvasData.channels.es, color: 'bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800' },
    { title: 'Métricas clave', content: canvasData.metrics.es, color: 'bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800' },
    { title: 'Ventaja competitiva', content: canvasData.advantage.es, color: 'bg-pink-50 dark:bg-pink-950/20 border-pink-200 dark:border-pink-800' },
    { title: 'Estructura de costos', content: canvasData.costs.es, color: 'bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800' },
    { title: 'Fuentes de ingresos', content: canvasData.revenue.es, color: 'bg-teal-50 dark:bg-teal-950/20 border-teal-200 dark:border-teal-800' },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lean Canvas</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modelo de negocio para E-waste - Prototipo educativo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {canvasItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full ${item.color}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {Array.isArray(item.content) ? (
                    <ul className="space-y-2">
                      {item.content.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-current rounded-full mt-2 mr-3 flex-shrink-0 opacity-60" />
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm leading-relaxed">{item.content}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}