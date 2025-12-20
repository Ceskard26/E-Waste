'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { AlertTriangle, Recycle, RotateCcw, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getTranslation, type Locale } from '@/lib/i18n'

interface ResultCardsProps {
  result: {
    category: any
    confidence: number
    image?: string | null
  }
  locale: Locale
}

export function ResultCards({ result, locale }: ResultCardsProps) {
  const t = (key: keyof typeof import('@/lib/i18n').translations.es) => getTranslation(locale, key)

  const { category, confidence } = result

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'destructive'
      case 'medium': return 'secondary'
      case 'low': return 'success'
      default: return 'secondary'
    }
  }

  const getRiskLabel = (risk: string) => {
    switch (risk) {
      case 'high': return t('high')
      case 'medium': return t('medium')
      case 'low': return t('low')
      default: return t('medium')
    }
  }

  const handleLinkClick = (url: string) => {
    try {
      // Crear un elemento <a> temporal para abrir el link
      const link = document.createElement('a')
      link.href = url
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error opening link:', error)
      // Fallback: copiar URL al clipboard
      navigator.clipboard?.writeText(url).then(() => {
        alert('Link copiado al portapapeles: ' + url)
      }).catch(() => {
        alert('Visita: ' + url)
      })
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  }

  return (
    <div className="space-y-4">
      {/* Classification Result */}
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between text-lg">
              <span className="text-gray-800 dark:text-gray-100">Resultado del análisis</span>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200 dark:border-green-800">
                {Math.round(confidence * 100)}% confianza
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {category.label[locale]}
                </h3>
                <Progress value={confidence * 100} className="h-2" />
              </div>
              {result.image && (
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={result.image}
                    alt="Imagen analizada"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Materials with Individual Degradation Times */}
      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm">⏱</span>
              </div>
              <span className="text-gray-800 dark:text-gray-100">Materiales y degradación</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {category.materials[locale].map((material: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50/80 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-sm bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600">
                        {material.name}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-blue-100 dark:hover:bg-blue-900"
                        onClick={() => handleLinkClick(material.link)}
                        title="Más información"
                      >
                        <ExternalLink className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                      {material.years} años
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 bg-gray-50/50 dark:bg-gray-800/30 p-2 rounded">
              ⚠️ Los tiempos son aproximados y pueden variar según condiciones ambientales
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Risk Level */}
      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <AlertTriangle className="mr-3 h-5 w-5 text-yellow-500" />
              <span className="text-gray-800 dark:text-gray-100">Nivel de riesgo</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge
              variant={getRiskColor(category.risk) as any}
              className="text-base px-4 py-2 font-medium"
            >
              {getRiskLabel(category.risk)}
            </Badge>
          </CardContent>
        </Card>
      </motion.div>

      {/* Reuse Ideas with Links */}
      <motion.div
        custom={3}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                <RotateCcw className="h-4 w-4 text-white" />
              </div>
              <span className="text-gray-800 dark:text-gray-100">Ideas de reutilización</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {category.reuseIdeas[locale].map((idea: any, index: number) => (
                <div key={index} className="flex items-start justify-between p-3 bg-green-50/80 dark:bg-green-950/30 rounded-lg border border-green-100 dark:border-green-800">
                  <div className="flex items-start flex-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{idea.text}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 ml-2 hover:bg-green-100 dark:hover:bg-green-900"
                    onClick={() => handleLinkClick(idea.link)}
                    title="Ver guía"
                  >
                    <ExternalLink className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Recycle Ideas with Links */}
      <motion.div
        custom={4}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                <Recycle className="h-4 w-4 text-white" />
              </div>
              <span className="text-gray-800 dark:text-gray-100">Opciones de reciclaje</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {category.recycleIdeas[locale].map((idea: any, index: number) => (
                <div key={index} className="flex items-start justify-between p-3 bg-blue-50/80 dark:bg-blue-950/30 rounded-lg border border-blue-100 dark:border-blue-800">
                  <div className="flex items-start flex-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{idea.text}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 ml-2 hover:bg-blue-100 dark:hover:bg-blue-900"
                    onClick={() => handleLinkClick(idea.link)}
                    title="Más información"
                  >
                    <ExternalLink className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}