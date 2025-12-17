'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Recycle, Zap, Globe, TrendingUp } from 'lucide-react'

export function StatsSection() {
  const stats = [
    {
      icon: Globe,
      value: '54M',
      label: 'Toneladas de e-waste generadas globalmente en 2019',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      value: '20%',
      label: 'Crecimiento anual del e-waste mundial',
      color: 'text-red-600'
    },
    {
      icon: Recycle,
      value: '17.4%',
      label: 'Tasa global de reciclaje de e-waste',
      color: 'text-orange-600'
    },
    {
      icon: Zap,
      value: '$57B',
      label: 'Valor de materiales recuperables perdidos anualmente',
      color: 'text-green-600'
    }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">La Crisis del E-waste</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Datos que demuestran la urgencia de actuar ahora
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="text-center h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className={`mx-auto mb-4 p-4 rounded-full w-fit ${stat.color.replace('text-', 'bg-')}/10`}>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.label}
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