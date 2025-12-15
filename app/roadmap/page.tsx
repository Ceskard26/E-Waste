'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, CheckCircle, Clock, Target } from 'lucide-react'

export default function RoadmapPage() {
  const roadmapItems = [
    {
      phase: '0–1 mes',
      status: 'current',
      title: 'Validación y Demo Mock',
      goals: [
        'Demo simulada con 4 categorías de e-waste',
        'Contenido educativo sobre materiales y reciclaje',
        'Validación del problema (entrevistas + encuestas)',
        'Landing page con formularios de feedback',
        'Primeras pruebas en UNI y empresas locales'
      ],
      deliverables: [
        'Aplicación web funcional',
        'Canvas y One Pager',
        'Evidencia de validación del problema',
        'Base de usuarios iniciales'
      ]
    },
    {
      phase: '1–3 meses',
      status: 'planned',
      title: 'Modelo Real y Expansión',
      goals: [
        'Desarrollo de modelo de ML real para clasificación',
        'Ampliación a 10+ categorías de e-waste',
        'Guía específica por ubicación geográfica',
        'Dashboard básico para empresas',
        'Integración con APIs de centros de reciclaje'
      ],
      deliverables: [
        'Modelo de clasificación entrenado',
        'API de clasificación',
        'Dashboard empresarial',
        'Base de datos de centros de reciclaje'
      ]
    },
    {
      phase: '3–6 meses',
      status: 'future',
      title: 'Alianzas y Escalabilidad',
      goals: [
        'Alianzas con empresas de TI y municipios',
        'Métricas ambientales (CO₂, materiales recuperados)',
        'Sistema de trazabilidad de residuos',
        'Programa de certificación ESG',
        'Expansión a otros países de LATAM'
      ],
      deliverables: [
        'Plataforma B2B completa',
        'Sistema de métricas ambientales',
        'Certificaciones y reportes ESG',
        'Red de socios estratégicos'
      ]
    },
    {
      phase: '6+ meses',
      status: 'vision',
      title: 'Impacto y Sostenibilidad',
      goals: [
        'Modelo de negocio SaaS consolidado',
        'IA avanzada para predicción de residuos',
        'Marketplace de componentes reutilizables',
        'Programa de educación ambiental',
        'Impacto medible en economía circular'
      ],
      deliverables: [
        'Plataforma autosostenible',
        'Impacto ambiental documentado',
        'Comunidad global de usuarios',
        'Reconocimiento en sostenibilidad'
      ]
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'current': return <Clock className="h-5 w-5 text-blue-500" />
      case 'planned': return <Target className="h-5 w-5 text-orange-500" />
      case 'future': return <Calendar className="h-5 w-5 text-purple-500" />
      case 'vision': return <CheckCircle className="h-5 w-5 text-green-500" />
      default: return <Calendar className="h-5 w-5" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current': return 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800'
      case 'planned': return 'bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800'
      case 'future': return 'bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800'
      case 'vision': return 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800'
      default: return 'bg-gray-50 dark:bg-gray-950/20 border-gray-200 dark:border-gray-800'
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'current': return <Badge className="bg-blue-500">En progreso</Badge>
      case 'planned': return <Badge variant="secondary">Planificado</Badge>
      case 'future': return <Badge variant="outline">Futuro</Badge>
      case 'vision': return <Badge className="bg-green-500">Visión</Badge>
      default: return <Badge variant="outline">Pendiente</Badge>
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Calendar className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Roadmap</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plan de desarrollo y crecimiento para E-waste
          </p>
        </motion.div>

        <div className="space-y-8">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <Card className={`${getStatusColor(item.status)} hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(item.status)}
                      <div>
                        <CardTitle className="text-2xl">{item.phase}</CardTitle>
                        <p className="text-lg text-muted-foreground mt-1">{item.title}</p>
                      </div>
                    </div>
                    {getStatusBadge(item.status)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Objetivos</h4>
                    <ul className="space-y-2">
                      {item.goals.map((goal, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Entregables</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.deliverables.map((deliverable, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {deliverable}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline connector */}
              {index < roadmapItems.length - 1 && (
                <div className="absolute left-8 -bottom-4 w-0.5 h-8 bg-primary/30" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Impacto Esperado</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-sm text-muted-foreground">Empresas usando la plataforma</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <p className="text-sm text-muted-foreground">Toneladas de e-waste clasificadas</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">30%</div>
                  <p className="text-sm text-muted-foreground">Mejora en tasa de reciclaje</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}