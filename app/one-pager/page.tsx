'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function OnePagerPage() {
  const sections = [
    {
      title: 'Problema',
      content: 'Las empresas y hogares desechan e-waste sin información clara sobre materiales, riesgos y opciones de reciclaje/reutilización. Se pierde valor recuperable por mala segregación.',
      color: 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800'
    },
    {
      title: 'Solución',
      content: 'Aplicación que identifica e-waste desde una foto y proporciona guía inmediata: materiales, degradación estimada, nivel de riesgo y opciones accionables.',
      color: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800'
    },
    {
      title: 'MVP (Hackathon)',
      content: 'Demo simulada que reconoce 4 categorías: pilas/baterías, cables, discos duros y partes de servidores. Incluye contenido educativo y flujo de 3 pasos.',
      color: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800'
    },
    {
      title: 'Impacto Objetivo',
      content: 'Mejorar segregación de e-waste, identificar valor recuperable, aumentar conciencia ambiental. Contribuye a ODS 12 (Consumo responsable) y ODS 13 (Acción climática).',
      color: 'bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800'
    },
    {
      title: 'Validación',
      content: '10 entrevistas + 30 respuestas de encuesta confirman que la mayoría no sabe cómo desechar e-waste de forma segura. 85% valida el problema.',
      color: 'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800'
    },
    {
      title: 'Roadmap',
      content: '0-1 mes: Demo + validación. 1-3 meses: Modelo real + más categorías. 3-6 meses: Alianzas empresas/municipios + métricas ambientales.',
      color: 'bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800'
    }
  ]

  const team = [
    {
      name: 'César Carrasco',
      roles: ['PM/Pitch', 'Cloud Solutions', 'IBM Cloud Specialist'],
      linkedin: 'https://www.linkedin.com/in/cesar-carrasco-rojas/'
    },
    {
      name: 'Brenda Mendoza',
      roles: ['ML/Data', 'Frontend', 'BID-IA Specialist'],
      linkedin: 'https://www.linkedin.com/in/brenda-mendoza-34a4082b6/'
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mr-4">
              <span className="text-primary-foreground font-bold text-xl">E</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">E-cycle One Pager</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reconoce residuos electrónicos con una foto y aprende a reciclarlos bien
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Badge variant="success">Economía Circular</Badge>
            <Badge variant="outline">Prototipo educativo</Badge>
            <Badge variant="secondary">Enfoque empresas</Badge>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full ${section.color}`}>
                <CardHeader>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Equipo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.roles.map((role, i) => (
                      <Badge key={i} variant="outline">{role}</Badge>
                    ))}
                  </div>
                  <Link href={member.linkedin}>
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Contacto & GitHub</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/app">
                  <Button>
                    Probar Demo
                  </Button>
                </Link>
                <Link href="https://github.com/Ceskard26/E-Waste">
                  <Button variant="outline">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </Link>
                <Link href="mailto:contact@e-waste.com">
                  <Button variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Contacto
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}