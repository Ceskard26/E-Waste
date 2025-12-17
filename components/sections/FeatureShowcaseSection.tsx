'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Smartphone, Zap, Shield, TrendingUp, Clock, Users } from 'lucide-react'

export function FeatureShowcaseSection() {
  const features = [
    {
      icon: Smartphone,
      title: 'Reconocimiento Instantáneo',
      description: 'IA avanzada identifica cualquier dispositivo electrónico en segundos',
      badge: 'IA',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Análisis de Valor',
      description: 'Descubre el valor real de materiales recuperables en tus residuos',
      badge: 'Valor',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Gestión Segura',
      description: 'Protocolos certificados para manejo seguro de componentes peligrosos',
      badge: 'Seguro',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Impacto Medible',
      description: 'Métricas reales de tu contribución a la economía circular',
      badge: 'Impacto',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Proceso Rápido',
      description: 'De la foto a la acción en menos de 30 segundos',
      badge: '30s',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: Users,
      title: 'Red de Recicladores',
      description: 'Conectamos con centros certificados en tu área',
      badge: 'Red',
      color: 'from-indigo-500 to-blue-500'
    }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tecnología que Revoluciona el Reciclaje
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada característica diseñada para maximizar el valor y minimizar el impacto ambiental
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} w-fit mx-auto`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <Badge 
                      className="absolute -top-2 -right-2 bg-primary text-primary-foreground"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-center">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}