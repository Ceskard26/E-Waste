'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

export function TestimonialSection() {
  const testimonials = [
    {
      name: 'María González',
      role: 'Gerente de Sostenibilidad, TechCorp',
      content: 'E-cycle transformó completamente nuestra gestión de residuos. Ahora sabemos exactamente qué hacer con cada dispositivo.',
      rating: 5,
      company: 'TechCorp'
    },
    {
      name: 'Carlos Mendoza',
      role: 'Director de IT, StartupHub',
      content: 'La precisión del reconocimiento es impresionante. Nos ayudó a recuperar $15,000 en materiales que íbamos a desechar.',
      rating: 5,
      company: 'StartupHub'
    },
    {
      name: 'Ana Rodríguez',
      role: 'Coordinadora Ambiental, Universidad',
      content: 'Perfecto para educar a estudiantes sobre reciclaje responsable. La interfaz es muy intuitiva.',
      rating: 5,
      company: 'Universidad'
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Casos de Éxito Reales
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Organizaciones que ya están transformando sus residuos en oportunidades
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <div className="relative mb-6">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground leading-relaxed pl-6">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary font-medium mt-1">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}