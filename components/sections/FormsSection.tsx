'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getTranslation, type Locale } from '@/lib/i18n'

export function FormsSection() {
  const [locale] = useState<Locale>('es')
  const t = (key: keyof typeof import('@/lib/i18n').translations.es) => getTranslation(locale, key)

  // Left form state
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    userType: '',
  })
  const [signupSubmitted, setSignupSubmitted] = useState(false)
  const [signupStorage, setSignupStorage] = useLocalStorage<any[]>('signup-submissions', [])

  // Right form state
  const [feedbackData, setFeedbackData] = useState({
    wasteType: '',
    pain: '',
    comment: '',
  })
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)
  const [feedbackStorage, setFeedbackStorage] = useLocalStorage<any[]>('feedback-submissions', [])

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const submission = {
      ...signupData,
      timestamp: new Date().toISOString(),
    }
    setSignupStorage([...signupStorage, submission])
    setSignupSubmitted(true)
    setSignupData({ name: '', email: '', userType: '' })
  }

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const submission = {
      ...feedbackData,
      timestamp: new Date().toISOString(),
    }
    setFeedbackStorage([...feedbackStorage, submission])
    setFeedbackSubmitted(true)
    setFeedbackData({ wasteType: '', pain: '', comment: '' })
  }

  const wasteOptions = locale === 'es' 
    ? ['Pilas', 'Cables', 'Discos duros', 'Partes de servidores', 'Otros']
    : ['Batteries', 'Cables', 'Hard drives', 'Server parts', 'Other']

  const painOptions = locale === 'es'
    ? ['No sé dónde llevarlo', 'No sé si es peligroso', 'No sé cómo separarlo', 'No me interesa/tiempo']
    : ['Don\'t know where to take it', 'Don\'t know if it\'s dangerous', 'Don\'t know how to sort it', 'No time/interest']

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Participa en el proyecto</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ayúdanos a mejorar la solución con tu feedback
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Form - Signup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t('joinList')}</CardTitle>
              </CardHeader>
              <CardContent>
                {signupSubmitted ? (
                  <div className="text-center py-8">
                    <div className="text-green-600 text-4xl mb-4">✓</div>
                    <p className="text-lg font-semibold">¡Gracias por registrarte!</p>
                    <p className="text-muted-foreground">Te contactaremos pronto.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSignupSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder={t('name')}
                        value={signupData.name}
                        onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder={t('email')}
                        value={signupData.email}
                        onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        value={signupData.userType}
                        onChange={(e) => setSignupData({...signupData, userType: e.target.value})}
                        required
                      >
                        <option value="">{t('iAm')}</option>
                        <option value="individual">{t('individual')}</option>
                        <option value="company">{t('company')}</option>
                      </select>
                    </div>
                    <Button type="submit" className="w-full">
                      {t('signUp')}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Form - Feedback */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t('quickFeedback')}</CardTitle>
              </CardHeader>
              <CardContent>
                {feedbackSubmitted ? (
                  <div className="text-center py-8">
                    <div className="text-green-600 text-4xl mb-4">✓</div>
                    <p className="text-lg font-semibold">¡Feedback recibido!</p>
                    <p className="text-muted-foreground">Gracias por tu aporte.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                    <div>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        value={feedbackData.wasteType}
                        onChange={(e) => setFeedbackData({...feedbackData, wasteType: e.target.value})}
                        required
                      >
                        <option value="">{t('whatDiscard')}</option>
                        {wasteOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        value={feedbackData.pain}
                        onChange={(e) => setFeedbackData({...feedbackData, pain: e.target.value})}
                        required
                      >
                        <option value="">{t('mainDifficulty')}</option>
                        {painOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <textarea
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder={t('comment')}
                        value={feedbackData.comment}
                        onChange={(e) => setFeedbackData({...feedbackData, comment: e.target.value})}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      {t('send')}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}