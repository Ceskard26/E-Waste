'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Linkedin, Mail, Github } from 'lucide-react'
import Link from 'next/link'

export default function TeamPage() {
  const team = [
    {
      name: 'César Carrasco',
      roles: ['PM/Pitch', 'Backend', 'Cloud Solutions'],
      description: 'Ingeniero de Ciberseguridad y Cloud Customer Success Specialist en IBM Cloud. 8 meses de experiencia en soluciones cloud y gestión de productos tecnológicos.',
      responsibilities: [
        'Definición de producto y roadmap',
        'Arquitectura cloud y deployment',
        'Estrategia de marketing y pitch',
        'Gestión de stakeholders'
      ],
      skills: ['Cybersecurity', 'IBM Cloud', 'Customer Success', 'Product Management', 'Cloud Architecture'],
      linkedin: 'https://www.linkedin.com/in/cesar-carrasco-rojas/',
      email: 'cesar@e-waste.com',
      github: 'https://github.com/Ceskard26'
    },
    {
      name: 'Brenda Mendoza',
      roles: ['ML/Data', 'Frontend', 'Investigación de impacto'],
      description: 'Ingeniera de Ciberseguridad especializada en IA, próxima a iniciar en el área de Inteligencia Artificial del Banco Interamericano de Desarrollo (BID).',
      responsibilities: [
        'Desarrollo del modelo de clasificación ML',
        'Implementación frontend y UX',
        'Investigación de impacto ambiental',
        'Análisis de datos y métricas'
      ],
      skills: ['Cybersecurity', 'Machine Learning', 'AI Research', 'React', 'Data Analysis'],
      linkedin: 'https://www.linkedin.com/in/brenda-mendoza-34a4082b6/',
      email: 'brenda@e-waste.com',
      github: 'https://github.com/BrendaMendozaJ'
    }
  ]

  const teamStats = [
    { label: 'Experiencia en Ciberseguridad', value: '2 Ing.' },
    { label: 'Experiencia IBM Cloud', value: '8 meses' },
    { label: 'Próximo rol en BID-IA', value: '1 persona' },
    { label: 'Hackathons participados', value: '3+' }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestro Equipo</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un equipo multidisciplinario comprometido con la sostenibilidad y la tecnología
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {teamStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Team Members */}
        <div className="space-y-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Profile Section */}
                  <div className="bg-primary/5 p-8 flex flex-col items-center text-center">
                    <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                      <span className="text-4xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {member.roles.map((role, i) => (
                        <Badge key={i} variant="secondary">{role}</Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Link href={member.linkedin}>
                        <Button variant="outline" size="sm">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`mailto:${member.email}`}>
                        <Button variant="outline" size="sm">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={member.github}>
                        <Button variant="outline" size="sm">
                          <Github className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="md:col-span-2 p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {member.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Responsabilidades</h4>
                        <ul className="space-y-2">
                          {member.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Habilidades</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">¿Quieres colaborar?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Estamos abiertos a colaboraciones, mentorías y oportunidades de crecimiento. 
                Si compartes nuestra visión de un futuro más sostenible, ¡contáctanos!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="mailto:team@e-waste.com">
                  <Button>
                    <Mail className="h-4 w-4 mr-2" />
                    Contactar equipo
                  </Button>
                </Link>
                <Link href="/app">
                  <Button variant="outline">
                    Probar demo
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