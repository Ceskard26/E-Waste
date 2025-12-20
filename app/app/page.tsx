'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, Image as ImageIcon, Loader2, Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ResultCards } from '@/components/demo/ResultCards'
import { CameraCapture } from '@/components/demo/CameraCapture'
import { getTranslation, type Locale } from '@/lib/i18n'

const mockCategories = {
  batteries: {
    key: 'batteries',
    label: { es: 'Pilas / baterías', en: 'Batteries' },
    materials: {
      es: [
        { name: 'Acero', years: 50, link: 'https://es.wikipedia.org/wiki/Reciclaje_del_acero' },
        { name: 'Aluminio', years: 80, link: 'https://es.wikipedia.org/wiki/Reciclaje_del_aluminio' },
        { name: 'Electrolitos ácidos', years: 500, link: 'https://www.who.int/news-room/fact-sheets/detail/lead-poisoning-and-health' },
        { name: 'Litio', years: 300, link: 'https://www.epa.gov/recycle/used-lithium-ion-batteries' }
      ],
      en: [
        { name: 'Steel', years: 50, link: 'https://en.wikipedia.org/wiki/Steel_recycling' },
        { name: 'Aluminum', years: 80, link: 'https://en.wikipedia.org/wiki/Aluminium_recycling' },
        { name: 'Acid electrolytes', years: 500, link: 'https://www.who.int/news-room/fact-sheets/detail/lead-poisoning-and-health' },
        { name: 'Lithium', years: 300, link: 'https://www.epa.gov/recycle/used-lithium-ion-batteries' }
      ]
    },
    risk: 'high',
    reuseIdeas: {
      es: [
        { text: 'Recolección segura para reciclaje especializado', link: 'https://www.greenpeace.org/mexico/blog/4803/como-reciclar-pilas-y-baterias/' },
        { text: 'Programas de retorno del fabricante', link: 'https://www.duracell.com/es-mx/recicla-tus-pilas' }
      ],
      en: [
        { text: 'Safe collection for specialized recycling', link: 'https://www.call2recycle.org/' },
        { text: 'Manufacturer take-back programs', link: 'https://www.epa.gov/recycle/used-lithium-ion-batteries' }
      ]
    },
    recycleIdeas: {
      es: [
        { text: 'Puntos de acopio especializados', link: 'https://www.greenpeace.org/mexico/blog/4803/como-reciclar-pilas-y-baterias/' },
        { text: 'Separación por tipo (alcalinas, litio, níquel)', link: 'https://es.wikipedia.org/wiki/Reciclaje_de_bater%C3%ADas' }
      ],
      en: [
        { text: 'Authorized collection points', link: 'https://www.call2recycle.org/locator/' },
        { text: 'Separate by type (alkaline, lithium, nickel)', link: 'https://www.epa.gov/recycle/used-lithium-ion-batteries' }
      ]
    }
  },
  cables: {
    key: 'cables',
    label: { es: 'Cables', en: 'Cables' },
    materials: {
      es: [
        { name: 'Cobre', years: 100, link: 'https://es.wikipedia.org/wiki/Reciclaje_del_cobre' },
        { name: 'Aluminio', years: 80, link: 'https://es.wikipedia.org/wiki/Reciclaje_del_aluminio' },
        { name: 'PVC (recubrimiento)', years: 450, link: 'https://es.wikipedia.org/wiki/Policloruro_de_vinilo' },
        { name: 'Caucho', years: 80, link: 'https://es.wikipedia.org/wiki/Reciclaje_de_neum%C3%A1ticos' }
      ],
      en: [
        { name: 'Copper', years: 100, link: 'https://en.wikipedia.org/wiki/Copper_recycling' },
        { name: 'Aluminum', years: 80, link: 'https://en.wikipedia.org/wiki/Aluminium_recycling' },
        { name: 'PVC (coating)', years: 450, link: 'https://en.wikipedia.org/wiki/Polyvinyl_chloride' },
        { name: 'Rubber', years: 80, link: 'https://en.wikipedia.org/wiki/Tire_recycling' }
      ]
    },
    risk: 'medium',
    reuseIdeas: {
      es: [
        { text: 'Reutilización como cables de repuesto', link: 'https://www.ifixit.com/Guide/How+to+Repair+a+Cable/1073' },
        { text: 'Organización y gestión de cables', link: 'https://www.wikihow.com/Organize-Cables' }
      ],
      en: [
        { text: 'Reuse as spare cables', link: 'https://www.ifixit.com/Guide/How+to+Repair+a+Cable/1073' },
        { text: 'Cable management and organization', link: 'https://www.wikihow.com/Organize-Cables' }
      ]
    },
    recycleIdeas: {
      es: [
        { text: 'Separar metal del recubrimiento plástico', link: 'https://www.ecoembes.com/es/ciudadanos/envases-y-proceso-reciclaje' },
        { text: 'Centros de reciclaje de metales', link: 'https://es.wikipedia.org/wiki/Reciclaje_de_metales' }
      ],
      en: [
        { text: 'Separate metal from plastic coating', link: 'https://www.epa.gov/recycle/recycling-basics' },
        { text: 'Metal recycling centers', link: 'https://en.wikipedia.org/wiki/Metal_recycling' }
      ]
    }
  },
  hard_drives: {
    key: 'hard_drives',
    label: { es: 'Discos duros', en: 'Hard drives' },
    materials: {
      es: [
        { name: 'Aluminio (carcasa)', years: 200, link: 'https://es.wikipedia.org/wiki/Reciclaje_del_aluminio' },
        { name: 'Acero', years: 50, link: 'https://es.wikipedia.org/wiki/Reciclaje_del_acero' },
        { name: 'Placas electrónicas (PCB)', years: 1000, link: 'https://es.wikipedia.org/wiki/Chatarra_electr%C3%B3nica' },
        { name: 'Imanes de neodimio', years: 500, link: 'https://es.wikipedia.org/wiki/Neodimio' },
        { name: 'Plásticos ABS', years: 450, link: 'https://es.wikipedia.org/wiki/Acrilonitrilo_butadieno_estireno' }
      ],
      en: [
        { name: 'Aluminum (casing)', years: 200, link: 'https://en.wikipedia.org/wiki/Aluminium_recycling' },
        { name: 'Steel', years: 50, link: 'https://en.wikipedia.org/wiki/Steel_recycling' },
        { name: 'PCBs (circuit boards)', years: 1000, link: 'https://en.wikipedia.org/wiki/Electronic_waste' },
        { name: 'Neodymium magnets', years: 500, link: 'https://en.wikipedia.org/wiki/Neodymium' },
        { name: 'ABS plastics', years: 450, link: 'https://en.wikipedia.org/wiki/Acrylonitrile_butadiene_styrene' }
      ]
    },
    risk: 'medium',
    reuseIdeas: {
      es: [
        { text: 'Reutilización como almacenamiento externo', link: 'https://www.wikihow.com/Convert-an-Internal-Hard-Drive-to-External' },
        { text: 'Donación para proyectos educativos', link: 'https://www.wikihow.com/Donate-Computer-Equipment' }
      ],
      en: [
        { text: 'Convert to external storage', link: 'https://www.wikihow.com/Convert-an-Internal-Hard-Drive-to-External' },
        { text: 'Donate for educational projects', link: 'https://www.wikihow.com/Donate-Computer-Equipment' }
      ]
    },
    recycleIdeas: {
      es: [
        { text: 'Borrado seguro de datos antes del reciclaje', link: 'https://www.nist.gov/itl/csd/software/media-sanitization' },
        { text: 'Centros especializados E-cycle', link: 'https://es.wikipedia.org/wiki/Chatarra_electr%C3%B3nica' }
      ],
      en: [
        { text: 'Secure data wiping before recycling', link: 'https://www.nist.gov/itl/csd/software/media-sanitization' },
        { text: 'Specialized E-cycle centers', link: 'https://www.epa.gov/recycle/electronics-donation-and-recycling' }
      ]
    }
  },
  server_parts: {
    key: 'server_parts',
    label: { es: 'Partes de servidores', en: 'Server parts' },
    materials: {
      es: [
        { name: 'Acero (chasis)', years: 50, link: 'https://es.wikipedia.org/wiki/Reciclaje_del_acero' },
        { name: 'Aluminio (disipadores)', years: 200, link: 'https://es.wikipedia.org/wiki/Reciclaje_del_aluminio' },
        { name: 'Cobre (cables internos)', years: 100, link: 'https://es.wikipedia.org/wiki/Reciclaje_del_cobre' },
        { name: 'PCBs con metales preciosos', years: 1000, link: 'https://es.wikipedia.org/wiki/Chatarra_electr%C3%B3nica' },
        { name: 'Plásticos diversos', years: 450, link: 'https://es.wikipedia.org/wiki/Reciclaje_de_pl%C3%A1sticos' }
      ],
      en: [
        { name: 'Steel (chassis)', years: 50, link: 'https://en.wikipedia.org/wiki/Steel_recycling' },
        { name: 'Aluminum (heat sinks)', years: 200, link: 'https://en.wikipedia.org/wiki/Aluminium_recycling' },
        { name: 'Copper (internal cables)', years: 100, link: 'https://en.wikipedia.org/wiki/Copper_recycling' },
        { name: 'PCBs with precious metals', years: 1000, link: 'https://en.wikipedia.org/wiki/Electronic_waste' },
        { name: 'Various plastics', years: 450, link: 'https://en.wikipedia.org/wiki/Plastic_recycling' }
      ]
    },
    risk: 'medium',
    reuseIdeas: {
      es: [
        { text: 'Reutilización en laboratorios educativos', link: 'https://www.wikihow.com/Donate-Computer-Equipment' },
        { text: 'Donación a instituciones técnicas', link: 'https://www.techsoup.org/' }
      ],
      en: [
        { text: 'Reuse in educational labs', link: 'https://www.wikihow.com/Donate-Computer-Equipment' },
        { text: 'Donate to technical institutions', link: 'https://www.techsoup.org/' }
      ]
    },
    recycleIdeas: {
      es: [
        { text: 'Separación por componentes (PSU, motherboards, chasis)', link: 'https://es.wikipedia.org/wiki/Chatarra_electr%C3%B3nica' },
        { text: 'Gestores autorizados de RAEE empresarial', link: 'https://www.epa.gov/recycle/electronics-donation-and-recycling' }
      ],
      en: [
        { text: 'Component separation (PSU, motherboards, chassis)', link: 'https://www.epa.gov/recycle/electronics-donation-and-recycling' },
        { text: 'Authorized enterprise WEEE managers', link: 'https://www.epa.gov/recycle/electronics-donation-and-recycling' }
      ]
    }
  }
}

