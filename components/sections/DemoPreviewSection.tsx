'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Camera, Scan, BookOpen, ArrowRight } from 'lucide-react'

export function DemoPreviewSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prueba E-cycle Ahora</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experimenta cómo la tecnología puede transformar la gestión de residuos electrónicos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-green-500/5 border-primary/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Camera className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">1. Captura</h3>
                      <p className="text-sm text-muted-foreground">Toma una foto del residuo electrónico</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-500/10 rounded-full">
                      <Scan className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">2. Analiza</h3>
                      <p className="text-sm text-muted-foreground">IA identifica materiales y componentes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-500/10 rounded-full">
                      <BookOpen className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">3. Actúa</h3>
                      <p className="text-sm text-muted-foreground">Recibe guía para reciclar o reutilizar</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para hacer la diferencia?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Únete a la revolución del reciclaje inteligente. Cada dispositivo clasificado correctamente 
              es un paso hacia un futuro más sostenible.
            </p>
            
            <div className="space-y-4">
              <Link href="/app">
                <Button size="lg" className="w-full lg:w-auto">
                  <Camera className="mr-2 h-5 w-5" />
                  Probar Demo Interactivo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-muted-foreground">
                <span>✓ Sin registro</span>
                <span>✓ Gratis</span>
                <span>✓ Resultados instantáneos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}