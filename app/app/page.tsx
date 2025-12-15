'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, Image as ImageIcon, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ResultCards } from '@/components/demo/ResultCards'
import { getTranslation, type Locale } from '@/lib/i18n'

const mockCategories = {
  batteries: {
    key: 'batteries',
    label: { es: 'Pilas / baterías', en: 'Batteries' },
    materials: {
      es: ['Metales (acero/aluminio)', 'Electrolitos', 'Componentes químicos'],
      en: ['Metals (steel/aluminum)', 'Electrolytes', 'Chemical components']
    },
    degradationYearsRange: [100, 1000],
    risk: 'high',
    reuseIdeas: {
      es: ['Recolección segura para reciclaje', 'Programas de retorno del fabricante (si aplica)'],
      en: ['Safe collection for recycling', 'Manufacturer take-back programs (if available)']
    },
    recycleIdeas: {
      es: ['Llévalas a puntos de acopio autorizados', 'Separación por tipo si existe (alcalinas, litio, etc.)'],
      en: ['Take to authorized collection points', 'Separate by type when possible (alkaline, lithium, etc.)']
    }
  },
  cables: {
    key: 'cables',
    label: { es: 'Cables', en: 'Cables' },
    materials: { es: ['Cobre/aluminio', 'Plásticos (PVC u otros)'], en: ['Copper/aluminum', 'Plastics (PVC or others)'] },
    degradationYearsRange: [50, 200],
    risk: 'medium',
    reuseIdeas: { es: ['Reutilízalos como repuesto', 'Organización y recableado en casa/oficina'], en: ['Reuse as spare', 'Cable management and re-wiring'] },
    recycleIdeas: { es: ['Separar metal vs recubrimiento si el reciclador lo solicita', 'Entregar a reciclaje de metales/e-waste'], en: ['Separate metal vs coating if requested', 'Deliver to metals/e-waste recycling'] }
  },
  hard_drives: {
    key: 'hard_drives',
    label: { es: 'Discos duros', en: 'Hard drives' },
    materials: { es: ['Aluminio/acero', 'Placas electrónicas', 'Imanes', 'Plásticos'], en: ['Aluminum/steel', 'PCBs', 'Magnets', 'Plastics'] },
    degradationYearsRange: [100, 500],
    risk: 'medium',
    reuseIdeas: { es: ['Reuso como almacenamiento secundario (si funciona)', 'Carcasa externa (enclosure)'], en: ['Reuse as secondary storage (if working)', 'External enclosure'] },
    recycleIdeas: { es: ['Borrado seguro de datos (mencionar como recomendación general)', 'Reciclaje e-waste por componentes'], en: ['Secure data wiping (general recommendation)', 'Component-based e-waste recycling'] }
  },
  server_parts: {
    key: 'server_parts',
    label: { es: 'Partes de servidores', en: 'Server parts' },
    materials: { es: ['Metales', 'Plásticos', 'PCBs', 'Componentes electrónicos'], en: ['Metals', 'Plastics', 'PCBs', 'Electronic components'] },
    degradationYearsRange: [100, 1000],
    risk: 'medium',
    reuseIdeas: { es: ['Reutilización en labs/educación', 'Donación si es funcional'], en: ['Reuse for labs/education', 'Donate if functional'] },
    recycleIdeas: { es: ['Separación por partes (fuentes, boards, chasis)', 'Gestor autorizado de RAEE'], en: ['Separate by parts (PSU, boards, chassis)', 'Authorized WEEE manager'] }
  }
}

export default function DemoPage() {
  const [locale] = useState<Locale>('es')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const t = (key: keyof typeof import('@/lib/i18n').translations.es) => getTranslation(locale, key)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setResult(null)
    }
  }

  const simulateAnalysis = () => {
    if (!selectedFile && !selectedCategory) return

    setIsAnalyzing(true)
    
    // Simulate API call delay
    setTimeout(() => {
      const categoryKey = selectedCategory || Object.keys(mockCategories)[Math.floor(Math.random() * Object.keys(mockCategories).length)]
      const category = mockCategories[categoryKey as keyof typeof mockCategories]
      const confidence = Math.random() * (0.96 - 0.78) + 0.78

      setResult({
        category,
        confidence,
        image: selectedFile ? URL.createObjectURL(selectedFile) : null
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  const selectExampleCategory = (categoryKey: string) => {
    setSelectedCategory(categoryKey)
    setSelectedFile(null)
    setResult(null)
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Demo E-waste</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sube una foto o selecciona un ejemplo para ver cómo funciona la clasificación
          </p>
          <div className="mt-6 space-y-2">
            <Badge variant="outline" className="mr-2">{t('disclaimer1')}</Badge>
            <Badge variant="outline">{t('disclaimer2')}</Badge>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="mr-2 h-5 w-5" />
                  {t('uploadPhoto')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-lg font-medium">Haz clic para subir una imagen</p>
                    <p className="text-sm text-muted-foreground">PNG, JPG hasta 10MB</p>
                  </label>
                </div>

                {selectedFile && (
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Archivo seleccionado:</p>
                    <p className="font-medium">{selectedFile.name}</p>
                  </div>
                )}

                <div className="space-y-4">
                  <p className="text-center text-muted-foreground">O selecciona un ejemplo:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(mockCategories).map(([key, category]) => (
                      <Button
                        key={key}
                        variant={selectedCategory === key ? "default" : "outline"}
                        size="sm"
                        onClick={() => selectExampleCategory(key)}
                        className="text-xs"
                      >
                        {category.label[locale]}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={simulateAnalysis}
                  disabled={(!selectedFile && !selectedCategory) || isAnalyzing}
                  className="w-full"
                  size="lg"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t('analyzing')}
                    </>
                  ) : (
                    'Analizar'
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {result ? (
              <ResultCards result={result} locale={locale} />
            ) : (
              <Card className="h-full flex items-center justify-center">
                <CardContent className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <p className="text-lg text-muted-foreground">
                    Los resultados aparecerán aquí después del análisis
                  </p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}