export default function DemoPage() {
  const [locale] = useState<Locale>('es')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [showCamera, setShowCamera] = useState(false)

  const t = (key: keyof typeof import('@/lib/i18n').translations.es) => getTranslation(locale, key)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setResult(null)
    }
  }

  const handleCameraCapture = (file: File) => {
    setSelectedFile(file)
    setResult(null)
    setSelectedCategory('')
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
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/50 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/20">
      <div className="container max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">♻</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100">
              Análisis E-cycle
            </h1>
          </div>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Identifica componentes electrónicos y descubre cómo reciclarlos de manera responsable
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="outline" className="text-xs bg-white/50 dark:bg-gray-800/50">
              🌱 Eco-friendly
            </Badge>
            <Badge variant="outline" className="text-xs bg-white/50 dark:bg-gray-800/50">
              📱 Móvil-first
            </Badge>
            <Badge variant="outline" className="text-xs bg-white/50 dark:bg-gray-800/50">
              {t('disclaimer2')}
            </Badge>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg font-medium text-gray-800 dark:text-gray-100">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
                    <Upload className="h-4 w-4 text-white" />
                  </div>
                  Subir imagen
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {/* Camera Button */}
                <Button 
                  onClick={() => setShowCamera(true)}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-md"
                  size="lg"
                >
                  <Camera className="mr-2 h-5 w-5" />
                  Escanear con cámara
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200 dark:border-gray-700" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white dark:bg-gray-900 px-3 text-gray-500 dark:text-gray-400">o</span>
                  </div>
                </div>

                <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center hover:border-green-400 dark:hover:border-green-500 transition-colors bg-gray-50/50 dark:bg-gray-800/50">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <ImageIcon className="mx-auto h-10 w-10 text-gray-400 mb-3" />
                    <p className="font-medium text-gray-700 dark:text-gray-300">Seleccionar archivo</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">PNG, JPG hasta 10MB</p>
                  </label>
                </div>

                {selectedFile && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-800"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-800 dark:text-green-200">Archivo listo</p>
                        <p className="text-xs text-green-600 dark:text-green-300">{selectedFile.name}</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="space-y-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">O prueba con un ejemplo:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(mockCategories).map(([key, category]) => (
                      <Button
                        key={key}
                        variant={selectedCategory === key ? "default" : "outline"}
                        size="sm"
                        onClick={() => selectExampleCategory(key)}
                        className="text-xs h-9 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        {category.label[locale]}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={simulateAnalysis}
                  disabled={(!selectedFile && !selectedCategory) || isAnalyzing}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md"
                  size="lg"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analizando...
                    </>
                  ) : (
                    <>
                      <span className="mr-2">🔍</span>
                      Analizar componente
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {result ? (
              <ResultCards result={result} locale={locale} />
            ) : (
              <Card className="h-full flex items-center justify-center shadow-lg border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="text-center py-12 md:py-16">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                    Esperando análisis
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Los resultados aparecerán aquí una vez que subas una imagen o selecciones un ejemplo
                  </p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>

      {/* Camera Modal */}
      <AnimatePresence>
        {showCamera && (
          <CameraCapture 
            onCapture={handleCameraCapture}
            onClose={() => setShowCamera(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}