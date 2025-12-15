'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { AlertTriangle, Clock, Recycle, RotateCcw } from 'lucide-react'
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
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Clasificación</span>
              <Badge variant="success">
                {Math.round(confidence * 100)}% {t('confidence')}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold">{category.label[locale]}</h3>
                <Progress value={confidence * 100} className="mt-2" />
              </div>
              {result.image && (
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <img 
                    src={result.image} 
                    alt="Uploaded" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Materials */}
      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="p-2 bg-primary/10 rounded-full mr-3">
                <div className="w-4 h-4 bg-primary rounded-full" />
              </div>
              {t('materials')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {category.materials[locale].map((material: string, index: number) => (
                <Badge key={index} variant="outline">
                  {material}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Degradation Time */}
      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-3 h-5 w-5 text-orange-500" />
              {t('degradationTime')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              {category.degradationYearsRange[0]} - {category.degradationYearsRange[1]} {t('years')}
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              * {t('disclaimer1')}
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Risk Level */}
      <motion.div
        custom={3}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="mr-3 h-5 w-5 text-yellow-500" />
              {t('riskLevel')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant={getRiskColor(category.risk) as any} className="text-lg px-4 py-2">
              {getRiskLabel(category.risk)}
            </Badge>
          </CardContent>
        </Card>
      </motion.div>

      {/* Reuse Ideas */}
      <motion.div
        custom={4}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <RotateCcw className="mr-3 h-5 w-5 text-green-500" />
              {t('reuseIdeas')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {category.reuseIdeas[locale].map((idea: string, index: number) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-sm">{idea}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Recycle Ideas */}
      <motion.div
        custom={5}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Recycle className="mr-3 h-5 w-5 text-blue-500" />
              {t('recycleIdeas')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {category.recycleIdeas[locale].map((idea: string, index: number) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-sm">{idea}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}